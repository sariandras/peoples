import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      savedPosition.behavior='smooth';
      return savedPosition
    } else {
      return { top: 0, behavior:'smooth' }
    }
  },
  routes: [
    { path: '/', redirect: 'emberek' },
    { path: '/keszitette', component: () => import('@/views/ContactView.vue') },
    { path: '/emberek', component: () => import('@/views/PeopleList.vue') },
    { path: '/emberek/:id', name: 'ember', component: () => import('@/views/ContactView.vue') },
  ],
})

export default router
