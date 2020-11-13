<template>
  <div class="home">
    <div class="top">
      {{ title }}
    </div>
    <div class="content">
      <SearchBox></SearchBox>
      <SearchData></SearchData>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constant from "@/utils/constant.js";
import SearchData from "@/components/SearchData.vue";
import SearchBox from "@/components/SearchBox.vue";

export default Vue.extend({
  name: "Home",
  components: {
    SearchData,
    SearchBox,
  },
  data() {
    return {
      title: constant.title,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  overflow: hidden;

  .top {
    height: 120px;
  }
}
</style>
