<template>
  <div class="p-8 rounded-2xl text-justify">
    <h1 class="text-4xl font-bold mb-4 text-center">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
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
import { onMounted, ref } from "vue";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
