
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard.vue') }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/news.vue') }
    ]
  },
  {
    path: '/videos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/videos.vue') }
    ]
  },
  {
    path: '/notifications',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/notifications.vue') }
    ]
  },

  //Path to The Website
  {
    path: '/portal',
    component: () => import('layouts/WebsiteLayout.vue'),
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
