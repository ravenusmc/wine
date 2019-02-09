import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import fact from './modules/fact';
import map from './modules/map';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    fact,
    map,
  }
});
