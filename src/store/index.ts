import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchDataList: [
      "가나다",
      "라마바사",
      "안녕",
      "네이버",
      "쿠팡",
      "한글",
      "초성검색",
    ],
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
