// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.min.css';
import VueMaterial from 'vue-material';
import VueGoogleCharts from 'vue-google-charts';
import VueCharts from 'vue-charts';
import axios from 'axios';
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueCharts);
Vue.use(VueGoogleCharts);
Vue.use(axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
