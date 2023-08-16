<template>
  <div class="flex items-center justify-center">
    <div class="p-8 rounded-2xl text-justify w-5/6">
      <h1 class="text-4xl font-bold mb-4 text-center text-orange-600">
        Ingredients
      </h1>
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full mb-6 bg-gray-100 outline-orange-600"
        placeholder="Filter Ingredients"
      />
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-yellow-100 rounded-lg p-4 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2 text-orange-600">
          {{ ingredient.strIngredient }}
        </h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import { computed, onMounted, ref } from "vue";

const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
  //   if (!computedIngredients.value) return ingredients;
  return ingredients.value.filter((i) => {
    return i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
