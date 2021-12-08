<template>
  <div class="background">
    <div class="container">
      <img class="logo" alt="Crowd Control" src="../assets/logo.svg" />
      <div class="title">The NFT Arena game</div>

      <router-link to="/login" v-on:click="isStartClicked = !isStartClicked">
        <div class="awesome-button wide top-margin" style="margin: 40px auto; height: 40px; padding: 10px">
          <span class="awesome-button-text" style="text-decoration: none"> GET STARTED NOW </span>
        </div>
      </router-link>
      <div v-if="isStartClicked" style="text-align: center">
        <!-- <SpWallet class="wallet" ref="wallet" v-on:dropdown-opened="$refs.menu.closeDropdown()" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      isStartClicked: true,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.top-margin {
  margin-top: 5%;
}
.wide {
  width: 220px;
  height: 60px;
}
.logo {
  margin-top: 10%;
  width: 50%;
}
.sp-fill {
  padding-top: 0;
}
.wallet {
  position: relative;
  text-align: center;
}
.sp-wallet-create {
  width: 100%;
}
.title {
  font-size: 50px;
  font-family: $font-family;
  padding-top: 35px;
  font-weight: bold;
}
.container {
  padding: 20px 10%;
  text-align: center;
}
.get-started {
  font-size: 30px;
  text-decoration: none;
  padding: 5px 15px;
  line-height: 60px;
  color: black;
  margin-top: 35px;
  border-width: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  width: 480px;
  height: 70px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $background-gradient;
}
</style>
