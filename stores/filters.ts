// This is Filter Store which perisit the selected filters in order to no be lost after reload

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore(
  "filter",
  () => {
    const selectedLocation = ref<string>("");
    const selectedCategory = ref<string>("");

    return {
      selectedLocation,
      selectedCategory,
    };
  },
  {
    persist: true,
  }
);
