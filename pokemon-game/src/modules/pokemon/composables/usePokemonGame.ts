import { computed } from 'vue';
import { ref, onMounted, GameStatus, pokemonApi, type PokemonListResponse, type Pokemon } from '../interfaces/index';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  let pokemons = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);
  const pokemonOptions = ref<Pokemon[]>([]);
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  });

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  }

  const getPokemons = async(): Promise<Pokemon[]> => {
    const response: PokemonListResponse = await new pokemonApi().get('?limit=151');
    const pokemonArray = response.results.map((pokemon) => {
      const ulParts = pokemon.url.split('/');
      const id = ulParts[ulParts.length - 2] ?? 0;
      return {
        id: +id,
        name: pokemon.name,
      }
    });
    pokemonArray.sort(() => Math.random() - 0.5);
    return pokemonArray;
  }

  onMounted(async() => {
    pokemons.value = await getPokemons();
    getNextOptions();
    console.log(pokemonOptions.value);
  })

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    getNextOptions,
    randomPokemon,
  }
}
