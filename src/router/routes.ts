import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import Home from 'pages/Home.vue';
import About from 'pages/About.vue';

import Wines from 'src/pages/Wines/Wines.vue';
import WhiteWines from 'src/pages/Wines/WhiteWines.vue';
import RedWines from 'src/pages/Wines/RedWines.vue';
import DessertWines from 'src/pages/Wines/DessertWines.vue';
import SparklingWines from 'src/pages/Wines/SparklingWines.vue';

import Food from 'pages/Food/Food.vue';
import Starters from 'src/pages/Food/Starters.vue';
import Mains from 'pages/Food/Mains.vue';
import Desserts from 'src/pages/Food/Desserts.vue';
import FoodDetails from 'pages/Food/FoodDetails.vue';

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
        path: '/wines/whitewine',
        component: WhiteWines,
        name: 'WhiteWines',
      },
      {
        path: '/wines/redwine',
        component: RedWines,
        name: 'RedWines',
      },
      {
        path: '/wines/dessertwine',
        component: DessertWines,
        name: 'DessertWines',
      },
      {
        path: '/wines/sparklingwines',
        component: SparklingWines,
        name: 'SparklingWines',
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
        path: '/food/mains',
        component: Mains,
        name: 'Mains',
      },
      {
        path: '/food/desserts',
        component: Desserts,
        name: 'Desserts',
      },

      {
        path: '/cart/',
        component: Cart,
        name: 'Cart',
        props: true,
      },
      {
        path: '/food/:id',
        component: FoodDetails,
        name: 'FoodDetails',
        props: true,
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
