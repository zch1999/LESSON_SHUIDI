import Vue from 'vue'
import App from './App.vue'
import router from './router'
import oceanui from '@zch1999/oceanui'
import '@zch1999/oceanui/lib/oceanui.css'
Vue.use(oceanui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
