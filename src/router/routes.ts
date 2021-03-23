// import { RouteRecordRaw } from 'vue-router';

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/Home.vue'), name: 'Home' },

//       {
//         path: '/about',
//         component: () => import('pages/About.vue'),
//         name: 'About',
//       },

//       {
//         path: '/wines',
//         component: () => import('pages/Wines.vue'),
//         name: 'Wines',
//       },

//       {
//         path: '/food',
//         component: () => import('src/pages/Food/Food.vue'),
//         name: 'Food',
//       },
//       {
//         path: '/food/starters',
//         component: () => import('src/pages/Food/Starters.vue'),
//         name: 'Starters',
//       },

//       {
//         path: '/cart',
//         component: () => import('pages/Cart.vue'),
//         name: 'Cart',
//       },
//     ],
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/Error404.vue'),
//   },
// ];

// export default routes;
import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import Home from 'pages/Home.vue';
import About from 'pages/About.vue';
import Wines from 'pages/Wines.vue';
import Food from 'pages/Food/Food.vue';
import Starters from 'pages/Food/Starters.vue';
import Cart from 'pages/Cart.vue';
import Error404 from 'pages/Error404.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home, name: 'Home' },

      {
        path: '/about',
        component: About,
        name: 'About',
      },

      {
        path: '/wines',
        component: Wines,
        name: 'Wines',
      },

      {
        path: '/food',
        component: Food,
        name: 'Food',
      },
      {
        path: '/food/starters',
        component: Starters,
        name: 'Starters',
      },

      {
        path: '/cart',
        component: Cart,
        name: 'Cart',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: Error404,
  },
];

export default routes;
