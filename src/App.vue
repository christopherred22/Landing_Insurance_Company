<template>
  <v-app>
    <Navbar class="menu-fixed" />

    <v-main class="main-layout">
      <RouterView />
    </v-main>

    <Footer />

  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' // Ya lo tenías importado, ahora lo usamos
</script>

<style>
/* Reset global */
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: white;
}

/* Menú fijo */
.menu-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* v-main limpio */
.main-layout {
  padding-top: 64px; /* espacio para navbar */
  /* Eliminamos el min-height calc para que el footer no se solape
     y el scroll funcione naturalmente */
  min-height: 100vh;
}
</style>
