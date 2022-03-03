<template>
  <div id="Drawer-login">
    <button class="drawer__open" v-if="!getLoggedIn" @click="drawerVisible = true">Login</button>
    <button class="drawer__open" v-if="getLoggedIn" @click="drawerVisible = true">Wallet</button>
    <div
      class="drawer drawer--right"
      :style="{
        width: drawerVisible ? '95vw' : '0',
        paddingLeft: drawerVisible ? '10px' : '0',
      }"
    >
      <button class="drawer__close" @click="drawerVisible = false">
        <i class="close-icon"></i>
      </button>
      <div class="drawer__content">
        <LoginWallet />
      </div>
    </div>
    <div
      class="drawer__mask"
      :style="{
        width: drawerVisible ? '100vw' : '0',
        opacity: drawerVisible ? '0.6' : '0',
      }"
      @click="drawerVisible = false"
    ></div>
  </div>
</template>

<script>
import LoginWallet from './LoginWallet'

export default {
  name: 'PageMenuLogin',
  data() {
    return {
      drawerVisible: false,
    }
  },
  components: {
    LoginWallet,
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/drawer';
</style>
