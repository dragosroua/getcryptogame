<template>
  <aside class="round2">
    <!-- overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <em class="name">{{ playingPlayer.name }}</em>

      <div v-if="showportfolio" class="portfolio-viewer">
        <span
          class="button show"
          @click="
            showportfolio = false
            portfolioId = -1
          "
          >Back</span
        >
      </div>

      <!-- portfolio viewer dropdown -->
      <div v-else class="portfolio-viewer">
        <span @click="showdropdown = !showdropdown" class="button show">View portfolio</span>
        <div
          v-show="showdropdown"
          v-bind:class="showdropdown ? 'dropdown show' : 'dropdown'"
          @click="showdropdown = false"
        >
          <span
            class="dropdown-button"
            @click="
              showportfolio = true
              portfolioId = 0
            "
          >
            Me
          </span>
          <span
            v-for="player in players.filter((player) => !player.isPlaying)"
            :key="player.id"
            class="dropdown-button others"
            @click="
              showportfolio = true
              portfolioId = player.id
            "
          >
            {{ player.name }}
            <template v-if="player.id == 1">(next)</template>
            <template v-if="player.id == players.length - 1">(last)</template>
          </span>
        </div>
      </div>

      <!-- portfolio viewer back button -->
    </section>

    <!-- overlay header: now viewing -->
    <section v-if="showportfolio" class="over-nowviewing">
      Now viewing portfolio:
      <em v-if="portfolioId == 0" class="name">Mine</em>
      <em v-else class="name">{{ players[portfolioId].name }}</em>
    </section>
    <section v-else class="over-nowviewing">
      Now viewing:
      <em class="name">my hand</em>
    </section>

    <!-- overlay main content -->
    <div v-if="showportfolio" class="portfolio">
      <PlayerPortfolio
        v-bind:wallets="players[portfolioId].cards.portfolio.wallets"
        v-bind:coins="players[portfolioId].cards.portfolio.coins"
      />
    </div>

    <div v-else>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <FeedbackNotifications v-bind:feedback="feedbackType" />
      </section>
      <!-- card grid -->
      <section class="over-grid">
        <!-- print newly picked up card -->
        <VueImg
          v-bind:imgsrc="newcardurl"
          imgclasses="card ggrid newcard"
          imgonclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
        />
        <!-- print existing hand cards -->
        <VueImg
          v-for="(card, index) in playingPlayer.cards.hand"
          :key="index"
          v-bind:imgsrc="card + '-grid.png'"
          imgclasses="card ggrid"
          imgonclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
        />
      </section>
    </div>
  </aside>
</template>

<script>
import VueImg from './VueImg'
import FeedbackNotifications from './FeedbackNotifications'
import PlayerPortfolio from './PlayerPortfolio'

export default {
  name: 'OverlayHandView',
  components: {
    VueImg,
    FeedbackNotifications,
    PlayerPortfolio,
  },
  props: ['players', 'newcard'],
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
  data() {
    return {
      showdropdown: false,
      showportfolio: false,
      portfolioId: -1,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/overlay';
</style>
