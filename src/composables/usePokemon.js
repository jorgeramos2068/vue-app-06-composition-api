import axios from 'axios';
import { ref } from 'vue';

const usePokemon = (pokemonId = '1') => {
  const pokemon = ref();
  const isLoading = ref(false);
  const errorMessage = ref('');

  const searchPokemon = async localPokemonId => {
    if (!localPokemonId) return;

    isLoading.value = true;
    pokemon.value = null;

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${localPokemonId}`
      );
      pokemon.value = data;
      errorMessage.value = '';
    } catch (err) {
      errorMessage.value = 'The data could not be loaded';
    }

    isLoading.value = false;
  };

  searchPokemon(pokemonId);

  return {
    errorMessage,
    isLoading,
    pokemon,
    searchPokemon,
  };
};

export default usePokemon;
