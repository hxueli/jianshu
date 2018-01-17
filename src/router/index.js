import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Page from '@/components/Page'
import One from '@/components/HomeComponents/One'
import Two from '@/components/HomeComponents/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
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
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Page',
      name: 'Page',
      component: Page
    }
  ]
})
