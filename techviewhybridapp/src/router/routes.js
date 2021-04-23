
const routes = [
  //Route to The Website
  {
    path: '/',
    component: () => import('layouts/WebsiteLayout.vue'),
  },

  //Routes to App Dashboard
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/components/dashboard/dashboard.vue') }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/components/news/news.vue') }
    ]
  },
  {
    path: '/addnew',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/components/news/addnew.vue') }
    ]
  },
  {
    path: '/videos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/components/videos/videos.vue') }
    ]
  },
  {
    path: '/notifications',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/components/notifications/notifications.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
