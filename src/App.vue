<template>
  <v-app>
    <!-- Menú fijo -->
    <MenuComponent class="menu-fixed" />

    <!-- Contenido centrado -->
    <v-main class="main-centered">
  <div class="content-wrapper">
    <ContactanosView />
  </div>
</v-main>
  </v-app>
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue'
import ContactanosView from './views/ContactanosView.vue'
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

/* Menú fijo arriba */
.menu-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px; /* Ajusta según tu diseño */
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* v-main compensado y centrado */
.main-centered {
  padding-top: 64px; /* compensación por menú fijo */
  min-height: calc(100vh - 64px); /* altura total menos menú */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Contenedor del contenido */
.content-wrapper {
  width: 100%;
  max-width: 800px; /* Ajusta según tu diseño */
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
