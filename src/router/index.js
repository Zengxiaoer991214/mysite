import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'index',
    component: () =>import('../views/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      isLogin: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/talk/talk.vue')
  },
  {
  path: '/home',
  name: 'home',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
  path: '/talk',
  name: 'talk',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
  ,
  {
  path: '/test',
  name: 'test',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
  path: '/color',
  name: 'color',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/work/color.vue')
  },
  {
    path: '/mk',
    name: 'mk',
    meta: {
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/markdown.vue')
  },
  {
    path:'/404',
    name:'404 err',
    component:()=>import('../views/404.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component:()=>import('../views/blog/blog.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('../views/login/login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component:()=>import('../views/blog/blog_down.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component:()=>import('../views/blog/blog_show.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  



  if (to.matched.length !== 0) {
    if(to.meta.isLogin){
      if(store.state.isLogin){
        next()
      }
      else{
        next('/login')
      }
    }
    else{
      next()
    }
    
  } else {
    next({ path: '/404' })
  }
});


export default router
