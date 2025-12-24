import { createRouter, createWebHistory } from 'vue-router'
// El @ apunta directamente a la carpeta /src
import ContactanosView from  '@/views/ContactanosView.vue';
import SobreNosotrosView from '@/views/SobreNosotrosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contactanos', // Esta es la ruta raíz
      name: 'contactanos',
      component: ContactanosView
    },
    {
      path: '/sobre-nosotros', // Esta es la ruta raíz
      name: 'sobre-nosotros',
      component: SobreNosotrosView
    }
  ],
})

export default router