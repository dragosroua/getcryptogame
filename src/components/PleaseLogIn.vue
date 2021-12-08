<template>
  <div class="wrapper">
    <div style="text-align: center">
      Please<router-link to="/login"> log in </router-link> before proceeding to this page! :)
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarOpen: true,
    }
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.wrapper {
  text-align: center;
  font-size: 50px;
  padding-top: 150px;
  margin: 0 auto;
  font-family: $font-family;
  color: white;
}
</style>
