<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->

    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #eeeeee;
  color: #263646;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

#app {
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
