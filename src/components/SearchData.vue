<template>
  <div class="searchData">
    <div class="searchData__list">
      <div class="item" v-for="(item, index) in searchDataList" :key="index">
        <p class="item__text">{{ item }}</p>
      </div>
    </div>
    <input @keydown.enter="inputEnterHandler" v-model="inputStr" />
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  name: "SearchData",
  data() {
    return {
      inputStr: "",
    };
  },
  computed: {
    ...mapState({ searchDataList: "searchDataList" }),
  },
  mounted() {
    return null;
  },
  methods: {
    ...mapActions({ addSearchData: "addSearchData" }),
    inputEnterHandler() {
      if (!this.inputStr) return;
      this.addSearchData(this.inputStr);
      this.inputStr = "";
    },
  },
});
</script>
<style lang="scss" scoped>
.searchData {
  margin-top: 30px;
  border: 7px solid #e94560;
  border-radius: 15px;
  padding: 15px;
  background-color: #0f3460;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 196px);
    .item {
      &__text {
      }
    }
  }
}
</style>
