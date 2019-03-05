import Vue from 'vue'
import Router from 'vue-router'

import { loginRoutes } from './login'
import { homeRoutes } from './home'
import { pageError } from './pageError'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    loginRoutes,
    homeRoutes,
    pageError
  ]
})

// 路由跳转之前操作
router.beforeEach((to, from, next) => {
  // console.log(to, 'to')
  // console.log(from, 'from')
  if (to.name !== 'login' && !localStorage.user) {
    next('login')
  } else {
    next()
  }
})

// 路由跳转之后操作
router.afterEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})
