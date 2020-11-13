<template>
  <div class="searchBox">
    <div class="searchBox__input">
      <div class="inputBox">
        <img class="searchImg" src="../assets/search_img.png" />

        <input
          @keyup="inputStr = $event.target.value"
          v-model="inputStr"
          class="inputBox__input"
        />
      </div>
    </div>
    <div class="searchBox__result">
      <div class="resultList">
        <div
          v-for="(item, index) in resultList"
          :key="index"
          class="resultItem"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import search from "@/utils/search.js";
export default Vue.extend({
  name: "SearchBox",
  props: {
    msg: String,
  },
  data() {
    return {
      inputStr: "",
      activated: false,
    };
  },
  computed: {
    ...mapState({ searchDataList: "searchDataList" }),
    resultList() {
      if (!this.searchDataList) return;
      const tempResultList = [];

      for (const item of this.searchDataList) {
        if (search(item, this.inputStr)) tempResultList.push(item);
      }
      return tempResultList;
    },
  },
});
</script>
<style lang="scss" scoped>
.searchBox {
  &__input {
    display: flex;
    justify-content: center;

    .inputBox {
      position: relative;
      width: 60%;
      max-width: 550px;
      height: 30px;
      background: #ffffff;
      border-radius: 8px;
      text-align: center;
      display: flex;
      justify-content: center;

      @media (max-width: 480px) {
        width: 80%;
      }

      .searchImg {
        position: absolute;
        left: 0;
        margin: 5px;
        width: 23px;
        height: 23px;
      }

      &__input {
        font-size: 16px;
        width: 100%;
        margin: 0 40px;
        border: unset;
      }
    }
  }

  &__result {
    display: flex;
    justify-content: center;

    .resultList {
      position: relative;
      width: 60%;
      max-width: 550px;
      background: #ffffff;
      border-radius: 0 0 8px 8px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 480px) {
        width: 80%;
      }
      .resultItems {
      }
    }
  }
}
</style>
