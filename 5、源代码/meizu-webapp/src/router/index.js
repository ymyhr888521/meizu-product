import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import flag from  '../pages/flag'
import goodsCart from '../pages/goodsCart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/flag',
      name: 'flag',
      component:flag
    },
    {
      path: '/goodsCart',
      name: 'goodsCart',
      component:goodsCart
    },
  ]
})
