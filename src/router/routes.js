/* eslint-disable import/no-unresolved */
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/Projects',
    component: () => import('layouts/BackHome.vue'),
    children: [{ path: '', component: () => import('pages/NotReady.vue') }],
  },
  {
    path: '/ROMs',
    component: () => import('layouts/BackHome.vue'),
    children: [{ path: '', component: () => import('pages/ROMs.vue') }],
  },
  {
    path: '/awa',
    component: () => import('layouts/BackHome.vue'),
    children: [{ path: '', component: () => import('pages/NotReady.vue') }],
  },
  {
    path: '/pogfish',
    component: () => import('layouts/BackHome.vue'),
    children: [{ path: '', component: () => import('pages/Pogfish.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
