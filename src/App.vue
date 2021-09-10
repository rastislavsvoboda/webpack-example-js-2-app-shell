<template>
  <h1>
    Hello Vue 3 with Webpack 5 and Module Federation plugin and JavaScript
  </h1>
  <div class="logo-container">
    <img class="logo" alt="Vue logo" src="/assets/vue.png" />
    <img class="logo" alt="Webpack logo" src="/assets/webpack.png" />
    <img class="logo" alt="ModuleFederation logo" src="/assets/mf.jfif" />
    <img class="logo" alt="JavaScript logo" src="/assets/js.png" />
  </div>
  <div class="component-container">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "module1/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  margin: auto;
}

.logo {
  /* height: 200px; */
}

.component-container {
  border: 2px dashed red;
  background: beige;
  border-radius: 50px;
  margin: 30px;
}
</style>
