<template>
  <header>
    <div class="header-content-container">
      <router-link to="/" class="nav__logo">
        <img class="logo" alt="Crowd Control" src="../assets/logo2.gif" />
      </router-link>

      <!--router-link v-if="!getLoggedIn" to="/login">
        <div class="awesome-button wide-small">
          <span class="awesome-button-text">Login</span>
        </div>
      </router-link-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      isLoggedIn: false,
      walletName: '',
    }
  },
  watch: {
    "$store.getters['common/wallet/walletName']": function () {
      this.getLoginStatus()
    },
  },

  computed: {
    getUserCredits() {
      return this.$store.getters.getUserCredits
    },
    getLoggedIn() {
      return this.$store.getters['common/wallet/loggedIn']
    },
  },
  methods: {
    getLoginStatus() {
      this.walletName = this.$store.getters['common/wallet/walletName']
      this.isLoggedIn = this.$store.getters['common/wallet/walletName'] != null ? true : false
      console.log(this.$store.getters['common/wallet/walletName'] + ' : ' + this.isLoggedIn)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.wide-small {
  width: 180px;
  height: 40px;
  z-index: 100;
  position: absolute;
  right: 10%;
  padding: 10px;
}

header {
  background-color: $header-gray;
  padding: 1% 5%;
  //text-align: center;
  height: 10%;
  //border-bottom: $border-thickness-bold solid $white;
}
.get-coins {
  text-decoration: none;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  width: 230px;
  height: 46px;
  margin-left: 100px;
  font-size: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.header-item {
  font-weight: bolder;
  color: $white;
  padding-left: 12%;
  font-size: 20px;
  display: inline;
}
.login {
  position: absolute;
  right: 10%;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  width: 230px;
  height: 46px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 100;
}
.nav__logo {
  height: 100%;
  width: 100%;
  display: contents;
}
.header-content-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: middle;
}
.account-box {
  position: absolute;
  top: 0;
  right: 2rem;
}
</style>
