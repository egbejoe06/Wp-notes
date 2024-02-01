import { createRouter, createWebHistory } from 'vue-router'
import Blog from "../views/Blog.vue"
import Home from "../views/Home.vue"
const routes = [
    {
        path: '/b',
        name: 'blog',
        component: Blog
      },
      {
        path: '/',
        name: 'home',
        component: Home
      },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router