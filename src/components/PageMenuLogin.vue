<template>
  <div id="Drawer-login">
    <button class="drawer__open" @click="drawerVisible = true">Login</button>
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
        <!-- this should not contain a menu, but directly the wallet management pages, instead of loading them into the main window -->
        <router-link class="login-button" to="/login" v-if="!getLoggedIn" @click="drawerVisible = false">
          Login
        </router-link>
        <router-link to="/login" class="wallet-button" v-if="getLoggedIn" @click="drawerVisible = false">
          <span class="text-wallet">Wallet</span>
        </router-link>
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
export default {
  name: 'PageMenuLogin',
  data() {
    return {
      drawerVisible: false,
    }
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/drawer';
</style>
