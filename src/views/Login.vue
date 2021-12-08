<template>
  <div class="background">
    <div class="container">
      <div class="e60_72">Join the Experience</div>
      <div class="maintext">Before you can play the Crowd Control NFT Arena Game, you need to create a wallet.</div>
      <div class="wrapper">
        <SpWallet class="wallet--local" ref="wallet" v-on:dropdown-opened="$refs.menu.closeDropdown()" />
      </div>
      <img src="../assets/img/StickyMockup.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
  background-color: rgba(255, 198.00000339746475, 98.00000175833702, 1);
}
.wallet--local {
  position: relative;
}
.wrapper {
  float: right;
  //text-align: center;
}
.maintext {
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  text-align: left;
  font-size: 25px;
  letter-spacing: 0;
  padding-top: 50px;
}
.container {
  width: 80%;
  height: 100%;
  padding: 5% 7%;
  background-color: rgba(85.0000025331974, 5.000000176951289, 66.00000366568565, 1);
}
.e60_72 {
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  text-align: left;
  font-size: 50px;
  letter-spacing: 0;
}
</style>
