import Vue from 'vue'
import Router from 'vue-router' 
import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (resolve) => require(['../components/Index.vue'], resolve)
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
    },
    {
        path: '/BList',
        name: 'BList',
        component: (resolve) => require(['../components/ShowBlogList.vue'], resolve)
    },{
      path:'/other/gettxt',
      name:'gettxt',
      component: (resolve)=> require(["../other/GetTxt.vue"],resolve)
    }
  ]
})
