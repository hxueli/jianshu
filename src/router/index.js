import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Download from '@/components/Download'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Write from '@/components/Write'

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
      component: Home
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
    },
    {
      path: '/Write',
      name: 'Write',
      component: Write
    }
  ]
})

var editor = require('../components/Write.vue');
new Vue({
  el: '#main',
  render: h => h(editor)
});
