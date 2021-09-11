<template>
  <AppHeader />

  <div class="component-container">
  <router-view/>

  </div>
</template>

<script>
import AppHeader from "Components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
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

ul {
  margin: 0;
  padding: 0;
}

li,
li a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-bottom: 20px;
}

.logo {
  height: 100px;
}

.component-container {
  border: 1px solid white;
  box-shadow: 0.1rem 0 0.2rem  gray;
  background: rgb(245,245,245);
  border-radius: 50px;
  margin: 30px;
  padding: 50px;
}
</style>
