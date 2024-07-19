<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  padding: 128px 160px;
  @include breakpoint("large") {
    padding: 88px 16px;
  }
}
</style>
