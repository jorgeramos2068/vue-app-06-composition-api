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
    allTodos(state, getters, rootState) {
      return [...state.todos];
    },
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed);
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter(todo => todo.completed);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
