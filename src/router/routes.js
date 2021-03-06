const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'accounts', component: () => import('pages/Account.vue') },
      { path: 'stores/:name', component: () => import('pages/Store.vue') },
      { path: 'welcome', component: () => import('pages/Welcome.vue') },
      {
        path: 'auth/login',
        component: () => import('./../module/auth/Login.vue')
      }
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
