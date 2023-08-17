<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 p-8"
  >
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center">
    <div class="bg-yellow-100 bg-opacity-75 p-5 rounded-xl">
      <h2 class="text-4xl font-semibold mb-2 text-orange-600 text-center">
        Alert Alert !!!
      </h2>
      <h2 class="text-4xl font-semibold mb-6 text-orange-600 text-center">
        (No Meals)
      </h2>
      <img src="../assets/img/go.gif" alt="no meals" />
      <p class="text-2xl">Perform a search to obtain meals</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import MealItem from "./MealItem.vue";

defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
