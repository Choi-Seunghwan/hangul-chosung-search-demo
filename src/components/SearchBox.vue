<template>
  <div class="searchBox">
    <iunput></iunput>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
<style lang="scss" scoped>
.searchBox {
  height: 300px;
}
</style>
