import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
