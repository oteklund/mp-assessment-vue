<template>
<body>
  <div class="wrapper">
    <h2>Lorem ipsum</h2>
    <div class="col col--half">
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetuer</li>
        <li>Adipiscing elit</li>
        <li>Consectetuer</li>
      </ul>
    </div>
    <div class="col col--half">
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetuer</li>
        <li>Adipiscing elit</li>
        <li>Consectetuer</li>
      </ul>
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: "LayOut"
};
</script>

<style scoped lang="scss">
$bg-color: #0a5a91;
$left-color: #26bec9;
$right-color: #3181c3;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: $bg-color;
  height: 100vh;
  
}
.wrapper {
  & > * {
    padding: 30px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin: auto;
  width: 70vw;
  text-align: center;
  h2 {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    font-weight: 200;
    font-size: 1.5rem;
  }
  .col {
    font-size: 1.5rem;
    max-width: 430px;
    &:nth-of-type(1) {
      background: $left-color;
      &::after {
        position: absolute;
        transform: rotate(-45deg) translate(58px, 77px);
        content: "";
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-left: 1.5rem solid $left-color;
      }
    }
    &:nth-of-type(2) {
      background: $right-color;
      &::after {
        position: absolute;
        transform: rotate(225deg) translate(74px, -94px);
        content: "";
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-left: 1.5rem solid $right-color;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    color: black;
    li {
      align-self: flex-start;
    }
    li::before {
      color: white;
      content: "✓";
      margin-right: 5px;
    }
  }
}
@media screen and (max-width: 660px) {
  .col {
    width: 100%;
  }
  .col::after {
    display: none;
  }
}
@media screen and (max-width: 350px) {
  .col ul li {
    font-size: 1.2rem;
  }
}
@media screen and (max-height: 450px) {
  .col {
    margin-top: 20px;
  }
  h2 {
    position: absolute;
    right: 0px;
    transform: rotate(90deg);
  }
}
</style>