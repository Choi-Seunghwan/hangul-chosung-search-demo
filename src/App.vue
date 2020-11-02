<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->

    <router-view />
  </div>
</template>

<style lang="scss">
// https://colorhunt.co/palette/201882
body {
  background-color: #323639;
  color: #ffffff;
  margin: 0;
}

#app {
  max-width: 1024px;
  margin: 0 auto;
  widows: 100%;
  display: flex;
  justify-content: center;
}
</style>
