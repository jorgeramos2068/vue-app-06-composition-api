import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {
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
    createTodo: newTodoText => {
      store.commit('createTodo', newTodoText);
    },
  };
};

export default useTodos;
