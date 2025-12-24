<template>
  <header class="navbar-wrapper">
    <nav class="navbar-content">
      
      <div class="logo-section">
        
        <div class="logo-text">
          <span class="brand-name">PROVIDENCE</span>
          <span class="brand-sub">insurance agency</span>
        </div>
      </div>

      <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen" :class="{ 'is-active': isMenuOpen }">
        <div class="hamburger"></div>
      </button>

      <div class="nav-container" :class="{ 'is-mobile-open': isMenuOpen }">
        <ul class="nav-links">
          <li v-for="link in ['Inicio', 'Servicios', 'Sobre nosotros', 'Contactanos']" :key="link">
            <a href="#" class="nav-item" @click="isMenuOpen = false">{{ link }}</a>
          </li>
        </ul>

        <div class="lang-selector">
          <div class="pill">
            <span class="globe">🌐</span>
            <button @click="lang = 'ES'" :class="{ active: lang === 'ES' }">ES</button>
            <span class="divider">|</span>
            <button @click="lang = 'EN'" :class="{ active: lang === 'EN' }">EN</button>
          </div>
        </div>
      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const lang = ref('ES');
const isMenuOpen = ref(false);
</script>

<style scoped>
/* ESTRUCTURA BASE (Desktop First) */
.navbar-wrapper {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.navbar-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO */
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0; /* Evita que el logo se encoja */
}
.logo-img { height: 40px; }
.brand-name { display: block; font-weight: 800; font-size: 1.4rem; color: #00234b; line-height: 1; }
.brand-sub { font-size: 0.75rem; color: #00234b; }

/* NAVEGACIÓN */
.nav-container {
  display: flex;
  align-items: center;
  gap: 40px;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}
.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  white-space: nowrap; /* Evita que el texto salte de línea */
}

/* IDIOMA PILL */
.pill {
  background: #b0b8c1;
  padding: 6px 14px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
}
.pill button {
  background: none;
  border: none;
  color: rgba(255,255,255,0.6);
  font-weight: bold;
  cursor: pointer;
}
.pill button.active { color: #fff; }

/* BOTÓN MÓVIL (Oculto por defecto) */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.hamburger {
  width: 25px;
  height: 2px;
  background: #00234b;
  position: relative;
}
.hamburger::before, .hamburger::after {
  content: '';
  width: 25px;
  height: 2px;
  background: #00234b;
  position: absolute;
  left: 0;
}
.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

/* --- MEDIA QUERIES: LA MAGIA ADAPTATIVA --- */

/* Cuando la pantalla es menor a 1024px (Tablets/Móviles) */
@media (max-width: 1024px) {
  .mobile-toggle {
    display: block; /* Mostramos la hamburguesa */
  }

  .nav-container {
    /* Transformamos el menú en una cortina superior */
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-bottom: 2px solid #00234b;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    
    /* Animación de apertura */
    display: none; 
  }

  .nav-container.is-mobile-open {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}

/* Ajustes finos para teléfonos muy pequeños */
@media (max-width: 480px) {
  .brand-name { font-size: 1.1rem; }
  .navbar-content { padding: 10px 15px; }
}
</style>