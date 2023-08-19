// 需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'home',
      title: '',
      icon: '',
    },
    component: () => import('~/pages/index.vue'),
    children: [{
      path: '',
      name: 'indexPage',
      component: () => import('~/layouts/home.vue'),
    }],
  },
  {
    path: '/hi/:name',
    name: 'hi',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('~/pages/hi/[name].vue'),
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('~/pages/example/MarkdownPage.vue'),
  },
]

export default asyncRoutes
