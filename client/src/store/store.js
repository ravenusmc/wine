import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import fact from './modules/fact';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    fact
  }
});
