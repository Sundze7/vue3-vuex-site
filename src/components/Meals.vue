<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There are no meals
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
