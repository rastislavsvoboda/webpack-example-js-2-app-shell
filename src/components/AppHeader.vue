<template>
  <header>
    <h1 @click="$router.push('/')">Vue3 with Module Federation</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/About">About</router-link>
        </li>
        <li>
          <router-link to="Module1">Module1</router-link>
        </li>
        <li>
          <router-link to="Module2">Module2</router-link>
        </li>
        <li>
          <router-link to="Fruits">Fruits</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
header {
  font-family: "Itim";
  letter-spacing: 1px;
  font-size: 18px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  cursor: pointer;
  margin: 0;
}

ul {
  display: flex;
}

li {
  padding-left: 0.5rem;
}
</style>
