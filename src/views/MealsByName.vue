<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-5/6">
      <div class="p-8 pb-0">
        <input
          type="text"
          v-model="keyword"
          class="rounded border-2 border-gray-100 w-full my-4"
          placeholder="Search Meals"
          @change="searchMeals"
        />
      </div>

      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
// import axiosClient from "@/axiosClient";
import store from "@/store";
import { useRoute } from "vue-router";

import { ref, computed, onMounted } from "vue";

import Meals from "@/components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
