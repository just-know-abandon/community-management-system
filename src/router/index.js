import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('../views/Home/index.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index/index.vue')
      },
      {
        path: '/market',
        name: 'Market',
        component: () => import('../views/Market/index.vue')
      },
      {
        path: '/chatRoom',
        name: 'ChatRoom',
        component: () => import('../views/ChatRoom/index.vue')
      },
      {
        path: '/share',
        name: 'Share',
        component: () => import('../views/Share/index.vue')
      },
      {
        path: '/personalCenter',
        name: 'PersonalCenter',
        component: () => import('../views/PersonalCenter/index.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

export default router
