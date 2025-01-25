import { ref, onMounted, GameStatus, pokemonApi, type PokemonListResponse, type Pokemon } from '../interfaces/index';

export const usePokemonGame = () => {
  const gameSatus = ref<GameStatus>(GameStatus.Playing);

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
    const pokemons = await getPokemons();

    console.log({pokemons});
  })

  return {
    gameSatus,
  }
}
