<template>
  <nav class="navbar">
    <div class="navbar-container">

      <!-- LOGO -->
      <div class="logo">
        <img src="@/assets/logoP.png" alt="Providence Insurance Agency" />
      </div>

      <!-- HAMBURGER -->
      <div class="hamburger" @click="isOpen = !isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- LINKS -->
      <ul class="nav-links" :class="{ open: isOpen }">
  <li><RouterLink to="/inicio">Inicio</RouterLink></li>
  <li><RouterLink to="/servicios">Servicios</RouterLink></li>
  <li><RouterLink to="/sobre-nosotros">Sobre nosotros</RouterLink></li>
  <li><RouterLink to="/contactanos">Contáctanos</RouterLink></li>
</ul>

      <!-- LANG -->
      <div class="language-switcher">
        <span class="globe-icon">🌐</span>
        <span class="lang-text">ES | EN</span>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>


<style scoped>
.navbar {
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
  /* ESTO HACE QUE EL MENÚ BAJE CON EL SCROLL */
  position: sticky;
  top: 0;
  z-index: 1000;
  /* Sombra sutil para despegarlo del contenido */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo img {
  height: 50px; /* Ajusta según tu logo */
  width: auto;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 8px;
  transition: color 0.3s ease;
}

/* TEXTO ROJO */
.nav-links a:hover,
.nav-links a.router-link-active {
  color: #c1121f; /* ROJO */
}

/* LINEA INFERIOR */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #c1121f;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

/* ACTIVAR LINEA */
.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  transform: scaleX(1);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #333;
  border-radius: 2px;
}


/* PILL DE IDIOMA */
.language-switcher {
  background-color: #CBD5E0; /* Gris claro similar a la imagen */
  padding: 8px 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.lang-text {
  font-weight: bold;
  color: white;
  font-size: 0.9rem;
}

.globe-icon {
  font-size: 1rem;
  color: white;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .language-switcher {
    display: none;
  }
}

</style>
