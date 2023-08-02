<template>
  <div class="flex gap-2 mt-2 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
