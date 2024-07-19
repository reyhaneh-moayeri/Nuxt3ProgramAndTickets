<template>
  <h1>Program and tickets</h1>
  <!-- // Updated added the Filters and Events -->
  <Filters />
  <Events />
</template>

<script setup lang="ts">
import Filters from "~/containers/Filters.vue";
import Events from "~/containers/Events.vue";
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 32px;
  font-size: 60px;

  @include breakpoint("large") {
    font-size: 40px;
  }
}
</style>
