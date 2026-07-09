<template>
  <div class="manager">
    <h2>Hero Banner Images</h2>
    <p class="hint">Shown in the homepage hero carousel, in the order below.</p>

    <section class="live-state">
      <h3>Live on public site now</h3>
      <div v-if="liveSlides.length" class="live-strip">
        <img v-for="row in liveSlides" :key="row.id" :src="row.image_url" :alt="row.label ?? ''" />
      </div>
      <p v-else class="live-empty">No active banners — the homepage is showing its built-in default images.</p>
    </section>

    <div class="add-card">
      <input v-model="newLabel" type="text" placeholder="Label (optional)" />
      <input ref="fileInput" type="file" accept="image/png,image/jpeg,image/webp,image/gif" @change="onFileChange" />
      <button class="save-btn" @click="add" :disabled="uploading || !newFile">
        {{ uploading ? 'Uploading…' : 'Add banner' }}
      </button>
    </div>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

    <div class="grid">
      <div class="card" v-for="(row, i) in sorted" :key="row.id">
        <img :src="row.image_url" :alt="row.label ?? ''" />

        <div class="reorder-row">
          <button class="order-btn" :disabled="i === 0" @click="move(row, -1)">↑ Move up</button>
          <button class="order-btn" :disabled="i === sorted.length - 1" @click="move(row, 1)">↓ Move down</button>
        </div>

        <input v-model="row.label" type="text" placeholder="Label" @change="update(row)" />

        <label class="replace-label">
          Replace image
          <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" @change="(e) => replaceImage(row, e)" />
        </label>

        <div class="row-controls">
          <label class="active-toggle">
            <input type="checkbox" v-model="row.active" @change="update(row)" /> Active
          </label>
          <button class="delete-btn" :disabled="busyId === row.id" @click="remove(row)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import { uploadPublicFile, deletePublicFile } from '@/lib/storage'
import { useRealtimeTable } from '@/composables/useRealtimeTable'

interface BannerImage {
  id: string
  label: string | null
  image_url: string
  active: boolean
  sort_order: number
}

const { rows, refetch } = useRealtimeTable<BannerImage>('banner_images', 'sort_order')
const sorted = computed(() => [...rows.value].sort((a, b) => a.sort_order - b.sort_order))
const liveSlides = computed(() => sorted.value.filter((r) => r.active))

const newLabel = ref('')
const newFile = ref<File | null>(null)
const uploading = ref(false)
const busyId = ref<string | null>(null)
const errorMsg = ref('')

function onFileChange(e: Event) {
  newFile.value = (e.target as HTMLInputElement).files?.[0] ?? null
}

async function add() {
  if (!newFile.value) return
  uploading.value = true
  errorMsg.value = ''
  try {
    const image_url = await uploadPublicFile('banners', newFile.value)
    const nextOrder = sorted.value.length ? Math.max(...sorted.value.map((r) => r.sort_order)) + 1 : 0
    const { error } = await supabase
      .from('banner_images')
      .insert({ image_url, label: newLabel.value || null, sort_order: nextOrder, active: true })
    if (error) throw error
    newLabel.value = ''
    newFile.value = null
    refetch()
  } catch (e) {
    errorMsg.value = (e as any)?.message ?? String(e)
  } finally {
    uploading.value = false
  }
}

async function update(row: BannerImage) {
  const { error } = await supabase
    .from('banner_images')
    .update({ label: row.label, sort_order: row.sort_order, active: row.active })
    .eq('id', row.id)
  if (error) errorMsg.value = error.message
}

async function replaceImage(row: BannerImage, e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  busyId.value = row.id
  errorMsg.value = ''
  const oldUrl = row.image_url
  try {
    const image_url = await uploadPublicFile('banners', file)
    const { error } = await supabase.from('banner_images').update({ image_url }).eq('id', row.id)
    if (error) throw error
    await deletePublicFile('banners', oldUrl)
    refetch()
  } catch (e) {
    errorMsg.value = (e as any)?.message ?? String(e)
  } finally {
    busyId.value = null
  }
}

async function move(row: BannerImage, direction: -1 | 1) {
  const list = sorted.value
  const idx = list.findIndex((r) => r.id === row.id)
  const swapWith = list[idx + direction]
  if (!swapWith) return

  const a = { id: row.id, sort_order: swapWith.sort_order }
  const b = { id: swapWith.id, sort_order: row.sort_order }
  const [{ error: e1 }, { error: e2 }] = await Promise.all([
    supabase.from('banner_images').update({ sort_order: a.sort_order }).eq('id', a.id),
    supabase.from('banner_images').update({ sort_order: b.sort_order }).eq('id', b.id),
  ])
  if (e1 || e2) errorMsg.value = e1?.message ?? e2?.message ?? 'Failed to reorder.'
  else refetch()
}

async function remove(row: BannerImage) {
  if (!confirm('Delete this banner image? This cannot be undone.')) return
  busyId.value = row.id
  const { error } = await supabase.from('banner_images').delete().eq('id', row.id)
  if (error) {
    errorMsg.value = error.message
  } else {
    await deletePublicFile('banners', row.image_url)
    refetch()
  }
  busyId.value = null
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

.live-state {
  background: #f0f5ff;
  border: 1px solid #d3e0f7;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 24px;
}

.live-state h3 {
  margin: 0 0 10px;
  font-size: 14px;
  color: #012148;
}

.live-strip {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}

.live-strip img {
  width: 100px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.live-empty {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}

.add-card {
  display: flex;
  gap: 12px;
  background: white;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e0e6ed;
  margin-bottom: 24px;
  align-items: center;
}

.add-card input[type='text'] {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
}

.save-btn {
  background: #012148;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 12px;
}

.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.reorder-row {
  display: flex;
  gap: 6px;
  padding: 10px 12px 0;
}

.order-btn {
  flex: 1;
  background: #f1f5f9;
  border: 1px solid #e0e6ed;
  border-radius: 6px;
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
  color: #012148;
}

.order-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.card input[type='text'] {
  width: calc(100% - 24px);
  margin: 10px 12px 0;
  padding: 8px 10px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
}

.replace-label {
  display: block;
  margin: 10px 12px 0;
  font-size: 12px;
  color: #64748b;
}

.replace-label input {
  display: block;
  width: 100%;
  margin-top: 4px;
  font-size: 12px;
}

.row-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px 0;
  flex-wrap: wrap;
}

.active-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.delete-btn {
  margin-left: auto;
  background: white;
  color: #c62828;
  border: 1px solid #c62828;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
}

.delete-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.error {
  color: #c62828;
}
</style>
