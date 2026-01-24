<template>
  <main class="about-page">

    <!-- HERO FULL WIDTH -->
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="animate-on-scroll" >{{ $t('about.hero.title') }}</h1>
        <p class="subtitle animate-on-scroll">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="intro-section">
      <div class="container">
        <h2 class="animate-on-scroll">
          {{ $t('about.intro.title') }}
        </h2>

        <div class="grid-two-cols">
          <p class="animate-on-scroll">
            {{ $t('about.intro.paragraph1') }}
          </p>
          <p class="animate-on-scroll">
           {{ $t('about.intro.paragraph2') }}
          </p>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="experience-section">
      <div class="container">
        <div class="experience-grid">
          <div class="video-placeholder animate-on-scroll">
            <div class="play-button">▶</div>
          </div>

          <div class="experience-content animate-on-scroll">
            <h3>{{ $t('about.experience.title') }}</h3>
            <p>
              {{ $t('about.experience.text') }}
            </p>
            <blockquote class="quote">
              {{ $t('about.experience.quote') }}
            </blockquote>
          </div>
        </div>
      </div>
    </section>

<section class="gallery-section">
  <div class="container">
    <h2 class="gallery-title animate-on-scroll">{{ $t('about.experience.gallery') }}</h2>

    <div class="gallery-grid">
      <div class="video-wrapper animate-on-scroll">
        <iframe
          src="https://www.tiktok.com/embed/v2/7596071056423537934"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <div class="video-wrapper animate-on-scroll">
        <iframe
          src="https://www.tiktok.com/embed/v2/7583031120564882701"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <div class="video-wrapper animate-on-scroll">
        <iframe
          src="https://www.tiktok.com/embed/v2/7581931550812409143"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

    <!-- VALUES -->
    <section class="values-section container">
      <div class="values-header">
        <h2>{{ $t('about.values.title') }}</h2>
        <p>{{ $t('about.values.subtitle') }}</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="icon-circle">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.6667 55.3332C51.3739 55.3332 52.0522 55.0522 52.5523 54.5521C53.0524 54.052 53.3334 53.3737 53.3334 52.6665V49.3438C53.344 41.8612 42.736 35.9998 32 35.9998C21.264 35.9998 10.6667 41.8612 10.6667 49.3438V52.6665C10.6667 53.3737 10.9476 54.052 11.4477 54.5521C11.9478 55.0522 12.6261 55.3332 13.3334 55.3332H50.6667ZM41.6107 18.2772C41.6107 19.5393 41.3621 20.789 40.8791 21.955C40.3961 23.121 39.6882 24.1805 38.7958 25.0729C37.9034 25.9654 36.8439 26.6733 35.6779 27.1563C34.5118 27.6392 33.2621 27.8878 32 27.8878C30.7379 27.8878 29.4882 27.6392 28.3222 27.1563C27.1562 26.6733 26.0967 25.9654 25.2043 25.0729C24.3118 24.1805 23.6039 23.121 23.1209 21.955C22.6379 20.789 22.3894 19.5393 22.3894 18.2772C22.3894 15.7283 23.4019 13.2838 25.2043 11.4814C27.0066 9.67905 29.4511 8.6665 32 8.6665C34.5489 8.6665 36.9934 9.67905 38.7958 11.4814C40.5981 13.2838 41.6107 15.7283 41.6107 18.2772Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4>{{ $t('about.values.items.team.title') }}</h4>
          <p>{{ $t('about.values.items.team.text') }}</p>
        </div>

        <div class="value-card">
          <div class="icon-circle">
            <svg width="47" height="60" viewBox="0 0 47 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3081 0.000257671L18.0471 4.2057C19.7219 3.86384 21.4532 3.68595 23.2279 3.68595C24.5782 3.68595 25.9047 3.79165 27.1995 3.99223L25.9871 0H19.3081V0.000257671ZM23.2276 6.29643C10.3851 6.29643 0 16.6772 0 29.5197C0 42.3618 10.3851 52.7428 23.2276 52.7428C36.0698 52.7428 46.4507 42.3619 46.4507 29.5195C46.4507 16.6771 36.0699 6.29617 23.2275 6.29617L23.2276 6.29643ZM23.2276 11.6701C33.0866 11.6701 41.0769 19.6604 41.0769 29.5198C41.0769 39.3788 33.0866 47.3733 23.2275 47.3733C13.3681 47.3733 5.37397 39.3788 5.37397 29.5198C5.37397 19.6604 13.3681 11.6701 23.2275 11.6701H23.2276ZM23.2234 16.6895C16.1387 16.6895 10.3933 22.431 10.3933 29.5157C10.3933 36.6004 16.1387 42.3418 23.2234 42.3418C30.3081 42.3418 36.0495 36.6004 36.0495 29.5157C36.0495 22.431 30.3081 16.6895 23.2234 16.6895ZM23.2275 21.8054C27.4881 21.8054 30.9415 25.2588 30.9415 29.5197C30.9415 33.7803 27.4881 37.2338 23.2274 37.2338C18.9664 37.2338 15.513 33.7804 15.513 29.5195C15.513 25.2587 18.9664 21.8051 23.2272 21.8051L23.2275 21.8054ZM23.2275 25.7894C21.1659 25.7894 19.4931 27.4583 19.4931 29.5199C19.4931 31.5811 21.1659 33.2541 23.2275 33.2541C25.2887 33.2541 26.9575 31.5813 26.9575 29.5197C26.9575 27.4584 25.2888 25.7895 23.2274 25.7895L23.2275 25.7894ZM4.97913 47.7961L1.38987 59.7683H7.43248L10.0467 51.7358C8.20135 50.6368 6.4992 49.3135 4.97913 47.7961ZM40.7104 48.5293C39.159 49.956 37.4397 51.1883 35.5902 52.199L38.0717 59.7684H44.1183L40.7104 48.5293ZM19.437 55.0752V59.7683H26.152V55.1882C25.181 55.2981 24.2046 55.3532 23.2275 55.3532C21.9397 55.3532 20.6739 55.2579 19.4366 55.0753L19.437 55.0752Z" fill="#333333"/>
            </svg>
          </div>
          <h4>{{ $t('about.values.items.goal.title') }}</h4>
          <p>{{ $t('about.values.items.goal.text') }}</p>
        </div>

        <div class="value-card">
          <div class="icon-circle">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_278_1148)">
                <path d="M29.7831 -0.0716753C29.6855 -0.054052 29.5891 -0.0301563 29.4946 -0.000136822C28.9736 0.116636 28.5092 0.410456 28.1806 0.831253C27.8519 1.25205 27.6794 1.77379 27.6923 2.30756V4.61525H6.92308C5.08696 4.61525 3.32605 5.34464 2.02772 6.64297C0.729393 7.9413 0 9.70221 0 11.5383L0 41.5383C0 45.3599 3.10154 48.4614 6.92308 48.4614H27.6923V49.3268L15.1431 55.6014C14.5886 55.8692 14.1631 56.3463 13.9604 56.9277C13.7576 57.5091 13.7942 58.1473 14.0619 58.7018C14.3297 59.2563 14.8068 59.6817 15.3882 59.8845C15.9696 60.0872 16.6078 60.0507 17.1623 59.7829L27.6923 54.5191V55.3845C27.6923 55.9965 27.9354 56.5835 28.3682 57.0163C28.801 57.449 29.388 57.6922 30 57.6922C30.612 57.6922 31.199 57.449 31.6318 57.0163C32.0646 56.5835 32.3077 55.9965 32.3077 55.3845V54.5191L42.8377 59.7829C43.3922 60.0507 44.0304 60.0872 44.6118 59.8845C45.1932 59.6817 45.6703 59.2563 45.9381 58.7018C46.2058 58.1473 46.2424 57.5091 46.0396 56.9277C45.8369 56.3463 45.4114 55.8692 44.8569 55.6014L32.3077 49.3268V48.4614H53.0769C56.8985 48.4614 60 45.3599 60 41.5383V11.5383C60 9.70221 59.2706 7.9413 57.9723 6.64297C56.674 5.34464 54.913 4.61525 53.0769 4.61525H32.3077V2.30756C32.3193 1.9794 32.2608 1.65253 32.1361 1.34879C32.0113 1.04506 31.8231 0.771444 31.5842 0.546237C31.3452 0.32103 31.0609 0.149414 30.7503 0.0428564C30.4397 -0.0637017 30.11 -0.102748 29.7831 -0.0716753ZM4.61538 11.5383H55.3846V41.5383H4.61538V11.5383ZM48.1731 13.846C47.6562 13.9016 47.1731 14.1301 46.8023 14.4945L39.2308 22.0683L33.9669 16.7999C33.7148 16.5412 33.4055 16.3453 33.0639 16.228C32.7224 16.1106 32.358 16.0751 32.0002 16.1243C31.6423 16.1734 31.301 16.3059 31.0037 16.511C30.7064 16.7161 30.4615 16.9882 30.2885 17.3053L23.4369 29.2776L20.6238 22.2091C20.4872 21.8441 20.2604 21.5197 19.9646 21.2661C19.6687 21.0124 19.3135 20.8378 18.9319 20.7586C18.5504 20.6793 18.155 20.698 17.7826 20.8128C17.4102 20.9276 17.073 21.1349 16.8023 21.4152L9.87923 28.3383C9.66103 28.5564 9.48792 28.8153 9.36978 29.1002C9.25163 29.3852 9.19077 29.6906 9.19066 29.999C9.19055 30.3075 9.25121 30.613 9.36915 30.898C9.4871 31.183 9.66003 31.4421 9.87808 31.6602C10.0961 31.8784 10.355 32.0516 10.64 32.1697C10.9249 32.2878 11.2303 32.3487 11.5388 32.3488C11.8473 32.3489 12.1527 32.2883 12.4378 32.1703C12.7228 32.0524 12.9818 31.8794 13.2 31.6614L17.5985 27.2629L20.9169 35.4829C21.0735 35.8952 21.345 36.2539 21.6992 36.5167C22.0534 36.7795 22.4754 36.9352 22.9154 36.9656C23.3553 36.996 23.7948 36.8996 24.1817 36.688C24.5686 36.4763 24.8867 36.1582 25.0985 35.7714L32.8154 22.2852L37.5738 27.046C37.789 27.2687 38.0469 27.4457 38.3319 27.5666C38.617 27.6875 38.9234 27.7498 39.2331 27.7498C39.5427 27.7498 39.8492 27.6875 40.1342 27.5666C40.4193 27.4457 40.6771 27.2687 40.8923 27.046L50.1231 17.8152C50.4876 17.4778 50.7335 17.0317 50.8242 16.5432C50.915 16.0548 50.8456 15.5501 50.6266 15.1043C50.4075 14.6584 50.0505 14.2951 49.6084 14.0684C49.1664 13.8417 48.663 13.7637 48.1731 13.846Z" fill="#333333"/>
              </g>
              <defs>
                <clipPath id="clip0_278_1148">
                  <rect width="60" height="60" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4>{{ $t('about.values.items.security.title') }}</h4>
          <p>{{ $t('about.values.items.security.text') }}</p>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animaciones scroll
  const elements = document.querySelectorAll('.animate-on-scroll')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach(el => observer.observe(el))

  // Cargar script de TikTok
  if (!window.tiktokEmbedLoaded) {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.onload = () => {
      window.tiktokEmbedLoaded = true;
    };
    document.body.appendChild(script);
  } else if (window.tiktok) {
    window.tiktok.reset();
  }
})
</script>

<style scoped>
/* =====================================================
   GALLERY SECTION
   ===================================================== */
.gallery-section {
  padding: 120px 0;
  background-color: #F6F9FD;
}

.gallery-title {
  font-size: 55px;
  font-weight: 800;
  color: #012148;
  text-align: center;
  margin-bottom: 60px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.video-wrapper {
  position: relative;
  width: 100%;
  /* Aspect ratio 9:16 para videos verticales de TikTok */
  aspect-ratio: 9 / 16;
  /* Altura mínima para asegurar que se vea completo */
  min-height: 600px;
  max-height: 800px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: #000;
}

.video-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 16px;
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .video-wrapper {
    min-height: 550px;
    max-height: 700px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    gap: 30px;
  }

  .video-wrapper {
    min-height: 600px;
    max-height: 750px;
  }

  .gallery-title {
    font-size: 42px;
    margin-bottom: 40px;
  }

  .gallery-section {
    padding: 80px 0;
  }
}

@media (max-width: 480px) {
  .video-wrapper {
    min-height: 500px;
    max-height: 650px;
  }

  .gallery-title {
    font-size: 36px;
  }
}



/* =====================================================
   VARIABLES (SCOPED TO THIS VIEW)
   ===================================================== */
:root {
  --dark: #333333;
  --blue: #012148;
  --yellow: #FCDC67;
  --bg-light: #F6F9FD;
  --max-width: 1440px;
  --h1-size: 96px;
  --h2-size: 55px;
  --h3-size: 48px;
  --h4-size: 32px;
  --body-lg: 32px;
  --body-md: 30px;
  --body-sm: 20px;
}

/* =====================================================
   BASE & LAYOUT
   ===================================================== */
.about-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
  line-height: 1.5;
  overflow-x: hidden;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
}

/* =====================================================
   HERO
   ===================================================== */

/* HERO */
.hero-section {
  width: 100%;
  min-height: 600px;
  background-color: #F6F9FD;
  background-image: url('@/assets/B_AboutUs.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-container {
  max-width: 1440px;
  width: 100%;
  padding: 0 80px;
  text-align: center;
}

.hero-section h1 {
  font-size: 96px;
  font-weight: 900;
  color: #012148;
  margin-bottom: 24px;
}

.subtitle {
  font-size: 32px;
  font-weight: 300;
  max-width: 900px;
  margin: 0 auto;
}

/* =====================================================
   SECCIONES GENERALES
   ===================================================== */
.intro-section, .experience-section, .values-section {
  padding: 120px 0;
}

.intro-section h2 {
  font-size: 55px;
  font-weight: 800;
  color: #012148;
  max-width: 700px;
  margin-bottom: 60px;
}

.grid-two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.grid-two-cols p {
  font-size: 30px;
  font-weight: 300;
  line-height: 1.6;
}

/* =====================================================
   EXPERIENCIA
   ===================================================== */
.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.video-placeholder {
  border-radius: 24px;
  aspect-ratio: 16 / 9;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease;
}

.video-placeholder:hover {
  transform: scale(1.02);
}

.play-button {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.experience-content h3 {
  font-size: 48px;
  font-weight: 800;
  color: #012148;
  margin-bottom: 24px;
}

.experience-content p {
  font-size: 30px;
  font-weight: 300;
}

.quote {
  margin-top: 40px;
  padding-left: 30px;
  border-left: 6px solid #FCDC67;
  font-size: 20px;
  font-weight: 600;
  color: #012148;
  font-style: italic;
}

/* =====================================================
   GALLERY SECTION
   ===================================================== */
.gallery-section {
  padding: 120px 0;
  background-color: #F6F9FD;
}

.gallery-title {
  font-size: 55px;
  font-weight: 800;
  color: #012148;
  text-align: center;
  margin-bottom: 60px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.video-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

/* =====================================================
   VALUES
   ===================================================== */
.values-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 100px;
}

.values-header h2 {
  font-size: 55px;
  color: #012148;
  margin-bottom: 24px;
}

.values-header p {
  font-size: 30px;
  font-weight: 300;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.value-card {
  text-align: center;
  padding: 20px;
}

.icon-circle {
  width: 96px;
  height: 96px;
  background: #FCDC67;
  border-radius: 50%;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.value-card:hover .icon-circle {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(252, 220, 103, 0.4);
}

.value-card h4 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
}

.value-card p {
  font-size: 20px;
  font-weight: 300;
}

/* =====================================================
   ANIMATIONS
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

/* Delay gradual para las cards de valores */
.values-grid .value-card:nth-child(2) { transition-delay: 0.2s; }
.values-grid .value-card:nth-child(3) { transition-delay: 0.4s; }

/* Delay gradual para los videos de galería */
.gallery-grid .video-wrapper:nth-child(2) { transition-delay: 0.2s; }
.gallery-grid .video-wrapper:nth-child(3) { transition-delay: 0.4s; }

/* =====================================================
   RESPONSIVE
   ===================================================== */
/* RESPONSIVE */
@media (max-width: 1200px) {
  .container,
  .hero-container {
    padding: 0 40px;
  }

  .hero-section h1 {
    font-size: 72px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .grid-two-cols,
  .experience-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .hero-section {
    min-height: 420px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .hero-section h1 {
    font-size: 48px;
  }

  .subtitle {
    font-size: 20px;
  }

  .container,
  .hero-container {
    padding: 0 20px;
  }

  .gallery-title {
    font-size: 42px;
    margin-bottom: 40px;
  }

  .gallery-section {
    padding: 80px 0;
  }
}
</style>
