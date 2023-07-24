<template>
  <h1 v-if="isLoading">Searching...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h1>Pokemon View</h1>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'search' }">Return</router-link>
  </template>
</template>

<script>
import { watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon';

export default {
  name: 'Pokemon',
  setup() {
    const route = useRoute();
    const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id,
      (value, prevValue) => searchPokemon(route.params.id)
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm('Are you sure you want to leave?');
      if (!answer) {
        return false; // It blocks the output
      }
    });

    return {
      errorMessage,
      isLoading,
      pokemon,
    };
  },
};
</script>

<style></style>
