// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.css'
import http from '@/plugins/http.js'
import router from './router'
Vue.use(ElementUI)
Vue.use(http)
Vue.config.productionTip = false
Vue.filter('fmtDate',(value,fmtString)=>{
  return moment(value).format(fmtString)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
