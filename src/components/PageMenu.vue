<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <div class="nav__content">
        <ul class="nav__menu">
          <li>
            <router-link to="/" style="padding: 1.8rem"> HOME </router-link>
          </li>
          <li>
            <router-link to="/upload" style="padding: 1.8rem"> UPLOAD NFT </router-link>
          </li>
          <li>
            <router-link to="/workshop" style="padding: 1.8rem"> MY NFT HERO </router-link>
          </li>
          <li>
            <router-link to="/market" style="padding: 1.8rem"> FORGE </router-link>
          </li>
          <li>
            <router-link style="padding: 1.8rem" to="/arena"> ARENA </router-link>
          </li>
          <li>
            <router-link style="padding: 1.8rem" to="/about"> CROWD CONTROL </router-link>
          </li>
          <li style="float: right">
            <a class="discord-button" target="_blank" href="https://discord.gg/ZKKbhUs">
              <picture style="color: black">
                <source type="image/webp" srcset="../assets/icon/discord.webp" />
                <source type="image/png" srcset="../assets/icon/discord.png" />
                <img
                  src="../assets/icon/discord.png"
                  style="display: inline; max-height: 20px; transform: translateY(4px); filter: invert(1)"
                  alt="Image description"
                />
                JOIN US
              </picture>
            </a>
          </li>
          <li v-if="!getLoggedIn" style="float: right">
            <router-link class="login-button" to="/login" style="padding: 1.8rem">
              <span class="text-please-be-back"> LOGIN </span>
            </router-link>
          </li>
          <li v-if="getLoggedIn" style="float: right">
            <router-link to="/login" class="wallet-button" style="padding: 1.8rem">
              <span class="text-please-be-teal"> WALLET </span>
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
.text-please-be-back {
  color: black;
}
.text-please-be-teal {
  color: #29eddb;
}
.discord-button {
  background-color: white;
  color: black;
  padding: 0;
  font-size: 18px;
}
.login-button {
  background-color: #29eddb;
  color: black;
  font-style: black;
  font-size: 18px;
}
.wallet-button {
  color: #29eddb;
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

    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: $animation-duration;
    transition-duration: $animation-duration;
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $white;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: $animation-duration;
      transition-duration: $animation-duration;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover,
    &:focus,
    &:active {
      color: $minor-color-c;
    }
    &:hover:before,
    &:focus:before,
    &:active:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
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
}
</style>
