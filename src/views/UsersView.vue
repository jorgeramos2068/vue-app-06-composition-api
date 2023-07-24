<template>
  <h2 v-if="isLoading">Wait please...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMessage">There was an error while loading the data</h5>
  <div v-if="users.length">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
  <button @click="previousPage()">Previous</button> |
  <button @click="nextPage()">Next</button> |
  <span>Page: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers';

export default {
  name: 'Users',
  setup() {
    const {
      isLoading,
      currentPage,
      users,
      errorMessage,
      previousPage,
      nextPage,
    } = useUsers();

    return {
      isLoading,
      currentPage,
      users,
      errorMessage,
      previousPage,
      nextPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
  width: 250px;
}
</style>
