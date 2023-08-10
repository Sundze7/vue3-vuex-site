<template>
  <div class="relative">
    <navbar class="top-0 fixed z-10 w-full" />
    <main>
      <div class="">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
