<template>
  <div class="e60_72">Doing it the right way</div>
  <div class="maintext">Let's create a wallet first.</div>
  <SpWallet class="wallet--local" ref="wallet" v-on:dropdown-opened="$refs.menu.closeDropdown()" />
</template>

<script>
export default {
  name: 'LoginWallet',
  components: {},
  data() {
    return {}
  },
  mounted() {},
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
  height: 150%;
  background-color: white;
}
.wallet--local {
  position: relative;
}
.wrapper {
  float: right;
}
.maintext {
  color: black;
  font-family: Arial;
  text-align: left;
  font-size: 25px;
  letter-spacing: 0;
  padding-top: 50px;
}
.container {
  width: 80%;
  height: 100%;
  padding: 5% 7%;
  background-color: white;
}
.e60_72 {
  color: black;
  font-family: Arial;
  text-align: left;
  font-size: 50px;
  letter-spacing: 0;
}
</style>
