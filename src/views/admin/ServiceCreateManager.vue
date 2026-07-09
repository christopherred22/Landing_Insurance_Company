<template>
  <div class="manager">
    <h2>Create Service</h2>
    <p class="hint">Add a new insurance / tax / notary service. It appears on the public site once saved (hide it later from "Manage Services" if it's not ready).</p>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <p v-if="successMsg" class="success">{{ successMsg }}</p>

    <div class="form-card">
      <ServiceForm :key="formKey" submit-label="Create service" @submit="onAdd" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'
import { uploadPublicFile } from '@/lib/storage'
import ServiceForm, { type ServiceValues } from './ServiceForm.vue'

const errorMsg = ref('')
const successMsg = ref('')
const formKey = ref(0)

async function onAdd(values: ServiceValues, iconFile: File | null) {
  errorMsg.value = ''
  successMsg.value = ''
  try {
    const icon_url = iconFile ? await uploadPublicFile('service-icons', iconFile) : values.icon_url
    const { id, ...payload } = values
    const { error } = await supabase.from('services').insert({ ...payload, icon_url })
    if (error) throw error
    successMsg.value = `"${values.title_en || values.slug}" created.`
    formKey.value++ // remounts ServiceForm with empty defaults
  } catch (e) {
    errorMsg.value = (e as any)?.message ?? String(e)
  }
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
  max-width: 560px;
}

.form-card {
  background: white;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  padding: 16px;
  max-width: 640px;
}

.error {
  color: #c62828;
}

.success {
  color: #1b7a3d;
}
</style>
