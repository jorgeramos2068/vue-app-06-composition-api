<template>
  <h2 v-if="isLoading">Wait please...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMessage">There was an error while loading the data</h5>
  <div v-if="users.length">
    <user-list :users="users" v-slot="{ user }">
      <h4>{{ user.first_name }} {{ user.last_name }}</h4>
      <p>{{ user.email }}</p>
    </user-list>
  </div>
  <button @click="previousPage()">Previous</button> |
  <button @click="nextPage()">Next</button> |
  <span>Page: {{ currentPage }}</span>
</template>

<script>
import UserList from '@/components/UserList';
import useUsers from '@/composables/useUsers';

export default {
  name: 'Users',
  components: { UserList },
  setup() {
    const {
      currentPage,
      errorMessage,
      isLoading,
      nextPage,
      previousPage,
      users,
    } = useUsers();

    return {
      currentPage,
      errorMessage,
      isLoading,
      nextPage,
      previousPage,
      users,
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
</style>
