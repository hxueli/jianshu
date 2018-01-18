import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Download from '@/components/Download'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import One from '@/components/HomeComponents/One'
import Two from '@/components/HomeComponents/Two'
import Carousel from '@/components/HomeComponents/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'Carousel',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: 'One',
          name: 'One',
          component: One
        },
        {
          path: 'Two',
          name: 'Two',
          component: Two
        }
      ]
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
