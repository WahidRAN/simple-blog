import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'

import Content from '../components/Content.vue'
import Details from '../components/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          name: "content",
          path: '',
          component: Content
        },
        {
          path: 'details',
          component: Details
        }
      ]
    },
    {
      path: '/list-content',
      name: 'listContent',
      component: ListView
    },
  ]
})

export default router
