<template>
  <div class="background">
    <div class="container">
      <div class="title">Admin</div>

      <router-link to="/login">
        <img class="image" src="../../interactive-prototype/img/ATOM-full.png" />
        <img class="image" src="../../interactive-prototype/img/BTC-full.png" />
        <img class="image" src="../../interactive-prototype/img/DOGE-full.png" />
        <img class="image" src="../../interactive-prototype/img/FIL-full.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
import init from '@/store/config.js'
import store from '../store/index'
import { createGameDeck } from '../backend/functions.js'
export default {
  name: 'Admin',
  components: {},
  mounted() {
    console.log('admin')
    //console.log(this.$store)
    this.initNewGame()
  },
  methods: {
    initNewGame() {
      let gameHost = this.$store.state.common.wallet.selectedAddress
      console.log('gameHost ' + gameHost)
      // to add oracles for getting other player's addresses
      var playersArray = [gameHost, 'player 2']
      var initialGameDeck = createGameDeck(gameHost, playersArray)
      var stateGameDeck = {
        turn: 0,
        coinCards: initialGameDeck.coinCardsArray,
        eventCards: initialGameDeck.eventCardsArray,
        players: playersArray,
      }
      this.$store.state.gameDeck = stateGameDeck
      console.log('state gameDeck ' + JSON.stringify(this.$store.state.gameDeck))
    },
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
.image {
  width: 25%;
  height: 25%;
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
.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
</style>
