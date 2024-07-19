<template>
  <div class="filters-container">
    <SelectFilter
      id="location"
      label="Location"
      :options="locationOptions"
      v-model="filterStore.selectedLocation"
    />
    <SelectFilter
      id="category"
      label="Category"
      :options="categoryOptions"
      v-model="filterStore.selectedCategory"
    />
  </div>
</template>

<script setup lang="ts">
const filterStore = useFilterStore();
const optionStore = useOptionsStore();

const locationOptions = computed(() => {
  return generateOptions(optionStore.locations);
});

const categoryOptions = computed(() => {
  return generateOptions(optionStore.categories);
});
</script>

<style scoped lang="scss">
.filters-container {
  display: flex;
  gap: 20px;

  div {
    width: 180px;
  }
}
</style>
