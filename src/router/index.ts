import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About.vue';
import Homepage from '@/views/HomePage.vue';
import Subreddit from '@/views/Subreddit.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/r/:subreddit',
    name: 'Subreddit',
    component: Subreddit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
