<template>
  <div class="searchData">
    <div :for="(item, index) in searchDataList" :key="index">
      <p>{{ item }}</p>
    </div>
    <input @keydown.enter="inputEnterHandler" v-model="inputStr" />
  </div>
</template>

<script lang="ts">
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
  mounted() {},
  methods: {
    ...mapActions({ addSearchData: "addSearchData" }),
    inputEnterHandler(): void {
      this.addSearchData(this.inputStr);
    },
  },
});
</script>
<style lang="scss" scoped>
.searchData {
  width: 100%;
  height: 300px;
}
</style>
