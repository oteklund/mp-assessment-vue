<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/1">Assignment 1</router-link>
      <router-link to="/2">Assignment 2</router-link>
      <router-link to="/3">Assignment 3</router-link>
    </div>
    <router-view />
    <footer>
      <p>
        Otto Eklund
        <br />firstnamelastname@gmail.com
        <br />github.com/oteklund
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
$dark: #303030;
$medium: #c5b3b3;
$bright: #ffd3d3;
$light: #d3d3d3;
$bg: #fff6f6;

@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100vh;
  background: $bg;
}
body {
  line-height: 1.6;
}
#app {
  font-family: "Montserrat", sans-serif;
  color: $dark;
}
h1,
h2,
h3 {
  margin-bottom: 20px;
  font-family: "Merriweather", serif;
  color: $dark;
}

#nav {
  font-family: "Montserrat", sans-serif;
  padding: 30px;
  background-color: $medium;
  letter-spacing: 1.2px;
  a {
    font-weight: bold;
    color: $dark;
    text-decoration: none;
    margin-right: 20px;
    &.router-link-exact-active {
      color: $bright;
    }
  }
}
@media (max-width: 566px) {
  #nav {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
  }
}
footer {
  padding: 6px;
  background: $dark;
  color: $medium;
  font-size: 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
