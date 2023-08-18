<template>
  <div class="">
    <router-view class="mt-16" />
    <div v-if="shouldRenderDiv" class="flex flex-col items-end right-0 w-3/5">
      <div
        class="border bg-yellow-100 bg-opacity-80 translucent mt-10 p-8 rounded-xl"
      >
        <h2 class="text-orange-600 text-4xl font-semibold mb-2 text-center">
          Welcome To Our Site !!!
        </h2>
        <h2 class="text-orange-600 text-4xl font-semibold mb-8 text-center">
          (FOOD RECIPE)
        </h2>
        <p class="max-w-lg text-justify text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          eveniet officia facere, expedita sint dolore facilis possimus quos
          eligendi corrupti ea, at voluptatem sequi vero ipsum, quas quibusdam
          placeat harum Nesciunt eveniet officia facere, expedita sint dolore
          facilis possimus quos eligendi corrupti ea, at voluptatem sequi vero
          ipsum, quas quibusdam placeat harum .
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const shouldRenderDiv = ref(true);
const route = useRoute();

watch(
  () => route.path,
  (to) => {
    // Replace this condition with your logic to determine when to render the div
    shouldRenderDiv.value = to == "/";
  }
);
</script>

<style></style>
