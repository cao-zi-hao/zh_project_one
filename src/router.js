import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import home from './components/home/home.vue'

Vue.use(VueRouter)

// 实例化路由
const router = new VueRouter({
  routes: [{ path: '/', redirect: '/home' }, { path: '/home', component: home }]
})
// 3. 通过es6 模块化语法 把 router 导出去
export default router
