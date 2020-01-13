import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Layout2 from '@/layout/index2.vue'
import Layout3 from '@/layout/index3.vue'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    redirect: '/projects',
    component: Layout,
    meta: { title: '全部项目' },
    children: [
      {
        path: '/projects',
        component: () => import('@/views/projects/index'),
        meta: { title: '全部项目', icon: 'icon-全部项目' }
      }
    ]
  },
  {
    path: '/detail',
    redirect: '/detail',
    component: Layout3,
    meta: { title: '全部项目' },
    children: [
      {
        path: '/detail',
        component: () => import('@/views/projects/detail'),
        meta: { title: '项目详情' },
        hidden: true
      }
    ],
    hidden: true
  },
  {
    path: '/projectList',
    redirect: '/projectList',
    component: Layout3,
    children: [
      {
        path: '/projectList',
        component: () => import('@/views/projects/projectList')
      }
    ],
    hidden: true
  },
  {
    path: '/participation',
    redirect: '/participation',
    component: Layout,
    meta: { title: '我参与的' },
    children: [
      {
        path: '/participation',
        component: () => import('@/views/participation/index'),
        meta: { title: '我参与的', icon: 'icon-我参与的' }
      }
    ]
  },
  {
    path: '/pigeonhole',
    redirect: '/pigeonhole',
    component: Layout,
    meta: { title: '归档项目' },
    children: [
      {
        path: '/pigeonhole',
        component: () => import('@/views/pigeonhole/index'),
        meta: { title: '归档项目', icon: 'icon-归档文件' }
      }
    ]
  },
  {
    path: '/template',
    redirect: '/template',
    component: Layout,
    meta: { title: '模板管理' },
    children: [
      {
        path: '/template',
        component: () => import('@/views/template/index'),
        meta: { title: '模板管理', icon: 'icon-模板管理', roles: ['admin'] }
      }

    ]
  },
  {
    path: '/addTemplate',
    redirect: '/addTemplate',
    component: Layout3,
    meta: { title: '模板管理' },
    children: [
      {
        path: '/addTemplate',
        component: () => import('@/views/template/addTemplate'),
        meta: { title: '新增模板' },
        hidden: true
      }

    ],
    hidden: true
  },
  {
    path: '/editTemplate',
    redirect: '/editTemplate',
    component: Layout3,
    meta: { title: '编辑模板' },
    children: [
      {
        path: '/editTemplate',
        component: () => import('@/views/template/editTemplate')
      }
    ],
    hidden: true
  },
  {
    path: '/message',
    component: Layout2,
    meta: { title: '消息中心' },
    children: [
      {
        path: '/message',
        component: () => import('@/views/message')
      }
    ],
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

export const asyncRouterMap = [
  {
    path: '/template',
    redirect: '/template',
    component: Layout,
    meta: { title: '模板管理' },
    children: [
      {
        path: '/template',
        component: () => import('@/views/template/index'),
        meta: { title: '模板管理', icon: 'icon-模板管理', roles: ['admin'] }
      }

    ]
  }
]
