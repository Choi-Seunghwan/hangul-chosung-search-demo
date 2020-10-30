<template>
  <div class="home">
    <SearchData></SearchData>
    <SearchBox></SearchBox>
    <SearchResult></SearchResult>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchData from "@/components/SearchData.vue";
import SearchBox from "@/components/SearchBox.vue";
import SearchResult from "@/components/SearchResult.vue";

export default Vue.extend({
  name: "Home",
  components: {
    SearchData,
    SearchBox,
    SearchResult,
  },
});
</script>
