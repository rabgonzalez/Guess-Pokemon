<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quién es este Pokémon?</h1>
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <h1 v-if="gameStatus !== GameStatus.Playing">{{ randomPokemon.name }}</h1>

    <PokemonOptions
      :options="pokemonOptions"
      @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.Playing"
    />

    <button
      v-if="gameStatus !== GameStatus.Playing"
      class="restart restart-red"
      @click="getNextOptions()"
    >
      Reiniciar
    </button>
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../views/PokemonOptions.vue'
import PokemonPicture from '../views/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemonGame'
import { GameStatus } from '../interfaces'
//import confetti from 'canvas-confetti'
const { pokemonOptions, gameStatus, isLoading, randomPokemon, getNextOptions } = usePokemonGame()

const checkAnswer = (id: number) => {
  const hasWon = id === randomPokemon.value.id
  if (hasWon) {
    gameStatus.value = GameStatus.Won

    /**
     * confetti({
     *  particleCount: 300,
     *  spread: 150,
     *  origin: { y: 0.6 },
     * })
    */
    return
  }

  gameStatus.value = GameStatus.Lost
}
</script>

<style lang="css" scoped>
.restart {
  @apply py-2 px-4 my-2 rounded;
}

.restart-red {
  @apply bg-red-500 text-white;
}
</style>
