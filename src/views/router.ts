import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        auth: true
      },
      component: () => import(/* webpackChunkName: "home" */ './home/Home.vue'),
      redirect: '/home/myProject',
      children: [
        {
          path: 'project',
          name: 'project',
          component: () => import(/* webpackChunkName: "ProjectManage" */ '@/module/project/ProjectManage.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import(/* webpackChunkName: "detail" */ '@/module/project/DetailProject.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: 'addbug',
          name: 'addbug',
          component: () => import(/* webpackChunkName: "AddBugs" */ '@/module/bugs/AddBugs.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: 'bugs',
          name: 'bugs',
          component: () => import(/* webpackChunkName: "BugManage" */ '@/module/bugs/BugManage.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import(/* webpackChunkName: "UserInfo" */ '@/module/user/UserInfo.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: 'myProject',
          name: 'myProject',
          component: () => import(/* webpackChunkName: "myProject" */ '@/views/myProject/MyProject.vue'),
          meta: {title: '我的项目', icon: 'icon-wodewenjian1', name: '我的项目', auth: true}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "login" */ './login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "register" */ './register/Register.vue')
    }
  ]
});
