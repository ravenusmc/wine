import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const state = {
  wineData: [],
};

const getters = {
  wineData: state => state.wineData,
};

const actions = {

  fetchWineData: ({ commit }, payload) => {
    const varietyObject = {
      variety: payload
    };
    const path = 'http://localhost:5000/worldMapData';
    axios.post(path, varietyObject)
    .then((res) => {
      commit('setWineData', res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

};

const mutations = {
  setWineData(state, data) {
    state.wineData = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
