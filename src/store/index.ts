import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchDataList: ["가나다", "하이", "안녕"],
  },
  mutations: {
    addSearchData(state: { searchDataList: string[] }, searchData: string) {
      state.searchDataList.push(searchData);
    },
  },
  actions: {
    addSearchData({ commit }, searchData: string) {
      commit("addSearchData", searchData);
    },
  },
  modules: {},
});
