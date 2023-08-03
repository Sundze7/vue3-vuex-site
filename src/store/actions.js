import axiosClient from "@/axiosClient";

export const actions = {
  searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
  },

  searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    });
  },

  searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
      commit("setMealsByIngredient", data.meals);
    });
  },
};

export default actions;
