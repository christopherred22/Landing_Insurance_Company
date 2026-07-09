<template>
  <div class="manager">
    <h2>TikTok Links (max 3)</h2>
    <p class="hint">
      All 3 slots show as playable videos in the "Sobre Nosotros" gallery (paste a full video URL, e.g.
      tiktok.com/@user/video/123..., for it to play in-page — a profile link just shows as a card).
      <strong>Slot 1 only</strong> is also the single TikTok icon shown in the site footer.
    </p>

    <div class="slot" v-for="pos in SLOTS" :key="pos">
      <div class="slot-row">
        <span class="slot-label">Slot {{ pos }}<span v-if="pos === 1" class="footer-badge">also in footer</span></span>
        <input
          v-model="forms[pos].url"
          type="url"
          placeholder="https://www.tiktok.com/@..."
          :class="{ invalid: fieldErrors[pos] }"
        />
        <label class="active-toggle">
          <input type="checkbox" v-model="forms[pos].active" /> Active
        </label>
        <button class="save-btn" @click="save(pos)" :disabled="saving[pos]">
          {{ saving[pos] ? 'Saving…' : 'Save' }}
        </button>
        <button v-if="existingId(pos)" class="delete-btn" @click="remove(pos)">Clear</button>
      </div>
      <p v-if="fieldErrors[pos]" class="field-error">{{ fieldErrors[pos] }}</p>

      <div class="preview" v-if="forms[pos].url.trim()">
        <span class="status-badge" :class="isLive(pos) ? 'live' : 'draft'">
          {{ isLive(pos) ? '🟢 Live on public site' : '✏️ Unsaved — click Save to publish' }}
        </span>

        <div v-if="previews[pos].status === 'loading'" class="preview-card loading">Loading preview…</div>

        <div v-else-if="previews[pos].status === 'error'" class="preview-card error">
          Couldn't load a preview for this link. Double check it's a public TikTok profile or video.
        </div>

        <a
          v-else-if="previews[pos].status === 'ok'"
          class="preview-card ok"
          :href="forms[pos].url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img v-if="previews[pos].data?.thumbnail_url" :src="previews[pos].data?.thumbnail_url" alt="" />
          <div v-else class="preview-fallback-icon">🎵</div>
          <div class="preview-meta">
            <strong>{{ previews[pos].data?.author_name || 'TikTok account' }}</strong>
            <span v-if="previews[pos].data?.title">{{ previews[pos].data?.title }}</span>
          </div>
        </a>
      </div>
    </div>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onUnmounted } from 'vue'
import { supabase } from '@/lib/supabase'
import { useRealtimeTable } from '@/composables/useRealtimeTable'
import { isTiktokUrl } from '@/lib/validators'
import { fetchTiktokOembed, type TiktokOEmbed } from '@/lib/tiktokOembed'

interface TiktokLink {
  id: string
  url: string
  position: number
  active: boolean
}

type Slot = 1 | 2 | 3
const SLOTS: Slot[] = [1, 2, 3]

const { rows, refetch } = useRealtimeTable<TiktokLink>('tiktok_links', 'position')

const forms = reactive<Record<Slot, { url: string; active: boolean }>>({
  1: { url: '', active: true },
  2: { url: '', active: true },
  3: { url: '', active: true },
})
const saving = reactive<Record<Slot, boolean>>({ 1: false, 2: false, 3: false })
const fieldErrors = reactive<Record<Slot, string>>({ 1: '', 2: '', 3: '' })
const previews = reactive<Record<Slot, { status: 'idle' | 'loading' | 'ok' | 'error'; data?: TiktokOEmbed }>>({
  1: { status: 'idle' },
  2: { status: 'idle' },
  3: { status: 'idle' },
})
const errorMsg = ref('')

watch(
  rows,
  (list) => {
    for (const pos of SLOTS) {
      const row = list.find((r) => r.position === pos)
      forms[pos].url = row?.url ?? ''
      forms[pos].active = row?.active ?? true
    }
  },
  { immediate: true },
)

function existingId(pos: Slot) {
  return rows.value.find((r) => r.position === pos)?.id
}

function isLive(pos: Slot) {
  const row = rows.value.find((r) => r.position === pos)
  return !!row && row.url === forms[pos].url.trim() && row.active === forms[pos].active
}

const debounceTimers: Partial<Record<Slot, ReturnType<typeof setTimeout>>> = {}

for (const pos of SLOTS) {
  watch(
    () => forms[pos].url,
    (url) => {
      clearTimeout(debounceTimers[pos])
      const trimmed = url.trim()
      if (!trimmed) {
        previews[pos] = { status: 'idle' }
        return
      }
      if (!isTiktokUrl(trimmed)) {
        previews[pos] = { status: 'idle' }
        return
      }
      previews[pos] = { status: 'loading' }
      debounceTimers[pos] = setTimeout(async () => {
        const data = await fetchTiktokOembed(trimmed)
        previews[pos] = data ? { status: 'ok', data } : { status: 'error' }
      }, 500)
    },
    { immediate: true },
  )
}

onUnmounted(() => {
  for (const pos of SLOTS) clearTimeout(debounceTimers[pos])
})

async function save(pos: Slot) {
  errorMsg.value = ''
  fieldErrors[pos] = ''

  const url = forms[pos].url.trim()
  if (url && !isTiktokUrl(url)) {
    fieldErrors[pos] = 'Must be a tiktok.com link (e.g. https://www.tiktok.com/@yourhandle).'
    return
  }

  saving[pos] = true
  const { error } = await supabase
    .from('tiktok_links')
    .upsert({ position: pos, url, active: forms[pos].active }, { onConflict: 'position' })
  saving[pos] = false
  if (error) errorMsg.value = error.message
  else refetch()
}

async function remove(pos: Slot) {
  const id = existingId(pos)
  if (!id) return
  if (!confirm(`Clear the TikTok link in slot ${pos}?`)) return
  const { error } = await supabase.from('tiktok_links').delete().eq('id', id)
  if (error) errorMsg.value = error.message
  else refetch()
}
</script>

<style scoped>
.manager h2 {
  color: #012148;
  margin-bottom: 4px;
}

.hint {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 20px;
}

.slot {
  background: white;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e0e6ed;
  margin-bottom: 12px;
}

.slot-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.slot input.invalid {
  border-color: #c62828;
  background: #fff5f5;
}

.field-error {
  color: #c62828;
  font-size: 13px;
  margin: 8px 0 0;
}

.slot-label {
  font-weight: 700;
  color: #012148;
  width: 110px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-badge {
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #9a6700;
  background: #fff4e0;
  border-radius: 10px;
  padding: 2px 6px;
  width: fit-content;
}

.slot input[type='url'] {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
}

.active-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  white-space: nowrap;
}

.save-btn {
  background: #012148;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.delete-btn {
  background: white;
  color: #c62828;
  border: 1px solid #c62828;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.error {
  color: #c62828;
}

.preview {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed #e0e6ed;
}

.status-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.status-badge.live {
  background: #e6f7ec;
  color: #1b7a3d;
}

.status-badge.draft {
  background: #fff4e0;
  color: #9a6700;
}

.preview-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e0e6ed;
  background: #f9fafb;
  color: #012148;
  text-decoration: none;
}

.preview-card.loading,
.preview-card.error {
  color: #64748b;
  font-size: 13px;
}

.preview-card.error {
  color: #c62828;
  background: #fff5f5;
  border-color: #f3c8c8;
}

.preview-card img {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}

.preview-fallback-icon {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background: #012148;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.preview-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.preview-meta strong {
  font-size: 14px;
}

.preview-meta span {
  font-size: 12px;
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
