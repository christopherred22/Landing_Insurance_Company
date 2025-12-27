import { createRouter, createWebHistory } from 'vue-router'
// El @ apunta directamente a la carpeta /src
import ContactanosView from  '@/views/ContactanosView.vue';
import SobreNosotrosView from '@/views/SobreNosotrosView.vue';
import ServiciosView from '@/views/ServiciosView.vue';
import InicioView from '@/views/InicioView.vue';

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
    },
    {
      path: '/servicios', // Esta es la ruta raíz
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/inicio', // Esta es la ruta raíz
      name: 'inicio',
      component: InicioView
    }
  ],
})

export default router
