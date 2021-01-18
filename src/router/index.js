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
      },
      {
        path: '/index/notice',
        name: 'Notice',
        component: () => import('../views/Index/components/Nav/components/Notice/index.vue')
      },
      {
        path: '/index/communityActivity',
        name: 'CommunityActivity',
        component: () => import('../views/Index/components/Nav/components/CommunityActivity/index.vue')
      },
      {
        path: '/index/organizingActivity',
        name: 'OrganizingActivity',
        component: () => import('../views/Index/components/Nav/components/OrganizingActivity/index.vue')
      },
      {
        path: '/index/services',
        name: 'PayNotice',
        component: () => import('../views/Index/components/Nav/components/Services/index.vue')
      },
      {
        path: '/index/communityScenery',
        name: 'CommunityScenery',
        component: () => import('../views/Index/components/Nav/components/CommunityScenery/index.vue')
      },
      {
        path: '/index/visitor',
        name: 'Visitor',
        component: () => import('../views/Index/components/Nav/components/Visitor/index.vue')
      },
      {
        path: '/index/reportRepair',
        name: 'ReportRepair',
        component: () => import('../views/Index/components/Nav/components/ReportRepair/index.vue')
      },
      {
        path: '/index/reportLoss',
        name: 'ReportLoss',
        component: () => import('../views/Index/components/Nav/components/ReportLoss/index.vue')
      },
      {
        path: '/index/complaintsComplaint',
        name: 'ComplaintsComplaint',
        component: () => import('../views/Index/components/Nav/components/ComplaintsComplaint/index.vue')
      },
      {
        path: '/index/contact',
        name: 'Contact',
        component: () => import('../views/Index/components/Nav/components/Contact/index.vue')
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
