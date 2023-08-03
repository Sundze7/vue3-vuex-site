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

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import store from "@/store";
import { useRoute } from "vue-router";

import { computed, onMounted } from "vue";

import MealItem from "@/components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
  console.log(route.params.letter);
});
</script>
