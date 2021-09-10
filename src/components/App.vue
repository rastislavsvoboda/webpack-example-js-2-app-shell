<template>
  <img alt="Vue logo" src="/assets/logo.png" />
  <h2>
    Hello Vue 3 with Webpack 5 and Module Federation plugin
  </h2>
  <div class="container">
  <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from 'module1/HelloWorld'


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

.container {
  border: 1px dashed red;
  background: yellow;
}
</style>
