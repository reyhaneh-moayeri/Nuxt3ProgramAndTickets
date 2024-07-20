<template>
  <div class="empty-state">
    <img src="~assets/images/emptyState.svg" alt="No events found" />
    <p>No Events Found</p>
  </div>
</template>

<style scoped lang="scss">
.empty-state {
  img {
    width: 300px;
    height: 300px;
  }

  p {
    margin-top: get-font-size("xl");
    font-weight: 700;
  }

  @include breakpoint("small") {
    img {
      width: 200px;
      height: 200px;
    }
    p {
      font-weight: 500;
    }
  }
}
</style>
