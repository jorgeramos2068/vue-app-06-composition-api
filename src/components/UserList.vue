<template>
  <ul>
    <slot v-for="user in users" :key="user.id" :user="user"></slot>
  </ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-inline-start: 0;
  width: 250px;
}
</style>
