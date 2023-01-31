import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Sample task 01', completed: false },
      { id: '2', text: 'Sample task 02', completed: true },
      { id: '3', text: 'Sample task 03', completed: true },
    ],
  },
  getters: {
    allTodos: (state, getters, rootState) => {
      return [...state.todos];
    },
    pendingTodos: (state, getters, rootState) => {
      return state.todos.filter(todo => !todo.completed);
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter(todo => todo.completed);
    },
    getTodosByTab: (_, getters) => tab => {
      switch (tab) {
        case 'all':
          return getters.allTodos;
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
        default:
          return getters.allTodos;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index === -1) {
        return;
      }
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
  actions: {},
  modules: {},
});
