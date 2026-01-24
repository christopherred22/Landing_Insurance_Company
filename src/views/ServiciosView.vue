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
          v-for="(service, index) in filteredServices"
          :key="index"
          class="service-card"
        >
          <div class="icon-circle">
            <component :is="service.icon" />
          </div>

          <h3>{{ t(service.titleKey) }}</h3>

          <!-- FAQ -->
          <div class="faq-list">
            <div
              class="faq-item"
              v-for="faq in faqKeys"
              :key="faq.key"
            >
              <button
                class="faq-trigger"
                @click="toggleFaq(service.titleKey + faq.key)"
              >
                <span>{{ t(faq.label) }}</span>
                <span
                  class="arrow"
                  :class="{ rotated: activeFaq === service.titleKey + faq.key }"
                >⌄</span>
              </button>

              <transition name="expand">
                <div
                  v-if="activeFaq === service.titleKey + faq.key"
                  class="faq-content"
                >
                  {{ t(service[faq.key]) }}
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
  titleKey: string
  category: MainCategory
  subCategory: SubCategory
  icon: any
  coverKey: string
  whyKey: string
  whoKey: string
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
  { key: 'coverKey', label: 'services.faq.cover' },
  { key: 'whyKey', label: 'services.faq.why' },
  { key: 'whoKey', label: 'services.faq.who' }
] as const

const toggleFaq = (id: string) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

/* ---------------- ICONS ---------------- */
/* ================= ICONS (TUS ICONOS) ================= */
import IconCar from '@/components/icons/IconCar.vue'
import IconLife from '@/components/icons/IconLife.vue'
import IconInquilino from '@/components/icons/IconInquilino.vue'
import IconCasa from '@/components/icons/IconCasa.vue'
import IconUmbrella from '@/components/icons/IconUmbrella.vue'
import IconSalud from '@/components/icons/IconSalud.vue'
import IconLiability from '@/components/icons/IconLiability.vue'
import IconWComp from '@/components/icons/IconWComp.vue'
import IconAComercial from '@/components/icons/IconAComercial.vue'
import IconEUmbrella from '@/components/icons/IconEUmbrella.vue'
import IconBOwners from '@/components/icons/IconBOwners.vue'
import IconW2 from '@/components/icons/IconW2.vue'
import IconNEC from '@/components/icons/IconNEC.vue'
import IconLLiability from '@/components/icons/IconLLiability.vue'
import IconSociedades from '@/components/icons/IconSociedades.vue'
import IconChurch from '@/components/icons/IconChurch.vue'
import IconCoprSC from '@/components/icons/IconCoprSC.vue'
import IconBodas from '@/components/icons/IconBodas.vue'
import IconViaje from '@/components/icons/IconViaje.vue'
import IconPostillados from '@/components/icons/IconApostillados.vue'
import IconCertificaciones from '@/components/icons/IconCertificaciones.vue'
import IconPGen from '@/components/icons/IconPGen.vue'
import IconTLegal from '@/components/icons/IconTlegal.vue'
import IconTraduccion from '@/components/icons/IconTraduccion.vue'
import IconApostillados from '@/components/icons/IconApostillados.vue'
import IconCompania from '@/components/icons/IconCompania.vue'
import IconRCompanias from '@/components/icons/IconRCompanias.vue'
import IconContabilidad from '@/components/icons/IconContabilidad.vue'
import IconTlegal from '@/components/icons/IconTlegal.vue'

/* ================= SERVICES (25 SERVICIOS) ================= */
const services = ref<Service[]>([
  // ===== INSURANCE / PERSONAL =====
  { titleKey: 'services.items.auto.title', category: 'insurance', subCategory: 'personal', icon: IconCar, coverKey: 'services.items.auto.cover', whyKey: 'services.items.auto.why', whoKey: 'services.items.auto.who' },
  { titleKey: 'services.items.life.title', category: 'insurance', subCategory: 'personal', icon: IconLife, coverKey: 'services.items.life.cover', whyKey: 'services.items.life.why', whoKey: 'services.items.life.who' },
  { titleKey: 'services.items.health.title', category: 'insurance', subCategory: 'personal', icon: IconSalud, coverKey: 'services.items.health.cover', whyKey: 'services.items.health.why', whoKey: 'services.items.health.who' },
  { titleKey: 'services.items.renters.title', category: 'insurance', subCategory: 'personal', icon: IconInquilino, coverKey: 'services.items.renters.cover', whyKey: 'services.items.renters.why', whoKey: 'services.items.renters.who' },
  { titleKey: 'services.items.home.title', category: 'insurance', subCategory: 'personal', icon: IconCasa, coverKey: 'services.items.home.cover', whyKey: 'services.items.home.why', whoKey: 'services.items.home.who' },
  { titleKey: 'services.items.umbrella.title', category: 'insurance', subCategory: 'personal', icon: IconUmbrella, coverKey: 'services.items.umbrella.cover', whyKey: 'services.items.umbrella.why', whoKey: 'services.items.umbrella.who' },

  // ===== INSURANCE / COMMERCIAL =====
  { titleKey: 'services.items.general-liability.title', category: 'insurance', subCategory: 'commercial', icon: IconLiability, coverKey: 'services.items.general-liability.cover', whyKey: 'services.items.general-liability.why', whoKey: 'services.items.general-liability.who' },
  { titleKey: 'services.items.workers-comp.title', category: 'insurance', subCategory: 'commercial', icon: IconWComp, coverKey: 'services.items.workers-comp.cover', whyKey: 'services.items.workers-comp.why', whoKey: 'services.items.workers-comp.who' },
  { titleKey: 'services.items.commercial-auto.title', category: 'insurance', subCategory: 'commercial', icon: IconAComercial, coverKey: 'services.items.commercial-auto.cover', whyKey: 'services.items.commercial-auto.why', whoKey: 'services.items.commercial-auto.who' },
  { titleKey: 'services.items.employer-umbrella.title', category: 'insurance', subCategory: 'commercial', icon: IconEUmbrella, coverKey: 'services.items.employer-umbrella.cover', whyKey: 'services.items.employer-umbrella.why', whoKey: 'services.items.employer-umbrella.who' },
  { titleKey: 'services.items.business-owners.title', category: 'insurance', subCategory: 'commercial', icon: IconBOwners, coverKey: 'services.items.business-owners.cover', whyKey: 'services.items.business-owners.why', whoKey: 'services.items.business-owners.who' },

  // ===== TAXES  Personales=====
  { titleKey: 'services.items.w2.title', category: 'taxes', subCategory: 'personal', icon: IconW2, coverKey: 'services.items.w2.cover', whyKey: 'services.items.w2.why', whoKey: 'services.items.w2.who' },
  { titleKey: 'services.items.non-owned.title', category: 'taxes', subCategory: 'personal', icon: IconNEC, coverKey: 'services.items.non-owned.cover', whyKey: 'services.items.non-owned.why', whoKey: 'services.items.non-owned.who' },

  // ===== TAXES  Comerciales=====
  { titleKey: 'services.items.local-liability.title', category: 'taxes', subCategory: 'commercial', icon: IconLLiability, coverKey: 'services.items.local-liability.cover', whyKey: 'services.items.local-liability.why', whoKey: 'services.items.local-liability.who' },
  { titleKey: 'services.items.society.title', category: 'taxes', subCategory: 'commercial', icon: IconSociedades, coverKey: 'services.items.society.cover', whyKey: 'services.items.society.why', whoKey: 'services.items.society.who' },
  { titleKey: 'services.items.corp.title', category: 'taxes', subCategory: 'commercial', icon: IconCoprSC, coverKey: 'services.items.corp.cover', whyKey: 'services.items.corp.why', whoKey: 'services.items.corp.who' },
  { titleKey: 'services.items.church.title', category: 'taxes', subCategory: 'commercial', icon: IconChurch, coverKey: 'services.items.church.cover', whyKey: 'services.items.church.why', whoKey: 'services.items.church.who' },


  // ===== NOTARY =====
  { titleKey: 'services.items.travel.title', category: 'notary', subCategory: 'personal', icon: IconViaje, coverKey: 'services.items.travel.cover', whyKey: 'services.items.travel.why', whoKey: 'services.items.travel.who' },
  { titleKey: 'services.items.weddings.title', category: 'notary', subCategory: 'personal', icon: IconBodas, coverKey: 'services.items.weddings.cover', whyKey: 'services.items.weddings.why', whoKey: 'services.items.weddings.who' },
  { titleKey: 'services.items.apostille.title', category: 'notary', subCategory: 'personal', icon: IconApostillados, coverKey: 'services.items.apostille.cover', whyKey: 'services.items.apostille.why', whoKey: 'services.items.apostille.who' },
  { titleKey: 'services.items.certifications.title', category: 'notary', subCategory: 'personal', icon: IconCertificaciones, coverKey: 'services.items.certifications.cover', whyKey: 'services.items.certifications.why', whoKey: 'services.items.certifications.who' },
  { titleKey: 'services.items.legal-procedures.title', category: 'notary', subCategory: 'personal', icon: IconPGen, coverKey: 'services.items.legal-procedures.cover', whyKey: 'services.items.legal-procedures.why', whoKey: 'services.items.legal-procedures.who' },
  { titleKey: 'services.items.Tlegal.title', category: 'notary', subCategory: 'personal', icon: IconTlegal, coverKey: 'services.items.Tlegal.cover', whyKey: 'services.items.Tlegal.why', whoKey: 'services.items.Tlegal.who' },
  { titleKey: 'services.items.legal-translation.title', category: 'notary', subCategory: 'personal', icon: IconTraduccion, coverKey: 'services.items.legal-translation.cover', whyKey: 'services.items.legal-translation.why', whoKey: 'services.items.legal-translation.who' },

  // ==== NOTARY COMERCIAL ====


  { titleKey: 'services.items.accounting.title', category: 'notary', subCategory: 'commercial', icon: IconContabilidad, coverKey: 'services.items.accounting.cover', whyKey: 'services.items.accounting.why', whoKey: 'services.items.accounting.who' },
  { titleKey: 'services.items.companies.title', category: 'notary', subCategory: 'commercial', icon: IconCompania, coverKey: 'services.items.companies.cover', whyKey: 'services.items.companies.why', whoKey: 'services.items.companies.who' },
  { titleKey: 'services.items.rep-companies.title', category: 'notary', subCategory: 'commercial', icon: IconRCompanias, coverKey: 'services.items.rep-companies.cover', whyKey: 'services.items.rep-companies.why', whoKey: 'services.items.rep-companies.who' },





])


/* ---------------- FILTER ---------------- */
const filteredServices = computed(() =>
  services.value.filter(
    s =>
      s.category === mainCategory.value &&
      s.subCategory === subCategory.value
  )
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
</style>
