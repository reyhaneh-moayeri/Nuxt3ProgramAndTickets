<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  padding: 0 160px;
  margin: auto;
  @include breakpoint("xlarge") {
    padding: 0 16px;
  }
}
</style>
