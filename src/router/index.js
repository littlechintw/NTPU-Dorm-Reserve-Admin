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
      title: '編輯宿生 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config.vue'),
    meta: {
      title: '參數設定 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue'),
    meta: {
      title: '編輯報到列表 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/adminmember',
    name: 'AdminMember',
    component: () => import('../views/AdminMember.vue'),
    meta: {
      title: '管理者帳號 | 北大宿舍開宿預約',
    },
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import('../views/Status.vue'),
    meta: {
      title: 'Status | 北大宿舍開宿預約',
    },
  },
  {
    path: '/visitor',
    name: 'Visitor',
    component: () => import('../views/Visitor.vue'),
    meta: {
      title: '宿舍內訪客 | 北大宿舍開宿預約',
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
  {
    path: '/studentsExcelUpload',
    name: 'StudentsExcelUpload',
    component: () => import('../views/StudentsExcelUpload.vue'),
    meta: {
      title: '宿生 Excel 上傳 | 北大宿舍開宿預約',
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
