import axios from 'axios';

export class pokemonApi {
  async get(options: string) {
    return (await axios.get('https://pokeapi.co/api/v2/pokemon'+options)).data;
  }
}
