<template>
  <div class="manager">
    <h2>Manage Insurances / Services</h2>
    <p class="hint">Grouped the same way the public services page is: by type, then personal vs. commercial.</p>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <p v-if="!groups.length" class="empty">No services yet. Use the "Create Service" tab to add your first one.</p>

    <section class="group" v-for="group in groups" :key="`${group.category}-${group.subCategory}`">
      <h3>{{ CATEGORY_LABELS[group.category] }} · {{ SUBCATEGORY_LABELS[group.subCategory] }}</h3>

      <div class="list">
        <details class="row" v-for="row in group.items" :key="row.id">
          <summary>
            <img v-if="row.icon_url" :src="row.icon_url" class="row-icon" />
            <span>{{ row.title_en || row.slug }}</span>
            <span v-if="!row.active" class="tag inactive">hidden</span>
            <span class="row-actions" @click.stop>
              <button class="hide-btn" :disabled="busyId === row.id" @click="onToggleActive(row)">
                {{ row.active ? 'Hide' : 'Unhide' }}
              </button>
              <button class="delete-btn" :disabled="busyId === row.id" @click="onDelete(row.id)">Delete</button>
            </span>
          </summary>
          <ServiceForm :model-value="row" submit-label="Save changes" @submit="(v, f) => onUpdate(row.id, v, f)" />
        </details>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { supabase } from '@/lib/supabase'
import { uploadPublicFile } from '@/lib/storage'
import { useRealtimeTable } from '@/composables/useRealtimeTable'
import ServiceForm, { type ServiceValues } from './ServiceForm.vue'

interface ServiceRow extends ServiceValues {
  id: string
}

const CATEGORY_LABELS: Record<ServiceValues['category'], string> = {
  insurance: 'Insurance',
  taxes: 'Taxes',
  notary: 'Notary',
}
const SUBCATEGORY_LABELS: Record<ServiceValues['sub_category'], string> = {
  personal: 'Personal',
  commercial: 'Commercial',
}
const CATEGORY_ORDER: ServiceValues['category'][] = ['insurance', 'taxes', 'notary']
const SUBCATEGORY_ORDER: ServiceValues['sub_category'][] = ['personal', 'commercial']

const { rows, refetch } = useRealtimeTable<ServiceRow>('services', 'sort_order')
const errorMsg = ref('')
const busyId = ref<string | null>(null)

const groups = computed(() => {
  const out: { category: ServiceValues['category']; subCategory: ServiceValues['sub_category']; items: ServiceRow[] }[] = []
  for (const category of CATEGORY_ORDER) {
    for (const subCategory of SUBCATEGORY_ORDER) {
      const items = rows.value
        .filter((r) => r.category === category && r.sub_category === subCategory)
        .sort((a, b) => a.sort_order - b.sort_order)
      if (items.length) out.push({ category, subCategory, items })
    }
  }
  return out
})

async function resolveIconUrl(values: ServiceValues, iconFile: File | null) {
  if (!iconFile) return values.icon_url
  return uploadPublicFile('service-icons', iconFile)
}

async function onUpdate(id: string, values: ServiceValues, iconFile: File | null) {
  errorMsg.value = ''
  try {
    const icon_url = await resolveIconUrl(values, iconFile)
    const { id: _id, ...payload } = values
    const { error } = await supabase.from('services').update({ ...payload, icon_url }).eq('id', id)
    if (error) throw error
    refetch()
  } catch (e) {
    errorMsg.value = (e as any)?.message ?? String(e)
  }
}

async function onToggleActive(row: ServiceRow) {
  busyId.value = row.id
  errorMsg.value = ''
  const { error } = await supabase.from('services').update({ active: !row.active }).eq('id', row.id)
  if (error) errorMsg.value = error.message
  else refetch()
  busyId.value = null
}

async function onDelete(id: string) {
  if (!confirm('Delete this service? This cannot be undone.')) return
  const { error } = await supabase.from('services').delete().eq('id', id)
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

.empty {
  color: #64748b;
  font-size: 14px;
}

.group {
  margin-bottom: 26px;
}

.group h3 {
  font-size: 14px;
  color: #012148;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 2px solid #e0e6ed;
  padding-bottom: 6px;
  margin-bottom: 12px;
}

.row {
  background: white;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
}

summary {
  cursor: pointer;
  font-weight: 600;
  color: #012148;
  display: flex;
  align-items: center;
  gap: 10px;
}

.row-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.tag {
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 10px;
}

.tag.inactive {
  color: #c62828;
  background: #fde8e8;
}

.row-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
}

.hide-btn {
  background: #f1f5f9;
  color: #012148;
  border: 1px solid #e0e6ed;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.delete-btn {
  background: white;
  color: #c62828;
  border: 1px solid #c62828;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
}

.hide-btn:disabled,
.delete-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.row > :not(summary) {
  margin-top: 16px;
}

.error {
  color: #c62828;
}
</style>
