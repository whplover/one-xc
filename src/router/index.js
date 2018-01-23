import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import article from '@/components/article/article.vue'
import login from '@/components/login/login.vue'
import myIndex from '@/components/myIndex/myIndex.vue'
import publish from '@/components/publish/publish.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myIndex',
      name: 'myIndex',
      component: myIndex
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    }
  ]
})
