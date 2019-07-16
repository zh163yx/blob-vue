import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/Register',
        name: 'Register',
        component: (resolve) => require(['../components/Register.vue'], resolve)
    },
    {
        path: '/Login',
        name: 'Login',
        component: (resolve) => require(['../components/Login.vue'], resolve)
    }
  ]
})
