<template>
  <Meals :meals="meals" />
</template>

<script setup>
import store from "@/store";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import Meals from "@/components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
