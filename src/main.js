import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from "./store/index"
import '../public/common/css/reset.css'
import '../public/common/js/flexible'
import '../public/iconfont/iconfont.css'
import BScroll from '@/common/BScroll'
Vue.component("BScroll",BScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
