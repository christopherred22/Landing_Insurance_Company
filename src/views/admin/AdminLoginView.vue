<template>
  <div class="login-page">
    <form class="login-card" @submit.prevent="onSubmit">
      <h1>Admin Login</h1>
      <input v-model="email" type="email" placeholder="Email" autocomplete="username" required />
      <input v-model="password" type="password" placeholder="Password" autocomplete="current-password" required />
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      <button type="submit" :disabled="loading">{{ loading ? 'Signing in…' : 'Sign in' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  if (data.session) router.replace('/admin')
})

async function onSubmit() {
  loading.value = true
  errorMsg.value = ''
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  loading.value = false
  if (error) {
    errorMsg.value = error.message
    return
  }
  router.replace('/admin')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #012148;
  font-family: 'Poppins', sans-serif;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

h1 {
  color: #012148;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

input {
  padding: 12px 14px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 15px;
}

button {
  background: #c62828;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: default;
}

.error {
  color: #c62828;
  font-size: 14px;
  margin: 0;
}
</style>
