import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue'), name: 'Home' },

      {
        path: '/about',
        component: () => import('pages/About.vue'),
        name: 'About',
      },

      {
        path: '/wines',
        component: () => import('pages/Wines.vue'),
        name: 'Wines',
      },

      {
        path: '/food',
        component: () => import('pages/Food.vue'),
        name: 'Food',
      },

      {
        path: '/cart',
        component: () => import('pages/Cart.vue'),
        name: 'Cart',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
