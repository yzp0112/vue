import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '../components/test'

import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'
import Mine from '../pages/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
