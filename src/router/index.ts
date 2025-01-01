import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PostsView from '../views/PostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    }
  ],
})

export default router
