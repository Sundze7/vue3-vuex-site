import axiosClient from "@/axiosClient";

// export default function searchMeals({ commit }, keyword) {
//   axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
//     commit("setSearchedMeals", data.meals);
//   });
// }

export const actions = {
  searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
  },
};

export default actions;
