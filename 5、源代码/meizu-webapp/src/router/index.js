import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import sortPage from '../pages/sortPage'
import flag from  '../pages/flag'
import goodsCart from '../pages/goodsCart'
import mine from '../pages/mine'
import find from '../pages/find'
import reg from '../pages/reg'
import goodsDetail from '../pages/goodsDetail'
import MyOrder from '../pages/MyOrder'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/sortPage',
      name: 'sortPage',
      component:sortPage
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
    {
      path: '/mine',
      name: 'mine',
      component:mine
    },
    {
      path: '/find',
      name: 'find',
      component:find
    },
    {
      path: '/reg',
      name: 'reg',
      component:reg
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component:goodsDetail
    },
    {
      path: '/MyOrder',
      name: 'MyOrder',
      component:MyOrder
    },
  ]
})
