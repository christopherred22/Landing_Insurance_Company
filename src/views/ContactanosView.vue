<template>
  <div class="contact-wrapper">
    <!-- Contenedor del formulario -->
    <div class="content-container animate-on-scroll">
      <header class="header-section">
        <h1 class="main-title">CONTÁCTANOS</h1>
        <p class="subtitle">Protegemos lo que más importa para ti</p>
      </header>

      <section class="card-section animate-on-scroll">
        <div class="contact-card">
          <h2 class="card-title">¿NECESITAS AYUDA?</h2>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="input-group">
              <input type="text" v-model="form.name" placeholder="Nombre Completo" required>
            </div>
            <div class="input-group">
              <input type="tel" v-model="form.phone" placeholder="Teléfono" required>
            </div>
            <div class="input-group">
              <input type="email" v-model="form.email" placeholder="Correo electrónico" required>
            </div>

            <textarea v-model="form.message" placeholder="Mensaje" class="custom-textarea"></textarea>

            <button type="submit" class="btn-primary">Enviar Mensaje</button>
            <button type="button" class="btn-outline">Whatsapp Us</button>
          </form>
        </div>
      </section>
    </div>

    <!-- Íconos fuera del formulario -->
    <div class="icon-wrapper animate-on-scroll">
      <div class="info-item">
        <div class="icon-box"><img src="@/assets/telefono.png"></div>
        <div class="info-text">
          <span class="label">TELÉFONO</span>
          <span class="value">615-625-0165</span>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-box"><img src="@/assets/correo.png"></div>
        <div class="info-text">
          <span class="label">CORREO ELECTRÓNICO</span>
          <span class="value">providetexasinsurance@hotmail.com</span>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-box"><img src="@/assets/ubicacion.png"></div>
        <div class="info-text">
          <span class="label">UBICACIÓN</span>
          <span class="value">Calle Lassy 2101, Ennis, Texas 75119</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({ name: '', phone: '', email: '', message: '' })
const handleSubmit = () => alert('Mensaje enviado')

// Animaciones con IntersectionObserver
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

<style>
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
  border-radius: 30px; /* ← esquinas más rectas, estilo Power BI */
  border: 1px solid #696969; /* ← borde gris claro, muy sutil */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* ← sombra suave y profesional */
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

.icon-wrapper {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
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
  overflow: visible;
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
}

/* =====================================================
   ANIMACIONES
   ===================================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.expand-enter-active { transition: all 0.3s ease-out; }
.expand-enter-from { opacity: 0; transform: translateY(-10px); }
.arrow { transition: 0.3s; }
.arrow.rotated { transform: rotate(180deg); }

/* Responsive */
@media (max-width: 768px) {
  .icon-wrapper {
    padding: 0 10px;
  }

  .info-item {
    flex-direction: row;
    max-width: 100%;
  }
}
</style>
