<template>
    <div>Fruits</div>
    <button @click="addFruitFromComponent">Add</button>
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">
      {{ fruit.name }} - {{ fruit.type }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    fruits() {
        console.log(this.$store);
      return this.$store.state.fruits;
    },
    counter() {
        return this.$store.state.counter;
    }
  },
  methods: {
    addFruitFromComponent() {
      const newFruit = {
        name: "Pink Lady",
        type: "Apple",
        id: 2,
      };

        console.log('trying to add', newFruit);

      // Use dispatch to call an action
      this.$store.dispatch("addFruit", newFruit);

      // Use commit to call a mutation
      this.$store.commit("addFruit", newFruit);
    },
  },
};
</script>

<style lang="scss" scoped></style>
