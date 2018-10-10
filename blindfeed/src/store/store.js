import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
  },
  // NEVER call these directly use the actions
  mutations: {
    setToken(state, token) {

    }
  },

  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    }
  },
  getters:{
    getToken(state) {
      return state.token;
    },
  }
});
