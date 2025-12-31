<template>
  <div class="landing-page">
    <!-- HERO -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1>
            {{ $t('home.hero.title.line1') }} <br />
            {{ $t('home.hero.title.line2') }} <br />
            <span class="highlight">{{ $t('home.hero.title.highlight') }}</span>
          </h1>

          <p>
            {{ $t('home.hero.subtitle.line1') }}<br />
            {{ $t('home.hero.subtitle.line2') }}
          </p>

          <div class="hero-actions">
            <button class="btn-primary">
              {{ $t('home.hero.actions.contact') }}
            </button>
            <button class="btn-secondary">
              {{ $t('home.hero.actions.whatsapp') }}
            </button>
          </div>
        </div>

        <div class="hero-image">
          <div class="carousel-container">
            <div class="carousel-track">
              <img src="@/assets/family.png" alt="Family" class="rounded-img" />
              <img src="@/assets/workers.png" alt="Insurance" class="rounded-img" />
              <img src="@/assets/bakers.png" alt="Notary" class="rounded-img" />
            </div>
            <div class="carousel-dots">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about-section">
      <div class="container about-grid">
        <div class="about-content">
          <h2 class="about-title">
            <span class="red-text">{{ $t('home.about.titleRed') }}</span>
            <div class="nosotros-wrapper">
              <span class="blue-outline-text">{{ $t('home.about.titleBlue') }}</span>
              <div class="blue-underline"></div>
            </div>
          </h2>

          <h3 class="about-subtitle">
            {{ $t('home.about.subtitle') }}
          </h3>

          <p class="about-paragraph">
            {{ $t('home.about.description') }}
          </p>
        </div>

        <div class="about-logo">
          <img
            src="@/assets/estrella_PI.png"
            alt="Providence Logo"
            class="main-logo-img"
          />
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services-section">
      <div class="container">
        <h2 class="services-main-title">
          {{ $t('home.services.title') }}
        </h2>

        <div class="services-grid">
          <div class="service-card">
            <img src="@/assets/escudo.png" alt="">
            <h3 class="service-card-title">
              {{ $t('home.services.insurance.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.insurance.desc') }}
            </p>
              <RouterLink
                :to="`/${locale}/contact`"
                class="service-card-link"
                >
                {{ $t('home.services.more') }}
              </RouterLink>
          </div>

          <div class="service-card">
            <img src="@/assets/calculadora.png" alt="">
            <h3 class="service-card-title">
              {{ $t('home.services.taxes.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.taxes.desc') }}
            </p>
              <RouterLink
                :to="`/${locale}/contact`"
                class="service-card-link"
                >
                {{ $t('home.services.more') }}
              </RouterLink>
          </div>

          <div class="service-card">
            <img src="@/assets/notariado.png" alt="">
            <h3 class="service-card-title">
              {{ $t('home.services.notary.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.notary.desc') }}
            </p>
              <RouterLink
                :to="`/${locale}/contact`"
                class="service-card-link"
                >
                {{ $t('home.services.more') }}
              </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="why-us-section">
      <div class="container">
        <h2 class="why-us-main-title">
          {{ $t('home.why.title') }}
        </h2>

        <div class="why-us-grid">
          <div class="why-us-card">
            <div class="why-icon-floating">
              <img src="@/assets/g1.png" alt="">
            </div>
            <h4 class="why-card-title">
              {{ $t('home.why.items.experience.title') }}
            </h4>
            <p class="why-card-text">
              {{ $t('home.why.items.experience.text') }}
            </p>
          </div>

          <div class="why-us-card">
            <div class="why-icon-floating">
              <img src="@/assets/g2.png" alt="">
            </div>
            <h4 class="why-card-title">
              {{ $t('home.why.items.clarity.title') }}
            </h4>
            <p class="why-card-text">
              {{ $t('home.why.items.clarity.text') }}
            </p>
          </div>

          <div class="why-us-card">
            <div class="why-icon-floating">
              <img src="@/assets/g3.png" alt="">
            </div>
            <h4 class="why-card-title">
              {{ $t('home.why.items.bilingual.title') }}
            </h4>
            <p class="why-card-text">
              {{ $t('home.why.items.bilingual.text') }}
            </p>
          </div>

          <div class="why-us-card">
            <div class="why-icon-floating">
              <img src="@/assets/g4.png" alt="">
            </div>
            <h4 class="why-card-title">
              {{ $t('home.why.items.office.title') }}
            </h4>
            <p class="why-card-text">
              {{ $t('home.why.items.office.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const locale = computed(() => {
  return route.params.locale === 'en' ? 'en' : 'es'
})
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

/* --- CONFIGURACIÓN GLOBAL --- */
.landing-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-image: url('@/assets/background-lines.png');
  background-size: cover;
  background-attachment: fixed;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- HERO SECTION --- */
.hero-section {
  padding: 80px ;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: start;
  justify-content: center;
}

.hero-text h1 {
  font-size: 64px;
  font-weight: 900;
  color: #012148;
  line-height: 1.1;
}

.highlight {
  color: #C62828;
}

.hero-text p {
  font-size: 28px;
  color: #444;
  margin: 20px 0 40px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn-primary,
.btn-secondary {
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #C62828;
  color: white;
}

.btn-secondary {
  background: white;
  border: 2px solid #012148;
  color: #012148;
}

.rounded-img {
  height: 100%;
  width: 80%;
  border-radius: 40px;
}

/* Contenedor principal */
.carousel-container {
  position: relative;
  width: 80%;
  overflow: hidden;
}
/* --- LÓGICA DE ANIMACIÓN DEL CARRUSEL --- */

/* 1. Definimos la animación para el movimiento (3 imágenes = 3 pasos) */
@keyframes slide-animation {
  0%, 25% { transform: translateX(0%); }      /* Imagen 1 */
  33%, 58% { transform: translateX(-100%); }  /* Imagen 2 */
  66%, 91% { transform: translateX(-200%); }  /* Imagen 3 */
  100% { transform: translateX(0%); }         /* Regreso al inicio */
}

/* 2. Definimos la animación para los puntitos (sincronizada) */
@keyframes dot-active {
  0%, 25% { opacity: 1; transform: scale(1.2); background: #fff; }
  33%, 100% { opacity: 0.5; transform: scale(1); background: rgba(255, 255, 255, 0.5); }
}

.carousel-track {
  display: flex;
  width: 100%;
  animation: slide-animation 12s infinite ease-in-out;
  overflow: cover;
}

.carousel-track img {
  width: 100%; /* Cada imagen ocupa exactamente el 100% del contenedor */
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 40px;
}

/* --- ABOUT SECTION (IGUAL A TU IMAGEN) --- */
/* --- SECCIÓN SOBRE NOSOTROS (IDÉNTICA AL DISEÑO) --- */
.about-section {
  padding: 80px ;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

/* CORRECCIÓN PRINCIPAL EN EL TÍTULO */
.about-title {
  font-family: 'Poppins', sans-serif;
  font-size: 85px; /* Tamaño masivo como la imagen */
  font-weight: 900; /* Extra bold */
  line-height: 0.85; /* Interlineado muy compacto para unir las líneas */
  letter-spacing: -2px; /* Las letras más juntas */
  margin-bottom: 30px;
  /* Eliminamos display: flex y gap para que se junten */
  white-space: nowrap; /* Evita que se separe en dos líneas si la pantalla es estrecha */
}

.red-text {
  color: #C62828;
}

/* El contenedor de "nosotros" debe ser inline-block para pegarse a "Sobre" */
.nosotros-wrapper {
  position: relative;
  display: inline-block;
}

.blue-outline-text {
  color: transparent;
  /* Borde azul grueso, relleno transparente */
  -webkit-text-stroke: 2.5px #012148;
  text-transform: lowercase;
  /* Un pequeño margen negativo a la izquierda para pegarlo aún más a "Sobre" si hace falta */
  margin-left: -5px;
}

.blue-underline {
  position: absolute;
  bottom: 5px; /* Ajuste fino de la posición de la línea */
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #0081FF; /* Azul brillante */
  border-radius: 10px;
  z-index: -1; /* Para asegurar que la línea quede detrás del texto hueco */
}

/* Subtítulo y párrafo */
.about-subtitle {
  font-size: 32px;
  color: #707070;
  font-weight: 500;
  margin-bottom: 25px;
}

.about-paragraph {
  font-size: 22px;
  line-height: 1.6;
  color: #333;
  text-align: justify;
  text-justify: inter-word;
  max-width: 650px;
}

.main-logo-img {
  width: 100%;
  max-width: 500px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  /* En tablets, permitimos que se rompa la línea si es necesario */
  .about-title {
    font-size: 65px;
    white-space: normal;
  }
  .about-paragraph {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
    .about-title {
    font-size: 50px;
  }
}
/* --- SERVICES SECTION (IGUAL A TU IMAGEN) --- */
.services-section {
   padding: 80px ;
  text-align: center;
}

.services-main-title {
  font-size: 65px;
  font-weight: 900;
  color: #012148;
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: white;
  padding: 20px 40px;
  border-radius: 45px;
  border: 2px solid #c6c6c6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
  border-radius: 30px;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 50px !important;
  color: #012148;
  margin-bottom: 20px;
}

.service-card-title {
  font-size: 34px;
  font-weight: 900;
  color: #012148;
  margin-bottom: 10px;
}

.service-card-desc {
  font-size: 19px;
  color: #444;
  margin-bottom: 40px;
}

.service-card-link {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid #333;
  padding-bottom: 4px;
}

/* --- WHY US SECTION --- */
/* --- SECCIÓN ¿POR QUÉ ELEGIRNOS? --- */

/* --- SECCIÓN ¿POR QUÉ ELEGIRNOS? --- */

.why-us-section {
  padding: 100px 0;
  background-color: #fff;
  text-align: center;
}

.why-us-main-title {
  font-family: 'Poppins', sans-serif;
  font-size: 60px;
  font-weight: 900;
  color: #012148;
  margin-bottom: 80px;
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 40px;
  max-width: 1000px;
  margin: 0 auto;
  /* Eliminamos el hover y la transición de aquí, ya que el grid no debe moverse */
}

.why-us-card {
  background: white;
  padding: 100px 50px 40px;
  margin-bottom: 20px; /* Ajustado para que no choque con la de abajo */
  border-radius: 40px;
  border: 2px solid #e0e0e0; /* Subimos a 2px para igualar a servicios */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;

  /* EFECTO IDENTICO A SERVICIOS */
  transition: transform 0.3s ease, border-color 0.3s ease;
}

/* HOVER APLICADO A LA CARD */
.why-us-card:hover {
  transform: translateY(-10px);
  border-color: #C62828; /* El mismo rojo de servicios */
}

.why-icon-floating {
  width: 70px;
  height: 70px;
  background-color: #3F51B5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 15px rgba(63, 81, 181, 0.3);
}
.why-card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #012148;
  margin-bottom: 15px;
}

.why-card-text {
  font-size: 17px;
  color: #555;
  line-height: 1.4;
  font-weight: 400;
}

/* Responsive */
@media (max-width: 768px) {
  .why-us-grid {
    grid-template-columns: 1fr; /* Una sola columna en móvil */
    gap: 80px 20px;
  }
  .why-us-main-title {
    font-size: 40px;
  }
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {

  .about-grid,
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-title {
    font-size: 60px;
    justify-content: center;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-paragraph {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-main-title {
    font-size: 40px;
  }

  .hero-text h1 {
    font-size: 45px;
  }
}
</style>
