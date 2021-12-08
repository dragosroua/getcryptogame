<template>
  <div class="background">
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: 'RenameMe',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.sp-fill {
  padding-top: 0;
}
.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $background-gradient;
}
</style>
