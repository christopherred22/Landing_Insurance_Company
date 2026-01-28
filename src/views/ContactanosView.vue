<template>
  <div class="contact-wrapper">
    <!-- Contenedor del formulario -->
    <div class="content-container animate-on-scroll">
      <header class="header-section">
        <h1 class="main-title">{{ $t('contact.title') }}</h1>
        <p class="subtitle">{{ $t('contact.subtitle') }}</p>
      </header>

      <section class="card-section animate-on-scroll">
        <div class="contact-card">
          <h2 class="card-title">{{ $t('contact.helpTitle') }}</h2>

         <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="input-group">
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('contact.form.name')"
              required
            >
          </div>

          <div class="input-group">
            <input
              type="tel"
              v-model="form.phone"
              :placeholder="$t('contact.form.phone')"
              required
              pattern="[0-9]+"
              inputmode="numeric"
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

          <div class="input-group">
            <textarea
              v-model="form.message"
              :placeholder="$t('contact.form.message')"
              class="custom-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-primary">{{ $t('contact.form.submit') }}</button>
          <button type="button" class="btn-outline">{{ $t('contact.form.whatsapp') }}</button>
        </form>

        </div>
      </section>
    </div>

    <!-- Íconos fuera del formulario -->
    <div class="icon-wrapper animate-on-scroll">
      <div class="info-item">
        <div class="icon-box"><img src="@/assets/telefono.png"></div>
        <div class="info-text">
          <span class="label">{{ $t('contact.info.phoneLabel') }}</span>
          <span class="value">+1 615-625-0165</span>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-box"><img src="@/assets/correo.png"></div>
        <div class="info-text">
          <span class="label">{{ $t('contact.info.emailLabel') }}</span>
          <span class="value">office@providenceinsuranceagency.com </span>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-box"><img src="@/assets/ubicacion.png"></div>
        <div class="info-text">
          <span class="label">{{ $t('contact.info.locationLabel') }}</span>
          <span class="value">{{ $t('contact.info.locationValue') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({ name: '', phone: '', email: '', message: '' })

const handleSubmit = () => {
  emailjs.send(
    'service_zkx12ry',   // ← aquí va tu Service ID
    'template_m3822dv',  // ← aquí va tu Template ID
    {
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email,
      message: form.value.message
    },
    '2amQ98NgEdwESH--w'       // ← aquí va tu Public Key (User ID)
  ).then(() => {
  alert('Correo enviado con éxito ✅')
  // ← ESTA LÍNEA ES LA ÚNICA MODIFICACIÓN
  form.value = { name: '', phone: '', email: '', message: '' }
}).catch(err => {
    console.error(err)
    alert('Error al enviar el correo ❌')
  })
}

// Animaciones con IntersectionObserver (sin cambios)
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>


<style scoped>
.contact-wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  background-image: url('../assets/background_contactanos.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.main-title {
  color: #1b264f;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
  word-wrap: break-word;
}

.subtitle {
  color: #666;
  font-size: 1rem;
  margin-top: 5px;
  word-wrap: break-word;
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
  border: 1px solid #696969;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
  box-sizing: border-box;
}

.custom-textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 15px;
  resize: none;
  background: #fdfdfd;
  box-sizing: border-box;
}

.input-group textarea {
  width: 100%;
  font-size: 1rem;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 15px;
  outline: none;
  box-sizing: border-box;
  background: #fdfdfd;
  resize: none;
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
  font-size: 1rem;
}

.btn-outline {
  background: white;
  color: #1b264f;
  border: 1.5px solid #1b264f;
  padding: 14px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.icon-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}

.info-item {
  flex: 1 1 250px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0);
  padding: 15px;
  border-radius: 15px;
  box-sizing: border-box;
}

.icon-box {
  background: #0d124a;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-box img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.info-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: visible;
  min-width: 0;
  flex: 1;
}

.label {
  font-size: 0.75rem;
  color: #999;
  font-weight: bold;
}

.value {
  color: #1b264f;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1.3;
  word-break: break-word;
}

/* ANIMACIONES */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE TABLETS */
@media (max-width: 1024px) {
  .icon-wrapper {
    gap: 15px;
  }

  .info-item {
    flex: 1 1 200px;
  }
}

/* RESPONSIVE MÓVILES */
@media (max-width: 768px) {
  .contact-wrapper {
    padding: 30px 10px;
    overflow-x: hidden;
  }

  .header-section {
    padding: 0 15px;
  }

  .main-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 0.9rem;
    padding: 0 5px;
    line-height: 1.4;
  }

  .contact-card {
    padding: 25px 18px;
  }

  .card-title {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  .icon-wrapper {
    flex-direction: column;
    gap: 12px;
    padding: 0 10px;
    align-items: stretch;
  }

  .info-item {
    flex: 1 1 100%;
    max-width: 100%;
    justify-content: flex-start;
    padding: 12px 10px;
  }

  .value {
    font-size: 0.8rem;
  }

  .btn-primary,
  .btn-outline {
    font-size: 0.95rem;
    padding: 14px;
  }
}

/* OPTIMIZACIÓN ESPECÍFICA PARA iPHONE 13 Y SIMILARES (390px - 430px) */
@media (min-width: 360px) and (max-width: 430px) {
  .contact-wrapper {
    padding: 25px 12px;
    background-attachment: scroll;
  }

  .content-container {
    max-width: 100%;
    padding: 0;
  }

  .header-section {
    margin-bottom: 20px;
    padding: 0 12px;
  }

  .main-title {
    font-size: 1.6rem;
    line-height: 1.2;
    padding: 0 5px;
  }

  .subtitle {
    font-size: 0.85rem;
    margin-top: 8px;
    padding: 0 8px;
    line-height: 1.4;
  }

  .card-section {
    margin-bottom: 25px;
    padding: 0 5px;
  }

  .contact-card {
    padding: 22px 16px;
    border-radius: 20px;
  }

  .card-title {
    font-size: 0.9rem;
    margin-bottom: 18px;
    line-height: 1.3;
    padding: 0 5px;
  }

  .contact-form {
    gap: 16px;
  }

  .input-group input {
    font-size: 0.9rem;
    padding: 10px 0;
  }

  .custom-textarea,
  .input-group textarea {
    height: 85px;
    font-size: 0.9rem;
    padding: 12px;
  }

  .btn-primary,
  .btn-outline {
    padding: 12px 18px;
    font-size: 0.88rem;
  }

  .icon-wrapper {
    gap: 10px;
    padding: 0 8px;
  }

  .info-item {
    padding: 10px 8px;
    gap: 10px;
  }

  .icon-box {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
  }

  .icon-box img {
    width: 20px;
    height: 20px;
  }

  .info-text {
    min-width: 0;
    max-width: calc(100% - 50px);
  }

  .label {
    font-size: 0.68rem;
    margin-bottom: 2px;
  }

  .value {
    font-size: 0.78rem;
    line-height: 1.35;
    word-break: break-word;
    overflow-wrap: break-word;
  }
}

/* MÓVILES PEQUEÑOS (iPhone SE, etc.) */
@media (max-width: 375px) {
  .contact-wrapper {
    padding: 20px 10px;
  }

  .main-title {
    font-size: 1.5rem;
    padding: 0 8px;
  }

  .subtitle {
    font-size: 0.8rem;
    padding: 0 10px;
  }

  .contact-card {
    padding: 20px 14px;
  }

  .card-title {
    font-size: 0.85rem;
  }

  .btn-primary,
  .btn-outline {
    font-size: 0.82rem;
    padding: 11px 16px;
  }

  .value {
    font-size: 0.75rem;
  }

  .icon-wrapper {
    padding: 0 5px;
  }
}

/* LANDSCAPE MÓVIL */
@media (max-height: 600px) and (orientation: landscape) {
  .contact-wrapper {
    padding: 20px 12px;
  }

  .header-section {
    margin-bottom: 15px;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .card-section {
    margin-bottom: 20px;
  }

  .contact-card {
    padding: 18px 16px;
  }

  .contact-form {
    gap: 14px;
  }

  .custom-textarea,
  .input-group textarea {
    height: 70px;
  }
}
</style>
