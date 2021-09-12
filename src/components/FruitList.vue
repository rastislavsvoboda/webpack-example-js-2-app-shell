<template>
  <div>Fruits</div>
  <button @click="inc()">Clicked {{ countState.count }} times</button>
</template>

<script>
import { clickStore } from "appshell/Store";
export default {
  setup() {
    const inc = () => {
      clickStore.incrementCount();
      clickStore.getState().count++;
    };

    return {
      countState: clickStore.getState(),
      inc,
    };
  },
};
</script>

<style lang="scss" scoped></style>
