import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Landing from '@/views/Landing.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import About from '@/views/About.vue'
import Demo from '@/views/Demo.vue'

//Template Views
import Table from '@/views/Table.vue'

const routes = [
  {
    path: '/',
    component: Landing,
  },
  { path: '/chain', component: Index },
  { path: '/types', component: Types },
  { path: '/relayers', component: Relayers },
  { path: '/demo', component: Demo },
  { path: '/about', component: About },
  //Template Views
  { path: '/table', component: Table },
  { path: '/table/:variant', component: Table },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
