<template>
  <main>
    <h2>Laravel: pros and cons</h2>
    <article>
      <p class="pros-cons-introduction">For this assessment I have gone through the documentation for the Laravel PHP framework and listed some of the benefits and downsides of using Laravel. I also went through a handful of tutorials and code-alongs to get a better feel for the workflow.</p>
      <br />
      <h3>Pros</h3>
      <ul>
        <li>
          <p>
            <b>Easy authentication.</b> Setting up authentication with Laravel is relatively simple. In fact, Laravel comes with an out of the box solution for user authentication as well as form validation.
          </p>
        </li>
        <li>
          <p>
            <b>Quick to learn.</b> Several sources cite Laravel to be an easy framework to learn. The construction process is fast and provides developers with useful scaffolding that makes maintaining the application hassle-free. This structure makes reading and understanding Laravel projects easy, even for someone who is new to the project in question.
          </p>
        </li>
        <li>
          <p>
            <b>Open-source.</b> Anyone can access the source code for Laravel. It can be found on GitHub at https://github.com/laravel/laravel.
          </p>
        </li>
        <li>
          <p>
            <b>Modular.</b> The Artisan package manager lets developers reuse modular add-ons in their project, allowing for less repetition and faster construction.
          </p>
        </li>
        <li>
          <p>
            <b>Community-driven.</b> Laravel is the most popular PHP framework, which means that there is a large community backing it up. This allows users to receive help from other developers and guarantees that the platform is future-proof. In addition, the documentation is top-notch and helps new and experienced users alike to find the answers they need.
          </p>
        </li>
      </ul>
      <hr>
      <h3>Cons</h3>
      <ul>
        <li>
          <p>
            <b>Not-so-newbie-friendly.</b> Laravel comes with a fairly hefty amount of dependencies and standards that make it a relatively daunting task to take on for someone who is an absolute beginner. However, the documentation and large community can help to offset the complexity and help ease the initial confusion.
          </p>
        </li>
        <li>
          <p>
            <b>Difficult to upgrade to.</b> According to several sources, Laravel is not very easy to graduate to from legacy PHP applications.
          </p>
        </li>
        <li>
          <p>
            <b>Slower.</b> Performance-wise, Laravel lags behind most (if not nearly all) of its more rapid counterparts. This is rarely an issue in the world of web applications, but still a consideration to make if speed is what is needed. 
          </p>
        </li>
      </ul>
      <hr>
    </article>
  </main>
</template>

<script>
export default {
  name: "LaravelEssay"
};
</script>

<style lang="sass" scoped>
$dark: #303030
$light: #d3d3d3
h3
  text-transform: capitalize
main
  color: $dark
  text-align: left
  margin: 50px auto
  padding: 0 20px
  max-width: 600px
article
  columns: 255px
  max-width: 550px
p
  font-size: 14px
.pros-cons-introduction
  padding: 15px
  margin-right: 15px
  background-color: $light 
  color: #635b5b
</style>