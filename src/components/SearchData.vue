<template>
  <div :class="{ 'searchData--activated': toggle }" class="searchData">
    <div class="toggleBtn" @click="toggle = !toggle">{{ showMoreStr }}</div>
    <input
      @keypress.enter="inputEnterHandler"
      @input="inputHandler"
      :placeholder="inputPlaceholderStr"
      class="input"
      :value="inputStr"
    />
    <div class="searchData__list">
      <div class="item" v-for="(item, index) in searchDataList" :key="index">
        <p class="item__text">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import constant from "@/utils/constant.js";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  name: "SearchData",
  data() {
    return {
      inputStr: "",
      showMoreStr: constant.showMore,
      inputPlaceholderStr: constant.dataInputPlaceHolder,
      toggle: false,
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
    inputHandler(e) {
      this.inputStr = e.target.value;
    },
  },
});
</script>
<style lang="scss" scoped>
.searchData {
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  height: 110px;
  border: 2px solid #0f3460;
  border-bottom: 0px;
  border-radius: 8px 0px 0 0;
  background-color: #ffffff;
  padding: 20px;
  z-index: 10;
  transition: height 0.5s;

  &--activated {
    height: 60%;
  }

  .input {
    font-size: 15px;
    margin: 15px 0;
  }

  .toggleBtn {
    position: absolute;
    top: -25px;
    right: -2px;
    width: 70px;
    border: 2px solid #0f3460;
    border-bottom: 2px solid #fff;
    border-radius: 8px 8px 0 0;
    text-align: center;
    background-color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 196px);
    .item {
      margin: 4px;
      &__text {
        margin: 0;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
