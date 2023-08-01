<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          tenetur numquam, possimus, quas, laboriosam ex qui nihil minus
          eligendi expedita deserunt nostrum vitae repellat! Quibusdam quisquam
          quia accusantium ea minima!
        </p>
        <div class="flex items-center justify-between">
          <you-tube-button :href="meal.strYoutube">YouTube</you-tube-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axiosClient from "@/axiosClient";
import store from "@/store";
import { useRoute } from "vue-router";

import { ref, computed, onMounted } from "vue";

import YouTubeButton from "@/components/YouTubeButton.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
