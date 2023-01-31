<template>
  <div class="todos">
    <h1>Todos Vuex View</h1>
    <h2>Pending tasks: {{ pendingTodos.length }}</h2>
    <hr />
    <button
      @click="currentTab = 'all'"
      :class="{ active: currentTab === 'all' }"
    >
      All
    </button>
    <button
      @click="currentTab = 'pending'"
      :class="{ active: currentTab === 'pending' }"
    >
      Pending
    </button>
    <button
      @click="currentTab = 'completed'"
      :class="{ active: currentTab === 'completed' }"
    >
      Completed
    </button>
    <div class="todo-list">
      <ul>
        <li
          v-for="todo in getTodosByTab"
          :key="todo.id"
          :class="{ completed: todo.completed }"
          @dblclick="toggleTodo(todo.id)"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TodosVuexView',
  setup() {
    const store = useStore();
    const currentTab = ref('all');

    return {
      currentTab,
      allTodos: computed(() => store.getters['allTodos']),
      completedTodos: computed(() => store.getters['completedTodos']),
      pendingTodos: computed(() => store.getters['pendingTodos']),
      getTodosByTab: computed(() =>
        store.getters['getTodosByTab'](currentTab.value)
      ),
      toggleTodo: id => {
        store.commit('toggleTodo', id);
      },
    };
  },
};
</script>

<style scoped>
div.todo-list {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  text-align: left;
  width: 300px;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
