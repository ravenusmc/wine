import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    highestRatedWines: [],
    averageWineScore: 0,
  },
  getters: {
    highestRatedWines: state => state.highestRatedWines,
    averageWineScore: state => state.averageWineScore,
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
    getAverageWineScore: ({ commit }) => {
      const path = 'http://localhost:5000/getBasicData';
      axios.get(path)
        .then((res) => {
          commit('setAverageWineScore', res.data);
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
    setAverageWineScore(state, data){
      state.averageWineScore = data;
    }
  },
});
