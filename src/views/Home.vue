<template>
  <div class="home">
    <div class="top">
      <span class="top__title">
        {{ title }}
      </span>
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
<style lang="scss">
.home {
  position: relative;
  width: 100%;
  overflow: hidden;

  .top {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
  }
}

input:focus {
  outline: none;
}
</style>
