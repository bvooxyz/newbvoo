import BackHome from '../layouts/BackHome.vue';
import NotReady from '../pages/NotReady.vue';
// import Projects from '../pages/Projects.vue';
import Index from '../pages/Index.vue';
import MainLayout from '../layouts/MainLayout.vue';
import ROMs from '../pages/ROMs.vue';
import Error404 from '../pages/Error404.vue';

const routes = [
  {
    path: '/',
    component: () => MainLayout,
    children: [{ path: '', component: () => Index }],
  },
  {
    path: '/Projects',
    component: () => BackHome,
    children: [{ path: '', component: () => NotReady }],
  },
  {
    path: '/ROMs',
    component: () => BackHome,
    children: [{ path: '', component: () => ROMs }],
  },
  {
    path: '/awa',
    component: () => BackHome,
    children: [{ path: '', component: () => NotReady }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => Error404,
  },
];

export default routes;
