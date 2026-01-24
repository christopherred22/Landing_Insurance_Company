<template>
  <div class="landing-page animate-on-scroll">
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
            <RouterLink :to="`/${locale}/contact`" class="btn-primary">
              {{ $t('home.hero.actions.contact') }}
            </RouterLink>

              <a
    href="https://wa.me/16156250165"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-secondary"
  >
    {{ $t('home.hero.actions.whatsapp') }}
  </a>
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
          <img src="@/assets/estrella_PI.png" alt="Providence Logo" class="main-logo-img" />
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
            <img src="@/assets/escudo.png" alt="" class="service-icon-img">
            <h3 class="service-card-title">
              {{ $t('home.services.insurance.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.insurance.desc') }}
            </p>
            <RouterLink :to="`/${locale}/contact`" class="service-card-link">
              {{ $t('home.services.more') }}
            </RouterLink>
          </div>

          <div class="service-card">
            <img src="@/assets/calculadora.png" alt="" class="service-icon-img">
            <h3 class="service-card-title">
              {{ $t('home.services.taxes.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.taxes.desc') }}
            </p>
            <RouterLink :to="`/${locale}/contact`" class="service-card-link">
              {{ $t('home.services.more') }}
            </RouterLink>
          </div>

          <div class="service-card">
            <img src="@/assets/notariado.png" alt="" class="service-icon-img">
            <h3 class="service-card-title">
              {{ $t('home.services.notary.title') }}
            </h3>
            <p class="service-card-desc">
              {{ $t('home.services.notary.desc') }}
            </p>
            <RouterLink :to="`/${locale}/contact`" class="service-card-link">
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
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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
  padding: 80px 24px;
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
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #C62828;
  color: white;
}

.btn-primary:hover {
  background: #a01f1f;
  transform: translateY(-2px);
}

.btn-secondary {
  background: white;
  border: 2px solid #012148;
  color: #012148;
}

.btn-secondary:hover {
  background: #012148;
  color: white;
}

.rounded-img {
  height: 100%;
  width: 100%;
  border-radius: 40px;
  object-fit: cover;
}

/* Contenedor principal */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
}

@keyframes slide-animation {
  0%, 25% { transform: translateX(0%); }
  33%, 58% { transform: translateX(-100%); }
  66%, 91% { transform: translateX(-200%); }
  100% { transform: translateX(0%); }
}

.carousel-track {
  display: flex;
  width: 100%;
  animation: slide-animation 12s infinite ease-in-out;
}

.carousel-track img {
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 40px;
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* --- ABOUT SECTION --- */
.about-section {
  padding: 80px 24px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.about-title {
  font-family: 'Poppins', sans-serif;
  font-size: 85px;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -2px;
  margin-bottom: 30px;
  white-space: nowrap;
}

.red-text {
  color: #C62828;
  padding-right: 10px;
}

.nosotros-wrapper {
  position: relative;
  display: inline-block;
}

.blue-outline-text {
  color: transparent;
  -webkit-text-stroke: 2.5px #012148;
  text-transform: lowercase;
  margin-left: -5px;
}

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

/* --- SERVICES SECTION --- */
.services-section {
  padding: 80px 24px;
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
  padding: 40px 30px;
  border-radius: 30px;
  border: 2px solid #c6c6c6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #C62828;
}

.service-icon-img {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  object-fit: contain;
}

.service-card-title {
  font-size: 34px;
  font-weight: 900;
  color: #012148;
  margin-bottom: 15px;
}

.service-card-desc {
  font-size: 19px;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.5;
}

.service-card-link {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid #333;
  padding-bottom: 4px;
  transition: all 0.3s ease;
}

.service-card-link:hover {
  color: #C62828;
  border-color: #C62828;
}

/* --- WHY US SECTION --- */
.why-us-section {
  padding: 100px 24px;
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
}

.why-us-card {
  background: white;
  padding: 80px 40px 40px;
  border-radius: 30px;
  border: 2px solid #e0e0e0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;
  transition: all 0.3s ease;
}

.why-us-card:hover {
  transform: translateY(-10px);
  border-color: #C62828;
}

.why-icon-floating {
  width: 80px;
  height: 80px;
  background-color: #3F51B5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 15px rgba(63, 81, 181, 0.3);
}

.why-icon-floating img {
  width: 40px;
  height: 40px;
  object-fit: contain;
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
  line-height: 1.6;
  font-weight: 400;
}

/* --- RESPONSIVE TABLET (768px - 1024px) --- */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-text {
    text-align: center;
  }

  .hero-text h1 {
    font-size: 52px;
  }

  .hero-text p {
    font-size: 24px;
  }

  .hero-actions {
    justify-content: center;
  }

  .carousel-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .about-title {
    font-size: 65px;
    white-space: normal;
  }

  .about-paragraph {
    margin: 0 auto;
    max-width: 100%;
  }

  .main-logo-img {
    margin: 0 auto;
    max-width: 350px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .services-main-title {
    font-size: 50px;
  }

  .why-us-main-title {
    font-size: 50px;
  }
}

/* --- RESPONSIVE MOBILE (max-width: 768px) --- */
@media (max-width: 768px) {
  .hero-section,
  .about-section,
  .services-section {
    padding: 50px 20px;
  }

  .why-us-section {
    padding: 60px 20px;
  }

  .hero-text h1 {
    font-size: 42px;
  }

  .hero-text p {
    font-size: 20px;
    margin: 15px 0 30px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    font-size: 18px;
    padding: 14px 20px;
  }

  .about-title {
    font-size: 50px;
    line-height: 1;
  }

  .about-subtitle {
    font-size: 26px;
  }

  .about-paragraph {
    font-size: 18px;
  }

  .services-main-title {
    font-size: 42px;
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-card {
    padding: 30px 25px;
  }

  .service-card-title {
    font-size: 28px;
  }

  .service-card-desc {
    font-size: 17px;
  }

  .why-us-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .why-us-main-title {
    font-size: 42px;
    margin-bottom: 50px;
  }

  .why-card-title {
    font-size: 24px;
  }
}

/* --- RESPONSIVE SMALL MOBILE (max-width: 480px) --- */
@media (max-width: 480px) {
  .hero-section,
  .about-section,
  .services-section {
    padding: 40px 16px;
  }

  .why-us-section {
    padding: 50px 16px;
  }

  .hero-text h1 {
    font-size: 32px;
    line-height: 1.2;
  }

  .hero-text p {
    font-size: 16px;
    margin: 15px 0 25px;
  }

  .btn-primary,
  .btn-secondary {
    font-size: 16px;
    padding: 12px 20px;
  }

  .about-title {
    font-size: 36px;
    line-height: 1.1;
    white-space: normal;
  }

  .red-text {
    display: block;
    margin-bottom: 5px;
  }

  .nosotros-wrapper {
    display: block;
  }

  .blue-outline-text {
    -webkit-text-stroke: 2px #012148;
    margin-left: 0;
  }

  .about-subtitle {
    font-size: 22px;
  }

  .about-paragraph {
    font-size: 16px;
    text-align: left;
  }

  .main-logo-img {
    max-width: 280px;
  }

  .services-main-title {
    font-size: 32px;
    margin-bottom: 30px;
  }

  .service-card {
    padding: 25px 20px;
  }

  .service-icon-img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }

  .service-card-title {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .service-card-desc {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .service-card-link {
    font-size: 16px;
  }

  .why-us-main-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .why-us-card {
    padding: 70px 25px 30px;
  }

  .why-icon-floating {
    width: 70px;
    height: 70px;
    top: -35px;
  }

  .why-icon-floating img {
    width: 35px;
    height: 35px;
  }

  .why-card-title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .why-card-text {
    font-size: 15px;
  }

  .carousel-container {
    border-radius: 25px;
  }

  .rounded-img,
  .carousel-track img {
    border-radius: 25px;
  }
}
</style>
