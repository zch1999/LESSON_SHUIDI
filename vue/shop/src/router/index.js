import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Login = () => import('../components/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodslist',
      name: 'GoodsList',
      component: () => ('../components/GoodsList')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
