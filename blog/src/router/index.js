import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueRouter from 'vue-router';

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
    },
    {
        path: '/WBlog',
        name: 'WBlog',
        component: (resolve) => require(['../components/WriteBlog.vue'], resolve)
    },
    {
        path: '/SBlog',
        name: 'SBlog',
        component: (resolve) => require(['../components/ShowBlog.vue'], resolve)
    },
    {
        path: '/UProfile',
        name: 'UProfile',
        component: (resolve) => require(['../components/UserProfile.vue'], resolve)
    }
  ]
})
