<template>
  <button class="button" @click="$emit('click')">
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
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: $blackColor;
  color: $whiteColor;
  font-size: 18px;
  white-space: nowrap;
}

.button-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
