<template>
  <div class="todos">
    <h1>Todos Vuex View</h1>
    <h2>All tasks: {{ allTodos.length }}</h2>
    <hr />
    <h2>Pending tasks: {{ pendingTodos.length }}</h2>
    <hr />
    <h2>Completed tasks: {{ completedTodos.length }}</h2>
    <hr />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TodosVuexView',
  setup() {
    const store = useStore();

    return {
      allTodos: computed(() => store.getters['allTodos']),
      completedTodos: computed(() => store.getters['completedTodos']),
      pendingTodos: computed(() => store.getters['pendingTodos']),
    };
  },
};
</script>

<style></style>
