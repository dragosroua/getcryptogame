<template>
  <div id="Drawer-login">
    <button class="toggle" @click="drawerVisible = true" style="padding: 10px; margin 10px;">Menu Right</button>
    <div
      class="drawer drawer--right"
      :style="{
        width: drawerVisible ? '95vw' : '0',
        paddingLeft: drawerVisible ? '10px' : '0',
      }"
    >
      <button class="drawer__close" @click="drawerVisible = false">
        <i class="las la-times" style="font-size: 24px"></i>
      </button>
      <router-link to="/" style="padding: 1.8rem" @click="drawerVisible = false"> HOME </router-link>
      <router-link to="/demo" style="padding: 1.8rem" @click="drawerVisible = false"> DEMO </router-link>
      <slot></slot>
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

.drawer {
  background: $background-lighter;
  height: 100vh;
  max-width: 400px;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  transition: all 0.2s; /* for the animation */
  width: 0; /* initially */
  z-index: 200;
}

.drawer--left {
  border-right: 1px solid $background-lighter;
  left: 0;
  padding-right: 0; /* initially */
}

.drawer--right {
  border-left: 1px solid $background-lighter;
  right: 0;
  padding-left: 0; /* initially */
}

.drawer__close {
  margin: 5px;
}
.drawer--left .drawer__close {
  float: right;
}
.drawer--right .drawer__close {
  float: left;
}

.drawer__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 0; /* initially */
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
}
</style>
