import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '北大宿舍開宿預約',
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      title: 'Admin | 北大宿舍開宿預約',
    },
  },
  {
    path: '/reserve_list',
    name: 'Admin',
    component: () => import('../views/ReserveList.vue'),
    meta: {
      title: '預約總表 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/edit_user',
    name: 'Admin',
    component: () => import('../views/EditUser.vue'),
    meta: {
      title: '預約總表 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login | 北大宿舍開宿預約',
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    meta: {
      title: 'Logout | 北大宿舍開宿預約',
    },
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue'),
    meta: {
      title: 'Random | 北大宿舍開宿預約',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
