<template>
  <div class="flex items-center justify-center">
    <div class="mt-8 flex gap-4 justify-center flex-wrap">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-xl font-bold border-2 px-2 bg-yellow-100 text-orange-600 hover:border-orange-600 rounded-lg"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import store from "@/store";
import { useRoute } from "vue-router";

import { computed, onMounted, watch } from "vue";

import Meals from "@/components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
