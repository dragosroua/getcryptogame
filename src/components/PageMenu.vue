<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <div class="nav__content">
        <ul class="nav__menu">
          <li>
            <router-link to="/" style="padding: 1.8rem"> HOME </router-link>
          </li>
          <li>
            <router-link to="/demo" style="padding: 1.8rem"> DEMO </router-link>
          </li>

          <li v-if="!getLoggedIn" style="float: right">
            <router-link class="login-button" to="/login" style="padding: 1.8rem">
              <span class="text-black"> LOGIN </span>
            </router-link>
          </li>
          <li v-if="getLoggedIn" style="float: right">
            <router-link to="/login" class="wallet-button" style="padding: 1.8rem">
              <span class="text-wallet"> WALLET </span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageMenu',
  data() {
    return {
      displayMenu: false,
      displayLoginDialogue: false,
    }
  },
  computed: {
    getLoggedIn() {
      return this.$store.getters['common/wallet/loggedIn']
    },
    showMenuClass() {
      if (this.displayMenu) {
        return 'nav__menu '
      } else {
        return 'nav__menu nav__menu--hidden'
      }
    },
  },
  methods: {
    doNothing() {},
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
* {
  font-family: $font-family;
}
.text-black {
  color: black;
}
.text-wallet {
  color: $main-color-b;
}
.login-button {
  background-color: #cccccc;
  color: black;
  font-style: black;
  font-size: 18px;
}
.wallet-button {
  color: black;
  &:active {
    color: $minor-color-c;
  }
}

.nav-wrapper {
  width: 100%;
}

.nav {
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  background-color: $dark-gray;
  position: relative;
}

.nav__content {
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.nav__menu {
  width: auto;
  min-width: 80%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav__menu li {
  float: left;

  a,
  .nav__menu__item {
    font-family: $font-family-header;
    padding: 1.5rem;
    font-size: $font-size;
    color: white;
    text-align: center;
  }
  &.nav__menu__item--exposed {
    transform: skewX(-15deg);
    background-color: $white;
    a {
      color: $black;
    }
  }
}

.nav__authentication-modal {
  position: absolute;
  width: 60vw;
  right: 5.5rem;
  margin-top: -2.5rem;
  z-index: 10000000;
  box-shadow: $border-thickness-bold * 1.5 $border-thickness-bold * 1.5 rgba(0, 0, 0, 0.3);
}

.nav__logo {
  position: relative;
  display: inline-block;
  margin: -1em 1em -2em 0em;
  -webkit-user-drag: none;
  width: 350px;
  height: 100%;
}

.nav__button {
  color: $black;
  position: absolute;
  right: 1.5em;
  top: 8vw;
}

.nav__menu--hidden {
  color: $black;
}
</style>
