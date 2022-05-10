<template>
  <!-- START table-container -->
  <div v-bind:class="'table-container player-count--' + players.length + ' isplaying--' + (playingPlayer.id + 1)">
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

    <!-- printing hand for the isMe player -->
    <div class="hand">
      <VueImg
        v-for="(card, index) in players[0].cards.hand"
        :key="index"
        v-bind:imgsrc="card + '-hand.png'"
        class="card"
      />
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

    <!-- printing notification container -->
    <NotificationAnimation v-bind:feedback="feedbackType" />

    <!-- printing the stack -->
    <CardStack v-bind:animation="stackanimation" @click="animateStack('pickupcoin')" />
  </div>
  <!-- END table-container -->

  <!-- printing all possible overlays -->
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
    <OverlayGiveUpCards v-show="showOverlayType === 'selectcardstogiveup'" v-bind:player="playingPlayer" />
    <OverlaySaveCardToWallet
      v-show="showOverlayType === 'savecardtowallet'"
      v-bind:playingplayer="playingPlayer"
      v-bind:affectedplayer="nextPlayer"
    />
    <OverlayGiveUpWallet
      v-show="showOverlayType === 'selectwallettogiveup'"
      v-bind:playingplayer="playingPlayer"
      v-bind:affectedplayer="nextPlayer"
    />
  </div>
</template>

<script>
import VueImg from './VueImg'
import PlayerTag from './PlayerTag'
import TablePortfolio from './TablePortfolio'
import NotificationAnimation from './NotificationAnimation'
import CardStack from './CardStack'
import OverlayHandView from './OverlayHandView'
import OverlayPlayedCard from './OverlayPlayedCard'
import OverlayGiveUpCards from './OverlayGiveUpCards'
import OverlayGiveUpWallet from './OverlayGiveUpWallet'
import OverlaySaveCardToWallet from './OverlaySaveCardToWallet'

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
          isPlaying: false,
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
            hand: ['q3', 'wallet', 'q1'],
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
            hand: ['q4', 'keys', 'wallet'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['DOGE']],
            },
          },
        },
        {
          id: 3,
          name: 'Mulan',
          avatar: 'andrea.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3, 1],
          cards: {
            hand: ['q2', 'keys', 'q1'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['XMR', 'SHIT']],
            },
          },
        },
        {
          id: 4,
          name: 'Edward',
          avatar: 'ron.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: false,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [1, 1, 1],
          cards: {
            hand: ['q4', 'wallet', 'q5'],
            portfolio: {
              coins: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
              wallets: [['AAVE']],
            },
          },
        },
        {
          id: 5,
          name: 'Natalia',
          avatar: 'natalia.png',
          adress: 'walletaddress',
          isMe: false,
          isPlaying: true,
          total: 20,
          wallettotal: 8,
          lowestcoinvalues: [3, 3, 3],
          cards: {
            hand: ['q2', 'wallet', 'q7'],
            portfolio: {
              coins: ['ATOM', 'SHIT', 'SHIT'],
              wallets: [['ETH'], ['BTC', 'SHIT'], ['BTC', 'ETH', 'SHIT', 'SHIT', 'SHIT', 'SHIT']],
            },
          },
        },
      ],
      // nexteventcard contains the type of the next card on the event stack
      nexteventcard: 'qu1',
      // next3coincards contains the type of the 3 next card on the coin stack
      next3coincards: ['BTC', 'FIL', 'SHIT'],
      stackanimation: '',
    }
  },
  components: {
    VueImg,
    PlayerTag,
    TablePortfolio,
    NotificationAnimation,
    CardStack,
    OverlayHandView,
    OverlayPlayedCard,
    OverlayGiveUpCards,
    OverlayGiveUpWallet,
    OverlaySaveCardToWallet,
  },
  computed: {
    playingPlayer: function () {
      let arr = this.players.filter((player) => player.isPlaying)
      return arr[0]
    },
    nextPlayer: function () {
      // returns the next player in turn. For now it just returns a fixed player.
      console.log(this.players[this.players.length - 2])
      return this.players[this.players.length - 2]
    },
    feedbackType: function () {
      // this function selects the right feedback notification series for each
      // move in the game. For the moment it just returns something static.
      return [
        { msg: 'hi, o hey there! --- 1', time: 0 },
        { msg: 'hi there, oh, hello! --- 2', time: 1500 },
        { msg: 'oh, hello! hi there! --- 3', time: 3000 },
      ]
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
          overlaytype = 'selectcardstogiveup'
          break
        case 'savecardtowallet':
          overlaytype = 'savecardtowallet'
          break
        case 'selectwallettogiveup':
          overlaytype = 'selectwallettogiveup'
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
  methods: {
    animateStack: function (move) {
      // this function will add an animation to the stack according to move.
      // For now it just resets animationsStack and then sets a timeout with the animation
      let t = setTimeout(() => (this.stackanimation = move), 100)
      let u = setTimeout(() => (this.stackanimation = ''), 3000)
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
  z-index: -1;
}

.overlay.show {
  display: block;
  opacity: 1;
  transition: all 0.3s 0s ease-in;
  z-index: 5;
}
</style>
