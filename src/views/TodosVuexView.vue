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
  <button @click="openModal">Create todo</button>
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Create new Todo</h2>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodoLocal(newTodoText)">
        <div>
          <input type="text" v-model="newTodoText" />
        </div>
        <div><button type="submit">Submit</button></div>
        <br />
      </form>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Close</button>
    </template>
  </modal>
</template>

<script>
import { ref } from 'vue';
import useTodos from '@/composables/useTodos';
import Modal from '@/components/Modal';

export default {
  name: 'TodosVuexView',
  components: { Modal },
  setup() {
    const isOpen = ref(false);
    const {
      currentTab,
      allTodos,
      completedTodos,
      pendingTodos,
      getTodosByTab,
      toggleTodo,
      createTodo,
    } = useTodos();

    const closeModal = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal,
      currentTab,
      allTodos,
      completedTodos,
      pendingTodos,
      getTodosByTab,
      toggleTodo,
      newTodoText: ref(''),
      createTodo,
      createTodoLocal: text => {
        createTodo(text);
        closeModal();
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
