import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})