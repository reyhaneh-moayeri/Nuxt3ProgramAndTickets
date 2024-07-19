<template>
  <div class="spinner">
    <div class="spinnerInner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes innerSpin {
  0% {
    opacity: 1;
    transform: translate(0 0);
  }
  49.99% {
    opacity: 1;
    transform: translate(40px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(40px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}
@keyframes spin {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.spinner {
  width: 50px;
  height: 50px;
  display: inline-block;
  overflow: hidden;

  .spinnerInner {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.34);
    backface-visibility: hidden;
    transform-origin: 0 0;
    margin: -8px 3px 0 0;

    div {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      top: 60px;
      left: 20px;
      box-sizing: content-box;

      &:nth-child(1) {
        background: $darkGray;
        animation: spin 1s linear infinite;
        animation-delay: -0.5s;
      }

      &:nth-child(2) {
        background: $lightGray;
        animation: spin 1s linear infinite;
        animation-delay: 0s;
      }

      &:nth-child(3) {
        background: $darkGray;
        animation: innerSpin 1s linear infinite;
        animation-delay: -0.5s;
      }
    }
  }
}
</style>
