import Vue from "vue";
import Vuex from "vuex";
import app from './app'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userimgurl: require("../assets/img/userimg.png"),
    showModal:false,
  },
  mutations: {},
  actions: {},
  modules: {app},
});
