import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由组件
import Home from '@/views/Home/MyHome.vue'
import About from '@/views/About/MyAbout.vue'
import Tab1 from '@/components/MyTab1.vue'
import Tab2 from '@/components/MyTab2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

export default router
