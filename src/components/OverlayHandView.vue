<template>
  <aside class="hand-view-select">
    <!-- START overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <em class="name">{{ playingPlayer.name }}</em>

      <!-- IF portfolio is showing, show back button -->
      <div v-if="showportfolio" class="portfolio-viewer">
        <span class="button show" @click="unsetPortfolio"> Back </span>
      </div>

      <!-- ELSE portfolio is hidden, show portfolio select dropdown -->
      <div v-else class="portfolio-viewer">
        <span @click="showdropdown = !showdropdown" class="button show">View portfolio</span>
        <div
          v-show="showdropdown"
          v-bind:class="showdropdown ? 'dropdown show' : 'dropdown'"
          @click="showdropdown = false"
        >
          <span class="dropdown-button" @click="setPortfolio(0)"> Me </span>
          <span
            v-for="player in players.filter((player) => !player.isPlaying)"
            :key="player.id"
            class="dropdown-button others"
            @click="setPortfolio(player.id)"
          >
            {{ player.name }}
            <template v-if="player.id == 1">(next)</template>
            <template v-if="player.id == players.length - 1">(last)</template>
          </span>
        </div>
      </div>
    </section>
    <!-- END overlay header: now playing -->

    <!-- START overlay header: now viewing -->
    <section v-if="showportfolio" class="over-nowviewing">
      Now viewing portfolio:
      <em v-if="portfolioId == 0" class="name">Mine</em>
      <em v-else class="name">{{ players[portfolioId].name }}</em>
    </section>
    <section v-else class="over-nowviewing">
      Now viewing:
      <em class="name">my hand</em>
    </section>
    <!-- END overlay header: now viewing -->

    <!-- START overlay main content -->
    <!-- IF portfolio is showing, show portfolio -->
    <div v-if="showportfolio" class="portfolio-container">
      <PlayerPortfolio
        v-bind:wallets="players[portfolioId].cards.portfolio.wallets"
        v-bind:coins="players[portfolioId].cards.portfolio.coins"
      />
    </div>

    <!-- ELSE portfolio is hidden, show hand selection screen -->
    <div v-else>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg feedback="Please choose which card to play" v-bind:show="playedCard === ''" />
        <span
          v-bind:class="playedCard !== '' ? 'button pulsate show' : 'button pulsate'"
          @click="emitPlayedCardAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- card grid -->
      <section class="over-grid">
        <!-- print newly picked up card -->
        <VueImg
          v-bind:imgsrc="newcardurl"
          v-bind:class="playedCard === newcard ? 'newcard card ggrid pulsate' : 'newcard card ggrid'"
          @click="playedCard = newcard"
        />
        <!-- print existing hand cards -->
        <VueImg
          v-for="(card, index) in playingPlayer.cards.hand"
          :key="index"
          v-bind:imgsrc="card + '-grid.png'"
          v-bind:class="playedCard === card ? 'card ggrid pulsate' : 'card ggrid'"
          @click="playedCard = card"
        />
      </section>
    </div>

    <!-- START overlay main content -->
  </aside>
</template>

<script>
import VueImg from './VueImg'
import NotificationMsg from './NotificationMsg'
import PlayerPortfolio from './PlayerPortfolio'

export default {
  name: 'OverlayHandView',
  components: {
    VueImg,
    NotificationMsg,
    PlayerPortfolio,
  },
  props: ['players', 'newcard'],
  emits: ['cardtoplayselected'],
  computed: {
    playingPlayer: function () {
      let arr = this.players.filter((player) => player.isPlaying)
      return arr[0]
    },
    getImgUrl(url) {
      return require('../assets/img/' + url)
    },
    newcardurl: function () {
      return this.newcard + '-grid.png'
    },
    feedbackType: function () {
      // this function selects the right feedback notification series for each
      // move in the game. For the moment it just returns something static.
      return 'selectCardFromHand'
    },
  },
  methods: {
    setPortfolio: function (playerId) {
      this.showportfolio = true
      this.portfolioId = playerId
    },
    unsetPortfolio: function () {
      this.showportfolio = false
      this.portfolioId = -1
    },
    emitPlayedCardAndClose: function () {
      // this function emits an event with the tickers of the played card.
      // than it navigates back to table.
      console.log(this.playedCard)
      this.$emit('cardstogiveupselected', this.playedCard)
      this.$router.push('/table')
      this.playedCard = ''
    },
  },
  data() {
    return {
      showdropdown: false,
      showportfolio: false,
      portfolioId: -1,
      playedCard: '',
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
