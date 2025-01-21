<template>
  <section class="mt-5">
    <ul>
      <li class="btn btn-blue">Pokémon 1</li>
      <li class="btn btn-blue">Pokémon 2</li>
      <li class="btn btn-blue">Pokémon 3</li>
      <li class="btn btn-blue">Pokémon 4</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.btn {
  @apply py-2 px-4 my-2 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
li {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>
