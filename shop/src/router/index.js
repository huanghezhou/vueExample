import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Product from '@/components/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})
