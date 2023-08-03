const mutations = {
  setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals;
  },
  setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals;
  },
};

export default mutations;
