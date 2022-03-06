<template>
  <div v-bind:class="'table-container player-count--' + players.length">
    <!-- printing portfolio for the isPlaying player -->
    <template v-for="player in players.filter((player) => player.isPlaying)" :key="player.id">
      <PlayerPortfolio v-bind:player="player.id + 1" />

      <!--
        <div class="portfolio-container">
            <div v-bind:class="'portfolio player--' + (player.id + 1)">Portfolio</div>
        </div>
        -->
    </template>

    <!-- printing all player tags in the right order and positions, except the isPlaying player -->
    <template v-for="player in players.filter((player) => !player.isPlaying)" :key="player.id">
      <PlayerTag
        v-bind:player="player.id + 1"
        v-bind:name="player.name"
        v-bind:avatar="player.avatar"
        v-bind:total="player.total"
        v-bind:wallettotal="player.wallettotal"
        v-bind:lowestcoins="player.lowestcoinvalues"
      />
    </template>

    <div id="stack" class="stack">
      <div class="notification-container">
        <span class="round1">
          <span id="notifi-round1-1" class="notifications">It's Natalia's turn</span>
          <span id="notifi-round1-2" class="notifications">Natalia is picking up an event card</span>
          <span id="notifi-round1-3" class="notifications">Waiting for Natalia to select a card to play</span>
        </span>
        <span class="round2">
          <span id="notifi-round2-1" class="notifications">It's your turn, please pick up an event card</span>
          <span id="notifi-round2-2" class="notifications">You redeem 3 coin cards</span>
          <span id="notifi-round2-2-2" class="notifications">You redeem 1 coin card</span>
        </span>
        <span class="round3">
          <span id="notifi-round3-1" class="notifications">It's Ron's turn</span>
          <span id="notifi-round3-2" class="notifications">Ron is picking up an event card</span>
          <span id="notifi-round3-3" class="notifications">Waiting for Ron to select a card to play</span>
          <span id="notifi-round3-4" class="notifications">Ron redeems 1 coin card</span>
        </span>
        <span class="round4">
          <span id="notifi-round4-1" class="notifications">It's Andrea's turn</span>
          <span id="notifi-round4-2" class="notifications">Andrea is picking up an event card</span>
          <span id="notifi-round4-3" class="notifications">Waiting for Andrea to select a card to play</span>
          <span id="notifi-round4-4" class="notifications">Andrea redeems 1 coin card</span>
        </span>
        <span class="round5">
          <span id="notifi-round5-1" class="notifications">It's Natalia's turn</span>
          <span id="notifi-round5-2" class="notifications">Natalia is picking up an event card</span>
          <span id="notifi-round5-3" class="notifications">Waiting for Natalia to select a card to play</span>
          <span id="notifi-round5-4" class="notifications">Natalia redeems 1 coin card</span>
        </span>
      </div>
      <img src="../assets/img/anverso-questions.png" class="card" id="questionstack" />
      <img src="../assets/img/anverso-coins.png" class="card" id="cardstack" />
      <div class="cardstack" id="cardstack-ani">
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerTag from './PlayerTag'
import PlayerPortfolio from './PlayerPortfolio'

// helperfunction GetCardValues() { gets card values from their ticker with a switch statement}
// helperfunction GetCardArrayTotal() {gets the total of a ticker array using GetCardValues and adding them up}
// GetWalletTotal() { adds array walue of all wallets }
// GetTotal() { adds array walue of coins and of all wallets }
// Get LowestCoins() { transforms a ticker array to a value array and then finds the 3 lowest values}

export default {
  name: 'TableMain',
  data() {
    return {
      // The players array needs to start with the "isMe" player, the
      // "id" of the player has to correspond with their position in the
      // array (so we can have access to the order even when filtering).
      // For every player we need to calculate the following values:
      // -total
      // -wallettotal
      // -lowestcoinvalues
      players: [
        {
          id: 0,
          name: 'Dragos',
          avatar: '../assets/img/ron.png',
          adress: 'walletaddress',
          isMe: 'true',
          isPlaying: false,
          total: 18,
          wallettotal: 5,
          lowestcoinvalues: [3, 1],
          cards: {
            hand: ['keys', 'wallet', 'q13'],
            portfolio: {
              cards: ['ETH', 'ADA', 'SHIT', 'SHIT'],
              wallets: [['BTC'], ['ETH', 'UNI']],
            },
          },
        },
        {
          id: 1,
          name: 'Eva',
          avatar: '../assets/img/natalia.png',
          adress: 'walletaddress',
          isMe: 'false',
          isPlaying: true,
          total: 26,
          wallettotal: 12,
          lowestcoinvalues: [1, 1, 1],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              cards: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['FLOW']],
            },
          },
        },
        {
          id: 2,
          name: 'Maria',
          avatar: '../assets/img/andrea.png',
          adress: 'walletaddress',
          isMe: 'false',
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3, 1],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              cards: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['FLOW']],
            },
          },
        },
      ],
    }
  },
  components: {
    PlayerTag,
    PlayerPortfolio,
  },
  computed: {
    playersComputed: function () {
      // transform this.players. for example it could calculate the total,
      // the wallettotal and the lowestcoinsvalues for each player and write
      // a new array with those values added to each player. It could use
      // helperfunctions located outside the vue-object to increase readability

      // OR: Do this with filters instead!!!

      // OR: Create a computed property for each player, so Vue can update only
      // the necessary elements!!!

      return []
    },
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/table';

.table-container {
  height: $tableheight;
  position: relative;
  top: $appheaderheight;
  width: 100vw;
}
</style>
