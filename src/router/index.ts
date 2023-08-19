import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import exceptionRoutes from '~/router/route.exception'
import asyncRoutes from '~/router/route.async'
import commonRoutes from '~/router/route.common'

export const routes: RouteRecordRaw[] = [
  // 无鉴权的业务路由 ex:登录
  ...commonRoutes,
  // 带鉴权的业务路由
  ...asyncRoutes,
  // 异常页必须放在路由匹配规则的最后
  ...exceptionRoutes,
]

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
  routes,
})

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from) => {
  // eslint-disable-next-line no-console
  console.log('全局路由前置守卫：to,from\n', to, from)
  // 设置页面标题
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted())
    NProgress.start()
})

router.afterEach((to, from) => {
  // eslint-disable-next-line no-console
  console.log('全局路由后置守卫：to,from\n', to, from)
  NProgress.done()
})

export default router
