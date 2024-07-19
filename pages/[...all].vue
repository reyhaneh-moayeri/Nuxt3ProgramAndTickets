<template>
  <div class="not-found">
    <img src="~assets/images/notFount.svg" alt="No events found" />
    <Button label="Back Home" @click="backHome" class="button" />
  </div>
</template>

<script setup>
const router = useRouter();

const backHome = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 500px;
    height: 300px;
    width: 80%;
  }

  button {
    margin-top: 24px;
  }
}
</style>
