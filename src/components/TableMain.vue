<template>
  <div v-bind:class="'table-container player-count--' + players.length">
    <!-- printing portfolio for the isPlaying player -->
    <TablePortfolio
      v-bind:player="playingPlayer.id + 1"
      v-bind:name="playingPlayer.name"
      v-bind:avatar="playingPlayer.avatar"
      v-bind:total="playingPlayer.total"
      v-bind:wallettotal="playingPlayer.wallettotal"
      v-bind:lowestcoins="playingPlayer.lowestcoinvalues"
      v-bind:wallets="playingPlayer.cards.portfolio.wallets"
      v-bind:coins="playingPlayer.cards.portfolio.coins"
    />

    <div v-bind:class="'hand isplaying--' + (playingPlayer.id + 1)">
      <img src="../assets/img/wallet-hand.png" class="card" />
      <img src="../assets/img/keys-hand.png" class="card" />
      <img src="../assets/img/q2-hand.png" class="card" />
    </div>

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

    <div v-bind:class="'stack isplaying--' + (playingPlayer.id + 1)">
      <div class="notification-container">
        <NotificationAnimation v-bind:feedback="feedbackType" />
      </div>
      <img src="../assets/img/anverso-questions.png" class="card" />
      <img src="../assets/img/anverso-coins.png" class="card" />
      <div class="cardstack">
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
      </div>
    </div>
  </div>

  <div class="overlay" v-bind:class="{ show: showOverlayType }">
    <OverlayHandView
      v-show="showOverlayType === 'selectcardtoplay'"
      v-bind:players="players"
      v-bind:newcard="nexteventcard"
    />
    <OverlayPlayedCard
      v-show="showOverlayType === 'showplayedcard'"
      v-bind:player="playingPlayer"
      v-bind:card="playedCard"
    />
  </div>
</template>

<script>
import PlayerTag from './PlayerTag'
import TablePortfolio from './TablePortfolio'
import NotificationAnimation from './NotificationAnimation'
import OverlayHandView from './OverlayHandView'
import OverlayPlayedCard from './OverlayPlayedCard'

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
          avatar: 'ron.png',
          adress: 'walletaddress',
          isMe: true,
          isPlaying: true,
          total: 18,
          wallettotal: 5,
          lowestcoinvalues: [3, 3, 3],
          cards: {
            hand: ['keys', 'wallet', 'q7'],
            portfolio: {
              coins: ['ETH', 'AAVE', 'SHIT', 'SHIT'],
              wallets: [['BTC'], ['ETH', 'UNI']],
            },
          },
        },
        {
          id: 1,
          name: 'Eva',
          avatar: 'natalia.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 26,
          wallettotal: 12,
          lowestcoinvalues: [1, 1],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE'], ['XMR', 'SHIT']],
            },
          },
        },
        {
          id: 2,
          name: 'Maria',
          avatar: 'andrea.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE']],
            },
          },
        },
        {
          id: 3,
          name: 'Maria',
          avatar: 'andrea.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3, 1],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE']],
            },
          },
        },
        {
          id: 4,
          name: 'Maria',
          avatar: 'ron.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [1, 1, 1],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE']],
            },
          },
        },
        {
          id: 5,
          name: 'Maria',
          avatar: 'natalia.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3, 3],
          cards: {
            hand: ['q20', 'seed', 'q08'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE']],
            },
          },
        },
      ],
      // nexteventcard contains the type of the next card on the event stack
      nexteventcard: 'u1',
      // next3coincards contains the type of the 3 next card on the coin stack
      next3coincards: ['BTC', 'FIL', 'SHIT'],
    }
  },
  components: {
    PlayerTag,
    TablePortfolio,
    NotificationAnimation,
    OverlayHandView,
    OverlayPlayedCard,
  },
  computed: {
    playingPlayer: function () {
      let arr = this.players.filter((player) => player.isPlaying)
      return arr[0]
    },
    feedbackType: function () {
      // this function selects the right feedback notification series for each
      // move in the game. For the moment it just returns something static.
      return 'otherTurnStart'
    },
    showOverlayType: function () {
      // this function shows the overlay when needed. For the moment it reads the params of the URL.
      let overlaytype = false
      switch (this.$route.params.variant) {
        case 'selectcardtoplay':
          overlaytype = 'selectcardtoplay'
          break
        case 'showplayedcard':
          overlaytype = 'showplayedcard'
          break
        case 'selectcardstogiveup':
          overlaytype = false
          break
        case 'selectcardtopaddtowallet':
          overlaytype = false
          break
        case 'selectcwallettogiveup':
          overlaytype = false
          break
      }
      return overlaytype
    },
    playedCard: function () {
      // this function will listen to the card-played event and return the played card.
      // For now it just retuns something static
      return 'q1'
    },
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/table';
@import '../scss/overlay';

.table-container {
  height: $tableheight;
  position: relative;
  top: $appheaderheight;
  width: 100vw;
}

.info .pic {
  border-radius: 50%;
  height: auto;
  vertical-align: middle;
  width: 25px;
  position: relative;
}

.info .coins .coin {
  background-color: #9e93ff;
  border-radius: 10px;
  border: 1px solid #000;
  display: inline-block;
  line-height: 1.4;
  padding: 0 7px;
}

.info .walletcontainer {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  padding: 5px;
  margin: 10px 0px;
}

.info .wallettotal {
  color: #fff;
  position: relative;
  bottom: 1px;
  margin-right: 0px;
  background-color: #000;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 20px;
  border-radius: 4px;
}

.info .wallettotal:before {
  content: '';
  display: block;
  height: 20px;
  position: relative;
  top: -14px;
  width: 8px;
  border: solid 2px #000;
  border-radius: 5px;
  left: -1px;
}

.info .wallettext {
  height: 22px;
  line-height: 1;
  display: block;
  vertical-align: middle;
  position: relative;
  top: -29px;
  left: -6px;
  text-align: center;
  width: 22px;
}

.overlay {
  background-color: rgba(125, 111, 255, 0.59);
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(155, 155, 155, 0.6);
  backdrop-filter: blur(10px);
  height: $tableheight;
  left: 0;
  opacity: 0;
  position: fixed;
  top: $appheaderheight;
  transition: all 0.1s 0s ease-out;
  width: 100vw;
  z-index: 5;
}

.overlay.show {
  opacity: 1;
  transition: all 0.3s 0s ease-in;
  display: block;
}
</style>
