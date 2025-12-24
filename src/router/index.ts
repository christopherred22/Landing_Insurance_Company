import { createRouter, createWebHistory } from 'vue-router'
// El @ apunta directamente a la carpeta /src
import ContactanosView from  '@/views/ContactanosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Esta es la ruta raíz
      name: 'contactanos',
      component: ContactanosView
    }
  ],
})

export default router