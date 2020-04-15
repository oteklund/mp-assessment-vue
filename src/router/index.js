import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LayOut from '../views/LayOut.vue'
import ImageResize from '../views/ImageResize.vue'
import LaravelEssay from '../views/LaravelEssay.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/1",
    name: "LayOut",
    component: LayOut
  },
  {
    path: '/2',
    name: 'ImageResize',
    component: ImageResize
  },
  {
    path: "/3",
    name: "LaravelEssay",
    component: LaravelEssay
  }
]

const router = new VueRouter({
  routes
})

export default router
