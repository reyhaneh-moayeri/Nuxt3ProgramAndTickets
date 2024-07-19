<template>
  <button class="button">
    <span v-if="label" class="button-label">{{ label }}</span>
    <template v-if="icon">
      <img :src="icon" />
    </template>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
    default: "default-color",
  },
});
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  background-color: $blackColor;
  color: $whiteColor;
  font-size: get-font-size("lg");
  white-space: nowrap;
  font-family: $font-family;

  @include breakpoint("large") {
    font-size: get-font-size("md");
    padding: 8px 16px;
  }

  &-icon {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
}
</style>
