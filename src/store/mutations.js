const mutations = {
  setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
  },
  setMealsByLetter(state, meals) {
    state.setMealsByLetter = meals;
  },
  setMealsByIngredient(state, meals) {
    state.setMealsByIngredient = meals;
  },
};

export default mutations;
