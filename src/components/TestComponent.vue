<template>
  <div>
    <div>Test</div>
    <button @click="inc()">Clicked {{ countState.count }} times</button>
  </div>

  <div>
    <input type="text" v-model="route" />
    <button @click="gotoClicked">GO</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { clickStore } from "appshell/Store";

export default {
  setup() {
    const router = useRouter();

    const inc = () => {
      clickStore.incrementCount();
      clickStore.getState().count++;
    };

    const state = reactive({
      route: "/person/edit/1",
    });

    function gotoClicked() {
      router.push({ path: state.route });
    }

    return {
      countState: clickStore.getState(),
      inc,
      gotoClicked,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
