import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


  const state = {
    highestRatedWines: [],
    averageWineScore: 0,
    lowestWineScore: 0,
    standardDeviationPoints: 0,
  };

  const getters = {
    highestRatedWines: state => state.highestRatedWines,
    averageWineScore: state => state.averageWineScore,
    lowestWineScore: state => state.lowestWineScore,
    standardDeviationPoints: state => state.standardDeviationPoints,
  };

const actions = {
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
  getLowestScore: ({ commit }) => {
    const path = 'http://localhost:5000/getlowestscore';
    axios.get(path)
      .then((res) => {
        commit('setLowestScore', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getStandardDeviation: ({ commit }) => {
    const path = 'http://localhost:5000/getStandardDeviation';
    axios.get(path)
      .then((res) => {
        commit('setStandardDeviationPoints', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  };

const mutations = {
  setHighestRatedWine(state, data) {
    state.highestRatedWines = data;
  },
  setAverageWineScore(state, data) {
    state.averageWineScore = data;
  },
  setLowestScore(state, data) {
    state.lowestWineScore = data;
  },
  setStandardDeviationPoints(state, data) {
    state.standardDeviationPoints = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
