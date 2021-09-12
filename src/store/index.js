import { createStore } from "vuex";
import {actions,getters,mutations,state} from "./fruits.js";

export default createStore({
  state: {
    counter: 0,
    ...state()
  },
  mutations: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    ...mutations
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    ...actions
  },
  getters: {
    ...getters
  },
  modules: {},

});
