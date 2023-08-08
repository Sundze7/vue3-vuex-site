<template>
  <div class="p-8 rounded-2xl text-justify">
    <h1 class="text-4xl font-bold mb-4 text-center">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="Search for Ingredients"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-4 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
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
