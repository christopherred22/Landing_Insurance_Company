<template>
  <nav class="navbar">
    <div class="navbar-container">

      <div class="logo">
        <RouterLink :to="{ name: 'home', params: { locale } }">
          <img src="@/assets/LogoP.svg" alt="Providence Insurance Agency" />
        </RouterLink>
      </div>

      <div class="hamburger" @click="toggleMenu" :class="{ active: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-links" :class="{ open: isOpen }">
        <li>
          <RouterLink :to="`/`" @click="closeMenu">
            {{ t('nav.home') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/services`" @click="closeMenu">
            {{ t('nav.services') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/about`" @click="closeMenu">
            {{ t('nav.about') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="`/${locale}/contact`" @click="closeMenu">
            {{ t('nav.contact') }}
          </RouterLink>
        </li>

        <li class="mobile-language">
          <div class="language-switcher" @click="toggleLanguage">
            <span class="globe-icon">🌐</span>
            <span class="lang-text">
              {{ locale === 'es' ? 'ES | EN' : 'EN | ES' }}
            </span>
          </div>
        </li>
      </ul>

      <div class="language-section desktop-language">
        <div class="language-switcher" @click="toggleLanguage">
          <span class="globe-icon">🌐</span>
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

const locale = computed<'es' | 'en'>(() => {
  return route.params.locale === 'en' ? 'en' : 'es'
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  console.log('Menu toggled:', isOpen.value) // Debug
}

const closeMenu = () => {
  isOpen.value = false
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'es' ? 'en' : 'es'
  i18nLocale.value = newLocale
  const newPath = route.fullPath.replace(/^\/(es|en)/, `/${newLocale}`)
  router.push(newPath)
  closeMenu()
}
</script>

<style scoped>
/* BASE STYLES */
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
  width: 100%;
}

.navbar-container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  position: relative;
}

.logo {
  flex-shrink: 0;
  z-index: 1001;
}

.logo img {
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;
  display: block;
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
  z-index: 1001;
  position: relative;
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
  display: block;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.language-section {
  margin-left: 20px;
}

.language-switcher {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  padding: 12px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
  letter-spacing: 1.5px;
  white-space: nowrap;
}

.globe-icon {
  font-size: 1.4rem;
  color: #012148;
  display: flex;
  align-items: center;
  line-height: 1;
}

.mobile-language {
  display: none;
}

/* TABLETS */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 30px;
  }

  .nav-links {
    gap: 30px;
  }

  .nav-links a {
    font-size: 1.1rem;
  }
}

/* MÓVILES Y TABLETS - MENÚ HAMBURGUESA */
@media (max-width: 768px) {
  .navbar {
    height: 70px;
    border-radius: 0 0 20px 20px;
  }

  .navbar-container {
    padding: 0 20px;
  }

  .logo img {
    height: 50px;
  }

  .hamburger {
    display: flex;
  }

  .desktop-language {
    display: none;
  }

  .mobile-language {
    display: block;
    width: 100%;
    margin-top: 20px;
  }

  .mobile-language .language-switcher {
    margin: 0 auto;
    width: 200px;
    padding: 14px 24px;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    width: 100%;
    background: #012148;
    flex-direction: column;
    align-items: center;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    transition: max-height 0.4s ease, padding 0.4s ease;
    box-shadow: 0 6px 20px rgba(1, 33, 72, 0.4);
    border-radius: 0 0 25px 25px;
    z-index: 999;
  }

  .nav-links.open {
    max-height: 600px;
    padding: 30px 20px;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-links li:last-child {
    border-bottom: none;
  }

  .nav-links a {
    font-size: 1.3rem;
    display: block;
    padding: 10px 20px;
  }

  .nav-links a::after {
    display: none;
  }
}

/* iPHONE 12 PRO ESPECÍFICO */
@media (min-width: 390px) and (max-width: 430px) and (max-height: 844px) {
  .navbar {
    height: 70px;
  }

  .navbar-container {
    padding: 0 18px;
  }

  .logo img {
    height: 48px;
  }

  .nav-links {
    top: 70px;
  }

  .nav-links.open {
    max-height: 550px;
  }

  .nav-links a {
    font-size: 1.25rem;
  }
}

/* iPAD Y TABLETS */
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar {
    height: 80px;
  }

  .logo img {
    height: 60px;
  }

  .hamburger {
    display: flex;
  }

  .desktop-language {
    display: none;
  }

  .mobile-language {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 80px;
  }

  .nav-links.open {
    max-height: 500px;
  }
}

/* iPHONE PEQUEÑOS */
@media (max-width: 375px) {
  .navbar {
    height: 65px;
  }

  .navbar-container {
    padding: 0 15px;
  }

  .logo img {
    height: 45px;
  }

  .hamburger span {
    width: 26px;
    height: 2.5px;
  }

  .nav-links {
    top: 65px;
  }

  .nav-links.open {
    max-height: 520px;
    padding: 25px 15px;
  }

  .nav-links a {
    font-size: 1.15rem;
  }

  .mobile-language .language-switcher {
    width: 180px;
    padding: 12px 20px;
  }

  .lang-text {
    font-size: 0.9rem;
  }
}

/* LANDSCAPE MÓVIL */
@media (max-height: 500px) and (orientation: landscape) {
  .navbar {
    height: 60px;
  }

  .logo img {
    height: 40px;
  }

  .nav-links {
    top: 60px;
  }

  .nav-links.open {
    max-height: calc(100vh - 60px);
    padding: 20px 15px;
  }

  .nav-links li {
    padding: 8px 0;
  }

  .nav-links a {
    font-size: 1rem;
    padding: 6px 15px;
  }
}

/* PANTALLAS MUY GRANDES */
@media (min-width: 1440px) {
  .navbar-container {
    max-width: 1400px;
    padding: 0 60px;
  }

  .logo img {
    height: 80px;
  }

  .nav-links {
    gap: 55px;
  }

  .nav-links a {
    font-size: 1.35rem;
  }
}
</style>
