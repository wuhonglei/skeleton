<template>
  <div class="home">
      <a href="#title">跳转至标题</a>
      <div class="container-wrapper"></div>
      <div id="title">
        标题
      </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  }
};
</script>

<style lang="postcss" scoped>
  .container-wrapper {
      height: 600px;
      background-color: blue;
  }
</style>
