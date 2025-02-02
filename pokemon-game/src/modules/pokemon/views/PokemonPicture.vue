<template>
  <section>
    <img v-if="!showPokemon" class="brightness-0 h-[200px]" :src="pokemonImage" />
    <img v-else class="fade-in h-[200px]" :src="pokemonImage" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  pokemonId: number
  showPokemon: boolean
}

const props = defineProps<Props>()

const pokemonImage = computed(() => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
})
</script>

<style scoped>
@import '../../../assets/animations.css';

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
