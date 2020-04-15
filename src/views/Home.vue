<template>
  <div class="home">
    <main>
      <h1>Welcome</h1>
      <p>This is the assessment test hand-in for my application. Navigate to the individual hand-ins to see the solutions.</p>
    </main>
    <div class="index">
      <ul>
        <h3>Contents:</h3>
        <li>
          <router-link to="/1" class="index"><b>Assignment 1: </b></router-link>
          <span>Layout</span>
        </li>
        <li>
          <router-link to="/2" class="index"><b>Assignment 2: </b></router-link>
          <span>Image resizer</span>
        </li>
        <li>
          <router-link to="/3" class="index"><b>Assignment 3: </b></router-link>
          <span>Laravel pros and cons</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
$dark: #303030;
.home {
  color: $dark;
  max-width: 600px;
  margin: 50px auto;
  padding: 0 30px;
  text-align: left;
}
ul {
  list-style: none;
  font-family: "Montserrat", sans-serif;
}
a {
  text-decoration: none;
  color: $dark;
}
main {
  max-width: 450px;
  font-size: 1.3rem;
}
.index {
  margin: 30px auto;
  color: #635b5b;
  & h3 {
    color: #635b5b;
  }
}
</style>
