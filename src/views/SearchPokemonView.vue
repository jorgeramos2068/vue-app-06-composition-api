<template>
  <h1>Search a Pokemon</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Number of pokemon"
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>
  <br />
  <span>Press the Enter key to search</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'SearchPokemon',
  setup() {
    const pokemonId = ref(1);
    const txtSearchId = ref();
    const router = useRouter(); // For navigation
    const route = useRoute(); // For route

    onActivated(() => {
      txtSearchId.value.select();
    });

    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        router.push({ name: 'pokemon-id', params: { id: pokemonId.value } });
      },
    };
  },
};
</script>

<style></style>
