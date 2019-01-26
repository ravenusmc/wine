import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Mike and Abby',
    highestRatedWines: [],
  },
  getters: {
    name: state => state.name,
    highestRatedWines: state => state.highestRatedWines,
  },
  actions: {
    getHighestRatedWine: ({ commit }) => {
      const path = 'http://localhost:5000/highestRatedWine';
      axios.get(path)
        .then((res) => {
          commit('setHighestRatedWine', res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    setHighestRatedWine(state, data) {
      state.highestRatedWines = data;
    },
  },
});
