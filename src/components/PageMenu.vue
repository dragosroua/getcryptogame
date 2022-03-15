<template>
  <div class="drawer-container--menu">
    <button class="drawer__open" @click="drawerVisible = true">
      <i class="menu-icon"></i>
    </button>
    <div
      class="drawer drawer--left"
      :style="{
        width: drawerVisible ? '95vw' : '0',
        paddingLeft: drawerVisible ? '10px' : '0',
      }"
    >
      <button class="drawer__close" @click="drawerVisible = false">
        <i class="close-icon"></i>
      </button>
      <div class="drawer__content">
        <router-link to="/" @click="drawerVisible = false">Home</router-link>
        <router-link to="/demo" @click="drawerVisible = false">Demo</router-link>
        <hr style="margin-top: 40px" />
        <h3 style="font-weight: normal; color: #afafaf; font-size: 16px; font-style: italic; margin-bottom: 10px">
          Template Views
        </h3>
        <router-link to="/table" @click="drawerVisible = false">Table</router-link>
        <h3 style="font-weight: normal; color: #afafaf; font-size: 14px; font-style: italic; margin-bottom: 10px">
          Overlay Template Views
        </h3>
        <router-link to="/table/selectcardtoplay" @click="drawerVisible = false">Select Card To play</router-link>
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
  name: 'PageMenu',
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
