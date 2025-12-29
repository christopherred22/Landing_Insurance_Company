<template>
  <div class="page-wrapper">
    <div class="content-container">
      <header class="header-section">
        <h1 class="main-title">{{ $t('contact.title') }}</h1>
        <p class="subtitle">{{ $t('contact.subtitle') }}</p>
      </header>

      <section class="card-section">
        <div class="contact-card">
          <h2 class="card-title">{{ $t('contact.helpTitle') }}</h2>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="input-group">
              <input
                type="tel"
                v-model="form.phone"
                :placeholder="$t('contact.form.phone')"
                required
              >
            </div>
            <div class="input-group">
              <input
                type="tel"
                v-model="form.phone"
                :placeholder="$t('contact.form.phone')"
                required
              >
            </div>
            <div class="input-group">
              <input
                type="email"
                v-model="form.email"
                :placeholder="$t('contact.form.email')"
                required
              >
            </div>

            <textarea
              v-model="form.message"
              :placeholder="$t('contact.form.message')"
              class="custom-textarea"
            ></textarea>

            <button type="submit" class="btn-primary">{{ $t('contact.form.submit') }}</button>
            <button type="button" class="btn-outline">{{ $t('contact.form.whatsapp') }}</button>
          </form>
        </div>
      </section>

      <footer class="info-grid">
        <div class="info-item">
          <div class="icon-box">📞</div>
          <div class="info-text">
            <span class="label">{{ $t('contact.info.phoneLabel') }}</span>
            <span class="value">615-625-0165</span>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-box">✉️</div>
          <div class="info-text">
            <span class="label">{{ $t('contact.info.emailLabel') }}</span>
            <span class="value">providetexasinsurance@hotmail.com</span>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-box">📍</div>
          <div class="info-text">
            <span class="label">{{ $t('contact.info.locationLabel') }}</span>
            <span class="value">{{ $t('contact.info.locationValue') }}</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ name: '', phone: '', email: '', message: '' })
const handleSubmit = () => alert('Mensaje enviado')
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
}

.content-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header-section {
  margin-bottom: 30px;
}

.main-title {
  color: #1b264f;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
}

.subtitle {
  color: #666;
  font-size: 1rem;
  margin-top: 5px;
}

.card-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.contact-card {
  background: white;
  width: 100%;
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.card-title {
  color: #2a3b8f;
  font-size: 1.1rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
  font-size: 1rem;
  outline: none;
}

.custom-textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 15px;
  resize: none;
  background: #fdfdfd;
}

.btn-primary {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 77, 77, 0.3);
}

.btn-outline {
  background: white;
  color: #1b264f;
  border: 1.5px solid #1b264f;
  padding: 14px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
}

.info-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  padding-left: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-box {
  background: #0d124a;
  min-width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
}

.info-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.label {
  font-size: 0.75rem;
  color: #999;
  font-weight: bold;
}

.value {
  color: #1b264f;
  font-weight: bold;
  font-size: 0.95rem;
}
</style>
