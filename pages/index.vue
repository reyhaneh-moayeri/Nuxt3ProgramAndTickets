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
  font-size: get-font-size("xxxxl");
  padding: 128px 0px 32px 0px;

  @include breakpoint("large") {
    font-size: 40px;
    padding: 88px 0px 24px 0px;
  }
}
</style>
