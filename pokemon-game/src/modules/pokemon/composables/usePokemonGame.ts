import { ref, onMounted, GameStatus, pokemonApi, type PokemonListResponse } from '../interfaces/index';

export const usePokemonGame = () => {
  const gameSatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemons = async() => {
    const response: PokemonListResponse = await new pokemonApi().get('?limit=151');
    console.log(response.results);
  }

  onMounted(() => {
    getPokemons();
  })

  return {
    gameSatus,
  }
}
