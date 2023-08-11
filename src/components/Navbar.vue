<template>
  <header
    class="bg-yellow-100 h-16 flex justify-between items-center text-xl font-semibold px-7 shadow-xl text-orange-600"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 hover:border-2 hover:bg-orange-600 hover:text-yellow-100 rounded-lg transition-colors"
    >
      Home
    </router-link>
    <div class="flex gap-4 items-center justify-center transition-colors">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full transition-colors hover:border-2 hover:bg-orange-600 hover:text-yellow-100 rounded-lg items-center justify-center py-4"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full transition-colors hover:border-2 hover:bg-orange-600 hover:text-yellow-100 rounded-lg py-4"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-2 h-full transition-colors hover:border-2 hover:bg-orange-600 hover:text-yellow-100 rounded-lg py-4"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
