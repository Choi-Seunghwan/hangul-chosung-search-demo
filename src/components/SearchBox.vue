<template>
  <div class="searchBox">
    <div class="searchBox__input">
      <input @keyup="inputStr = $event.target.value" v-model="inputStr" />
    </div>
    <div class="searchBox__result">
      <div v-for="(item, index) in resultList" :key="index" class="resultItem">
        <div class="item">
          <span>{{ item }}</span>
        </div>
      </div>

      {{ resultList }}
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
    };
  },
  computed: {
    ...mapState({ searchDataList: "searchDataList" }),
    resultList() {
      if (!this.searchDataList) return;

      return this.searchDataList.map((item) => {
        console.log("result", search(item, this.inputStr));
        if (search(item, this.inputStr)) return item;
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.searchBox {
  height: 300px;
}
</style>
