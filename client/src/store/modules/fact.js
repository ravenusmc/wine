import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


const state = {
  highestRatedWines: [],
  averageWineScore: 0,
  lowestWineScore: 0,
  standardDeviationPoints: 0,
  averageWineRatingCountry: 0,
  TopFiveByCountry: [],
};

const getters = {
  highestRatedWines: state => state.highestRatedWines,
  averageWineScore: state => state.averageWineScore,
  lowestWineScore: state => state.lowestWineScore,
  standardDeviationPoints: state => state.standardDeviationPoints,
  averageWineRatingCountry: state => state.averageWineRatingCountry,
  TopFiveByCountry: state => state.TopFiveByCountry,
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

    getCountryInformation: ({ commit, dispatch}, payload) => {
      dispatch('fetchAverageWineRatingCountry', payload);
      dispatch('fetchTopFiveWinesByCountry', payload);
    },

    fetchAverageWineRatingCountry: ({ commit }, payload) => {
      const countryObject = {
        country: payload
      };
      const path = 'http://localhost:5000/countryWineInformation';
      axios.post(path, countryObject)
      .then((res) => {
        commit('setAverageWineRatingCountry', res.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },

    fetchTopFiveWinesByCountry: ({ commit }, payload) => {
      const countryObject = {
        country: payload
      };
      const path = 'http://localhost:5000/countryTopFive';
      axios.post(path, countryObject)
      .then((res) => {
        commit('setTopFiveByCountry', res.data)
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
  setAverageWineRatingCountry(state, data){
    state.averageWineRatingCountry = data;
  },
  setTopFiveByCountry(state, data){
    state.TopFiveByCountry = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
