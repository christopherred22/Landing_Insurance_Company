import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'
import LocaleLayout from '@/layouts/LocaleLayout.vue'
import InicioView from '@/views/InicioView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import SobreNosotrosView from '@/views/SobreNosotrosView.vue'
import ContactanosView from '@/views/ContactanosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  },routes: [
    {
      path: '/:locale(es|en)',
      component: LocaleLayout,
      children: [
        { path: '/', name: 'home', component: InicioView },
        { path: 'services', name: 'services', component: ServiciosView },
        { path: 'about', name: 'about', component: SobreNosotrosView },
        { path: 'contact', name: 'contact', component: ContactanosView },
      ],
    },
    {
      path: '/',
      redirect: '/es',
    },
  ],
})

router.beforeEach((to) => {
  const locale = to.params.locale

  if (locale === 'es' || locale === 'en') {
    i18n.global.locale.value = locale
  }
})

export default router
