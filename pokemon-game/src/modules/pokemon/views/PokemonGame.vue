<template>
  <section class="flex flex-col justify-center items-center w-screen h-screen" v-show="show">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture />
    <PokemonOptions />
  </section>
</template>

<script>
import { ref } from 'vue'
import PokemonPicture from './PokemonPicture.vue'
import PokemonOptions from './PokemonOptions.vue'

const show = ref(false)

export default {
  setup() {
    return {
      show,
    }
  },

  components: {
    PokemonPicture,
    PokemonOptions,
  },
}
</script>

<style lang="css" scoped></style>
