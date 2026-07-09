<template>
  <div class="service-form">
    <div class="grid-2">
      <input v-model="values.slug" type="text" placeholder="slug (unique, e.g. auto-insurance)" />
      <label class="active-toggle">
        <input type="checkbox" v-model="values.active" /> Active
      </label>

      <select v-model="values.category">
        <option value="insurance">Insurance</option>
        <option value="taxes">Taxes</option>
        <option value="notary">Notary</option>
      </select>

      <select v-model="values.sub_category">
        <option value="personal">Personal</option>
        <option value="commercial">Commercial</option>
      </select>
    </div>

    <div class="icon-row">
      <img v-if="values.icon_url" :src="values.icon_url" class="icon-preview" />
      <input type="file" accept="image/*" @change="onIconChange" />
    </div>

    <div class="grid-2">
      <input v-model="values.title_es" type="text" placeholder="Title (ES)" />
      <input v-model="values.title_en" type="text" placeholder="Title (EN)" />
    </div>

    <textarea v-model="values.cover_es" placeholder="What it covers (ES)"></textarea>
    <textarea v-model="values.cover_en" placeholder="What it covers (EN)"></textarea>

    <textarea v-model="values.why_es" placeholder="Why you need it (ES)"></textarea>
    <textarea v-model="values.why_en" placeholder="Why you need it (EN)"></textarea>

    <textarea v-model="values.who_es" placeholder="Who needs it (ES)"></textarea>
    <textarea v-model="values.who_en" placeholder="Who needs it (EN)"></textarea>

    <div class="grid-2">
      <input v-model.number="values.sort_order" type="number" placeholder="Sort order" />
      <button class="save-btn" @click="submit">{{ submitLabel }}</button>
    </div>

    <p v-if="formError" class="form-error">{{ formError }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

export interface ServiceValues {
  id?: string
  slug: string
  category: 'insurance' | 'taxes' | 'notary'
  sub_category: 'personal' | 'commercial'
  active: boolean
  icon_url: string | null
  title_es: string
  title_en: string
  cover_es: string
  cover_en: string
  why_es: string
  why_en: string
  who_es: string
  who_en: string
  sort_order: number
}

function emptyValues(): ServiceValues {
  return {
    slug: '',
    category: 'insurance',
    sub_category: 'personal',
    active: true,
    icon_url: null,
    title_es: '',
    title_en: '',
    cover_es: '',
    cover_en: '',
    why_es: '',
    why_en: '',
    who_es: '',
    who_en: '',
    sort_order: 0,
  }
}

const props = defineProps<{ modelValue?: Partial<ServiceValues>; submitLabel: string }>()
const emit = defineEmits<{ submit: [values: ServiceValues, iconFile: File | null] }>()

const values = reactive<ServiceValues>({ ...emptyValues(), ...props.modelValue })
const formError = ref('')
let iconFile: File | null = null

watch(
  () => props.modelValue,
  (v) => Object.assign(values, emptyValues(), v),
)

function onIconChange(e: Event) {
  iconFile = (e.target as HTMLInputElement).files?.[0] ?? null
}

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/

function submit() {
  const slug = values.slug.trim().toLowerCase()
  if (!SLUG_RE.test(slug)) {
    formError.value = 'Slug must be lowercase letters, numbers, and hyphens only (e.g. auto-insurance).'
    return
  }
  if (!values.title_en.trim() || !values.title_es.trim()) {
    formError.value = 'Title (EN) and Title (ES) are required.'
    return
  }
  formError.value = ''
  values.slug = slug
  emit('submit', { ...values }, iconFile)
  iconFile = null
}
</script>

<style scoped>
.service-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
}

input[type='text'],
input[type='number'],
select,
textarea {
  padding: 10px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
}

textarea {
  min-height: 60px;
  resize: vertical;
}

.active-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.icon-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-preview {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #e0e6ed;
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

.form-error {
  color: #c62828;
  font-size: 14px;
  margin: 0;
}
</style>
