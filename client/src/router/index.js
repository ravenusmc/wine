import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WorldMap from '@/pages/World';
import Fact from '@/pages/Fact';

Vue.use(Router);

export default new Router({
  routes: [
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
      path: '/world',
      name: 'WorldMap',
      component: WorldMap,
    },
    {
      path: '/fact',
      name: 'Fact',
      component: Fact,
    },
  ],
});
