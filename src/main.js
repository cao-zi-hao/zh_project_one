import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局CSS
import './assets/common.css'

// 引入组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
