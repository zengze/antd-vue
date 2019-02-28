// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 路由跳转之前操作
// router.beforeEach((to, from, next) => {
//   console.log(to, 'to')
//   console.log(from, 'from')
//   next()
// })

// 路由跳转之后操作
router.afterEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
