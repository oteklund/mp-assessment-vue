<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/1">Assessment 1</router-link>|
      <router-link to="/2">Assessment 2</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
$dark: #002d38;
$medium: #0098be;
$bright: #00ccff;
$light: #b5f0ff;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;
}

#nav {
  padding: 30px;
  background-color: $medium;
  a {
    font-weight: bold;
    color: $dark;

    &.router-link-exact-active {
      color: $bright;
    }
  }
}
</style>
