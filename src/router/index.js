import Vue from 'vue'
import Router from 'vue-router'

import { loginRoutes } from './login'
import { homeRoutes } from './home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    loginRoutes,
    homeRoutes
  ]
})
