
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'صفحه‌اصلی', component: () => import('src/pages/PageHome.vue') },
      { path: '/about', name: 'درباره', component: () => import('src/pages/PageAbout.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
