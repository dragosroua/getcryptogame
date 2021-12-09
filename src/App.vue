<template>
  <div v-if="initialized">
    <SpLayout>
      <template v-slot:header />
      <template v-slot:content>
        <PageHeader />
        <PageMenu />
        <!-- <SpWallet ref="wallet" v-on:dropdown-opened="$refs.menu.closeDropdown()" /> -->
        <router-view />
      </template>
    </SpLayout>
    <notifications group="bottom-right-notification" position="bottom right" class="notification" />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
import './scss/app.scss'
import '@starport/vue/lib/starport-vue.css'
//import Sidebar from './components/Sidebar'
import PageMenu from './components/PageMenu'
import PageHeader from './components/PageHeader'

export default {
  components: {
    //Sidebar,
    PageMenu,
    PageHeader,
  },
  data() {
    return {
      initialized: false,
      isLoggedIn: false,
      walletName: '',
    }
  },
  mounted() {
    console.log('loggedin?', this.$store.getters['common/wallet/loggedIn'])
  },
  computed: {
    hasWallet() {
      console.log('HASWALLET')
      return this.$store.hasModule(['common', 'wallet', 'loggedIn'])
    },
  },
  methods: {
    setLoginStatus() {
      this.walletName = this.$store.getters['common/wallet/walletName']
      console.log('walletname:', this.walletName)
      if (this.walletName != null) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    },
  },
  watch: {
    '$store.state.common.wallet.selectedAddress': function () {
      console.log('address:', this.$store.state.common.wallet.selectedAddress)

      this.setLoginStatus()

      function delay(t, v) {
        return new Promise(function (resolve) {
          setTimeout(resolve.bind(null, v), t)
        })
      }

      Promise.prototype.delay = function (t) {
        return this.then(function (v) {
          return delay(t, v)
        })
      }

      if (this.isLoggedIn) {
        console.log('LOGGED IN')
        /*
        this.$axios
          .post(
            process.env.VUE_APP_FAUCET,
            {
              address: this.$store.getters['common/wallet/address'],
              coins: ['5000upylon'],
            },
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            },
          )
          .delay(1000)
          .then((res) => {
            console.log('Faucet Initiated: ', res)
            console.log('dispatch this:', {
              '@type': '/Pylonstech.pylons.pylons.MsgCreateAccount',
              creator: this.$store.getters['common/wallet/address'],
              username: this.$store.getters['common/wallet/walletName'],
            })
            this.$store
              .dispatch('Pylonstech.pylons.pylons/MsgCreateAccount', {
                value: {
                  '@type': '/Pylonstech.pylons.pylons.MsgCreateAccount',
                  creator: this.$store.getters['common/wallet/address'],
                  username: this.$store.getters['common/wallet/walletName'],
                },
              })
              .then((res) => {
                console.log('after create account, yes', res)
                this.$store
                  .dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
                    value: {
                      '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
                      creator: this.$store.getters['common/wallet/address'],
                      cookbookID: 'getCryptoGrame',
                      recipeID: 'getcoins',
                      coinInputsIndex: '0',
                      itemIDs: [],
                      paymentInfos: [],
                    },
                  })
                  .then((res) => {
                    console.log('GottenCoins: ', res)
                  })
              })
          })*/
      } else {
        console.log('LOGGED OUT')
      }
    },
  },
  '$store.state.common.wallet': {
    deep: true,
    handler() {
      console.log('Hi', this.$store.state.common.wallet)
    },
  },
  async created() {
    let local = {
      apiNode: 'http://localhost:1317',
      rpcNode: 'http://localhost:26657',
      wsNode: 'ws://localhost:26657/websocket',
      chainId: 'pylons',
      addrPrefix: 'pylo',
      sdkVersion: 'Stargate',
      getTXApi: 'http://localhost:26657/tx?hash=0x',
    }
    let pylonsserver = {
      apiNode: 'http://api.testnet.pylons.tech:1317',
      rpcNode: 'http://api.testnet.pylons.tech:26657',
      wsNode: 'ws://api.testnet.pylons.tech:26657/websocket',
      chainId: 'pylons',
      addrPrefix: 'pylo',
      sdkVersion: 'Stargate',
      getTXApi: 'http://api.testnet.pylons.tech:26657/tx?hash=0x',
    }
    let pylonsserver2 = {
      apiNode: 'http://46.166.140.172:1317',
      rpcNode: 'http://46.166.140.172:26657',
      wsNode: 'http://46.166.140.172:26657/websocket',
      chainId: 'pylons',
      addrPrefix: 'pylo',
      sdkVersion: 'Stargate',
      getTXApi: 'http://localhost:26657/tx?hash=0x',
    }
    await this.$store.dispatch('common/env/init')
    this.initialized = true
  },
  errorCaptured(err) {
    console.log(err)
    this.notifyFail('error', ' ' + err)
    return false
  },
}
</script>
<style lang="scss">
@import './scss/variables';

.notification--info {
  border-left: $border-thickness-bold solid $black !important;
  background: $notification-info !important;
}
.notifications {
  width: 450px !important;
}
.notification {
  padding: $font-size/2;
  margin: 0 $font-size/2 $font-size/2;
  font-size: $font-size;
  color: $white;
}
.notification--success {
  border-left: $border-thickness-bold solid darken($notification-success, 10%) !important;
  background: $notification-success !important;
}

.notification--alert {
  border-left: $border-thickness-bold solid darken($notification-fail, 10%) !important;
  background: $notification-fail !important;
}
</style>
