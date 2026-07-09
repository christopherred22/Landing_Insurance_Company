<template>
  <div class="services-page">
    <!-- HERO -->
    <section class="hero-services animate-on-scroll">
      <div class="hero-inner">
        <h1>{{ t('services.hero.title') }}</h1>
<p class="hero-sub">{{ t('services.hero.subtitle') }}</p>

<RouterLink
  :to="`/${locale}/contact`"
  class="btn-expert"
>
  {{ $t('services.hero.cta') }}
</RouterLink>






      </div>

      <!-- MAIN CATEGORY -->
      <nav class="main-nav-minimal">
        <template v-for="(cat, i) in mainCategories" :key="cat.key">
          <button
            @click="selectMainCategory(cat.key)"
            :class="{ active: mainCategory === cat.key }"
          >
            {{ t(cat.label) }}
          </button>
          <span v-if="i < mainCategories.length - 1" class="separator">|</span>
        </template>
      </nav>
    </section>

    <!-- CONTENT -->
    <main class="services-container animate-on-scroll">
      <!-- SUBCATEGORY -->
      <div class="sub-nav">
        <button
          v-for="sub in subCategories"
          :key="sub.key"
          @click="subCategory = sub.key"
          :class="{ active: subCategory === sub.key }"
        >
          {{ t(sub.label) }}
        </button>
      </div>

      <!-- SERVICES -->
      <div class="services-grid">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="service-card"
        >
          <div class="icon-circle">
            <img v-if="service.icon_url" :src="service.icon_url" class="service-icon" alt="" />
          </div>

          <h3>{{ titleFor(service) }}</h3>

          <!-- FAQ -->
          <div class="faq-list">
            <div
              class="faq-item"
              v-for="faq in faqKeys"
              :key="faq.key"
            >
              <button
                class="faq-trigger"
                @click="toggleFaq(service.id + faq.key)"
              >
                <span>{{ t(faq.label) }}</span>
                <span
                  class="arrow"
                  :class="{ rotated: activeFaq === service.id + faq.key }"
                >⌄</span>
              </button>

              <transition name="expand">
                <div
                  v-if="activeFaq === service.id + faq.key"
                  class="faq-content"
                >
                  {{ fieldFor(service, faq.key) }}
                </div>
              </transition>
            </div>
          </div>


            <RouterLink
    :to="`/${locale}/contact`"
    class="btn-cotiza"
  >
    {{ $t('services.cta.quote') }}
              </RouterLink>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()

const locale = computed(() => {
  return route.params.locale === 'en' ? 'en' : 'es'
})

/* ---------------- i18n ---------------- */
const { t } = useI18n()

/* ---------------- TYPES ---------------- */
type MainCategory = 'insurance' | 'taxes' | 'notary'
type SubCategory = 'personal' | 'commercial'

interface Service {
  id: string
  category: MainCategory
  sub_category: SubCategory
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

/* ---------------- STATE ---------------- */
const mainCategory = ref<MainCategory>('insurance')
const subCategory = ref<SubCategory>('personal')
const activeFaq = ref<string | null>(null)

/* ---------------- MENUS ---------------- */
const mainCategories = [
  { key: 'insurance', label: 'services.categories.insurance' },
  { key: 'taxes', label: 'services.categories.taxes' },
  { key: 'notary', label: 'services.categories.notary' }
] as const

const subCategories = [
  { key: 'personal', label: 'services.subcategories.personal' },
  { key: 'commercial', label: 'services.subcategories.commercial' }
] as const

const selectMainCategory = (key: MainCategory) => {
  mainCategory.value = key
  subCategory.value = 'personal'
}

/* ---------------- FAQ ---------------- */
const faqKeys = [
  { key: 'cover', label: 'services.faq.cover' },
  { key: 'why', label: 'services.faq.why' },
  { key: 'who', label: 'services.faq.who' }
] as const

const toggleFaq = (id: string) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

/* ---------------- DATA (Supabase) ---------------- */
import { useRealtimeTable } from '@/composables/useRealtimeTable'

const { rows: services } = useRealtimeTable<Service>('services', 'sort_order')

const titleFor = (s: Service) => (locale.value === 'en' ? s.title_en : s.title_es)
const fieldFor = (s: Service, prefix: 'cover' | 'why' | 'who') =>
  locale.value === 'en' ? s[`${prefix}_en`] : s[`${prefix}_es`]

/* ---------------- FILTER ---------------- */
const filteredServices = computed(() =>
  services.value
    .filter(
      s =>
        s.active &&
        s.category === mainCategory.value &&
        s.sub_category === subCategory.value
    )
    .sort((a, b) => a.sort_order - b.sort_order)
)

/* ---------------- ANIMATION ---------------- */
onMounted(() => {
  const els = document.querySelectorAll('.animate-on-scroll')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        obs.unobserve(e.target)
      }
    })
  })
  els.forEach(el => obs.observe(el))
})
</script>



<style scoped>
.services-page { width: 100%; overflow-x: hidden; font-family: 'Poppins', sans-serif; }

/* HERO */
.hero-services {
  text-align: center;
  padding: 80px 24px 40px;
  background-image: url('@/assets/B_AboutUs.png'); /* Asegúrate de tener un patrón de líneas suave */
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-inner h1 {
  font-size: 80px;
  font-weight: 900;
  color: #002244;
  margin-bottom: 20px;
}

.hero-sub {
  font-size: 20px;
  color: #64748b;
  margin-bottom: 35px;
}

.btn-expert {
  background: #b92b31;
  color: white;
  border: none;
  padding: 14px 35px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 60px;
  text-decoration: none;
}

/* MENÚ DE LÍNEAS (Minimal) */
.main-nav-minimal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

.main-nav-minimal button {
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #002244;
  cursor: pointer;
  transition: 0.3s;
}

.main-nav-minimal button.active {
  color: #b92b31;
}

.separator {
  color: #cbd5e1;
  font-size: 20px;
  font-weight: 300;
}

/* CONTENIDO */
.services-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 80px 100px;
}

.sub-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
  margin-top: 20px;
}

.sub-nav button {
  background: none;
  border: none;
  font-size: 20px;
  color: #64748b;
  cursor: pointer;
}

.sub-nav button.active {
  color: #b92b31;
  text-decoration: underline;
  text-underline-offset: 5px;
}

/* CARDS */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* --- TARJETA CON HOVER SUAVE --- */
.service-card {
  background: white;
  border-radius: 20px; /* Bordes redondeados según diseño */
  padding: 40px 30px;
  text-align: center;
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center; /* Asegura que todo el contenido esté centrado */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.service-card:hover {
  transform: translateY(-8px); /* Elevación más sutil */
  /* Sombra más tenue, menos "brillosa" */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  border-color: #e2e8f0;
}

/* --- ICONO CON MOVIMIENTO --- */
.icon-circle {
  width: 85px;
  height: 85px;
  background: #ffeb99;
  border-radius: 50%;
  margin: 0 auto 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  transition: transform 0.4s ease; /* Solo animamos el movimiento */
}

.service-card:hover .icon-circle {
  transform: scale(1.1) rotate(5deg); /* Movimiento ligero sin cambiar color */
}

.service-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

/* --- BOTÓN ¡COTIZA YA! (Mantener forma pequeña) --- */
.btn-cotiza {
  background: white;
  border: 1.5px solid #b92b31;
  color: #b92b31;
  padding: 8px 35px; /* Padding fijo para que no crezca al ancho total */
  border-radius: 50px; /* Forma totalmente ovalada */
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content; /* IMPORTANTE: solo toma el ancho del texto */
  margin: 0 auto; /* Lo mantiene centrado */
}

.btn-cotiza:hover {
  background: #b92b31;
  color: white;
}

/* --- TÍTULOS Y FAQ --- */
.service-card h3 {
  font-size: 24px;
  font-weight: 800;
  color: #002244;
  margin-bottom: 25px;
}

.faq-list {
  width: 100%; /* El contenedor de FAQ sí ocupa el ancho para las líneas */
  text-align: left;
  margin-bottom: 30px;
}

.faq-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border: none;
  background: none;
  border-bottom: 1px solid #f1f5f9;
  font-size: 15px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
}

.faq-content {
  padding: 10px 0;
  font-size: 14px;
  color: #475569;
}

/* BOTÓN COTIZA (Estilo exacto al mockup) */
.btn-cotiza {
  background: white;
  border: 1.5px solid #b92b31;
  color: #b92b31;
  padding: 8px 30px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-cotiza:hover {
  background: #b92b31;
  color: white;
}

/* ANIMACIONES */

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

.expand-enter-active { transition: all 0.3s ease-out; }
.expand-enter-from { opacity: 0; transform: translateY(-10px); }
.arrow { transition: 0.3s; }
.arrow.rotated { transform: rotate(180deg); }

@media (max-width: 1100px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .hero-inner h1 { font-size: 45px; }
  .services-container{

    padding: 0 20px;
    width: 100%;
    box-sizing: border-box; /* Asegura que el padding no rompa el ancho */
  }
  .main-nav-minimal{

    gap:10px
  }

}

/* OPTIMIZACIÓN ESPECÍFICA PARA iPHONE 13 Y SIMILARES (390px - 430px) */
@media (min-width: 360px) and (max-width: 430px) {
  .hero-services {
    padding: 60px 15px 30px;
  }

  .hero-inner h1 {
    font-size: 38px;
    line-height: 1.2;
  }

  .hero-sub {
    font-size: 16px;
    margin-bottom: 25px;
  }

  .btn-expert {
    font-size: 15px;
    padding: 11px 24px;
    margin-bottom: 40px;
  }

  /* NAVEGACIÓN PRINCIPAL - AJUSTE CRÍTICO */
  .main-nav-minimal {
    gap: 6px;
    padding: 0 10px;
    margin-top: 35px;
  }

  .main-nav-minimal button {
    font-size: 14px;
    font-weight: 600;
    padding: 0 3px;
  }

  .separator {
    font-size: 14px;
    margin: 0 2px;
  }

  /* SUB NAVEGACIÓN */
  .sub-nav {
    gap: 15px;
    margin-bottom: 40px;
  }

  .sub-nav button {
    font-size: 16px;
  }

  /* CONTENEDOR PRINCIPAL */
  .services-container {
    padding: 25px 15px 50px;
  }

  /* TARJETAS */
  .service-card {
    padding: 25px 18px;
  }

  .service-card h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .icon-circle {
    width: 75px;
    height: 75px;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .faq-trigger {
    font-size: 14px;
    padding: 10px 0;
  }

  .faq-content {
    font-size: 13px;
  }

  .btn-cotiza {
    font-size: 14px;
    padding: 7px 28px;
  }
}

/* MÓVILES PEQUEÑOS (iPhone SE, etc.) */
@media (max-width: 375px) {
  .hero-inner h1 {
    font-size: 34px;
  }

  .main-nav-minimal button {
    font-size: 13px;
  }

  .separator {
    font-size: 13px;
  }

  .sub-nav button {
    font-size: 15px;
  }
}
</style>
