<template>
  <div>
    <pre>{{ ingredients }}</pre>
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
