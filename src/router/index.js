import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Market from '@/views/Market.vue'
import Arena from '@/views/Arena.vue'
import Landing from '@/views/Landing.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import Workshop from '@/views/Workshop.vue'
import Login from '@/views/Login.vue'
import Upload from '@/views/Upload.vue'
import Fight from '@/views/Fight.vue'
import Result from '@/views/Result.vue'
import About from '@/views/About.vue'
import Enchant from '@/views/Enchant.vue'

const routes = [
  {
    path: '/',
    component: Landing,
  },
  { path: '/chain', component: Index },
  { path: '/types', component: Types },
  { path: '/market', component: Market },
  { path: '/arena', component: Arena },
  { path: '/relayers', component: Relayers },
  { path: '/login', component: Login },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
