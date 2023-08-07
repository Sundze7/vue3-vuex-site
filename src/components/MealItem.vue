<template>
  <div class="bg-white shadow rounded">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        tenetur numquam, possimus, quas, laboriosam ex qui nihil minus eligendi
      </p>
      <div class="flex items-center justify-between">
        <you-tube-button :href="meal.strYoutube">YouTube</you-tube-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import YouTubeButton from "./YouTubeButton.vue";

defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
