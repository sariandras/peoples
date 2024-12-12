import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '@/views/PeopleList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', redirect:'emberek' },
    { path: '/keszitette', component: () => import('@/views/ContactView.vue') },
    { path: '/emberek', component: PeopleList },
    { path: '/emberek/:id', name:'ember',component: () => import('@/views/PersonView.vue'),props:true},
  ],
})

export default router
