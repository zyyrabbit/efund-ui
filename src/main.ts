import Vue from 'vue'
import Router from '@/router'
import VueRouter from 'vue-router'
import '@/assets/common.css'
import '@/components/index'
import '@/packages/index'
import '@/assets/font-awesome/css/font-awesome.min.css'
import App from '@/App.vue'
// 使用vue-router
Vue.use(VueRouter)

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
