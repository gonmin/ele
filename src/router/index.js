import Vue from 'vue'
import VueRouter from 'vue-router'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'
import goods from '../components/goods/goods'

Vue.use(VueRouter)
const routes = [
  { path: '/ratings', component: ratings },
  { path: '/goods', component: goods },
  { path: '/seller', component: seller }
]

export default new VueRouter({
  routes,
  linkActiveClass: 'active'
})

