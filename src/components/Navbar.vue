<template>
  <nav class="navbar">
    <div class="navbar-container">

      <div class="logo">
        <RouterLink :to="{ name: 'home', params: { locale } }">
          <img src="@/assets/logoP.png" alt="Providence Insurance Agency" />
        </RouterLink>
      </div>

      <div class="hamburger" @click="isOpen = !isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-links" :class="{ open: isOpen }">
        <li>
          <RouterLink :to="`/${locale}/home`">
            {{ t('nav.home') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/services`">
            {{ t('nav.services') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/about`">
            {{ t('nav.about') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/contact`">
            {{ t('nav.contact') }}
          </RouterLink>
        </li>
      </ul>

      <div class="language-section">
        <div class="language-switcher" @click="toggleLanguage">
          <span class="globe-icon">
            <svg width="24" height="24" viewBox="0 -1 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M11 1.22217C6.58172 1.22217 3 4.80389 3 9.22217C3 13.6405 6.58172 17.2222 11 17.2222C15.4183 17.2222 19 13.6405 19 9.22217C19 4.80389 15.4183 1.22217 11 1.22217Z"
                  fill="currentColor"/>
              </g>
            </svg>
          </span>
          <span class="lang-text">
            {{ locale === 'es' ? 'ES | EN' : 'EN | ES' }}
          </span>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { locale: i18nLocale, t } = useI18n()

const isOpen = ref(false)

/**
 * Idioma tomado SIEMPRE de la URL
 */
const locale = computed<'es' | 'en'>(() => {
  return route.params.locale === 'en' ? 'en' : 'es'
})

/**
 * Cambia idioma manteniendo la vista actual
 */
const toggleLanguage = () => {
  const newLocale = locale.value === 'es' ? 'en' : 'es'

  i18nLocale.value = newLocale

  const newPath = route.fullPath.replace(/^\/(es|en)/, `/${newLocale}`)
  router.push(newPath)
}
</script>

<style scoped>
.navbar {
  background-color: #012148;
  height: 110px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 20px rgba(1, 33, 72, 0.3);
  border-radius: 0 0 35px 35px;
  margin-bottom: 20px;
}

.navbar-container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.logo img {
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 45px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  padding-bottom: 10px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #fbbf24;
  transform: translateY(-3px);
  text-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(251, 191, 36, 0.5);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  transform: scaleX(1);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: #ffffff;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.language-section {
  margin-left: 20px;
}

.language-switcher {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  padding: 12px 22px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
  border: 2px solid transparent;
}

.language-switcher:hover {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

.lang-text {
  font-weight: 700;
  color: #012148;
  font-size: 1rem;
  letter-spacing: 1px;
}

.globe-icon {
  font-size: 1.2rem;
  color: #012148;
  display: flex;
  align-items: center;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar {
    height: 85px;
    border-radius: 0 0 25px 25px;
  }

  .navbar-container {
    padding: 0 20px;
  }

  .logo img {
    height: 55px;
  }

  .hamburger {
    display: flex;
    z-index: 1001;
  }

  .nav-links {
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    background: #012148;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 35px 0;
    display: none;
    box-shadow: 0 6px 20px rgba(1, 33, 72, 0.4);
    border-radius: 0 0 30px 30px;
  }

  .nav-links a {
    font-size: 1.3rem;
  }

  .nav-links.open {
    display: flex;
  }

  .language-section {
    position: absolute;
    top: 22px;
    right: 75px;
    margin-left: 0;
  }

  .language-switcher {
    padding: 10px 16px;
  }

  .lang-text {
    font-size: 0.9rem;
  }

  .globe-icon {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 15px;
  }

  .logo img {
    height: 50px;
  }

  .language-section {
    right: 65px;
    top: 20px;
  }

  .language-switcher {
    padding: 8px 12px;
  }

  .lang-text {
    font-size: 0.8rem;
  }
}
</style>
