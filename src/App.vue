<template>
  <div class="logos">
    <img alt="Vue logo" src="/assets/vue.png" />
    <img alt="Webpack logo" src="/assets/webpack.png" />
    <img alt="ModuleFederation logo" src="/assets/mf.jfif" />
    <img alt="JavaScript logo" src="/assets/js.png" />
  </div>
  <h2>
    Hello Vue 3 with Webpack 5 and Module Federation plugin and JavaScript
  </h2>
  <div class="container">
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

.logos {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  margin: auto;
}

.container {
  border: 1px dashed red;
  background: yellow;
  border-radius: 50px;
  margin: 5px 30px;
}
</style>
