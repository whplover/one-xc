import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import article from '@/components/article/article.vue'

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
    }
  ]
})
