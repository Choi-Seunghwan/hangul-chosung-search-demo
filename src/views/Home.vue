<template>
  <div class="home">
    <SearchData></SearchData>
    <SearchBox></SearchBox>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchData from "@/components/SearchData.vue";
import SearchBox from "@/components/SearchBox.vue";

export default Vue.extend({
  name: "Home",
  components: {
    SearchData,
    SearchBox,
  },
});
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
