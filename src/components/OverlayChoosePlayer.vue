<template>
  <aside class="select-player-view">
    <!-- START overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <img v-bind:src="getImgUrl" class="pic" />
      <em class="name">{{ player.name }}</em>

      <!-- IF portfolio is showing, show back button -->
      <div v-if="showportfolio" class="portfolio-viewer">
        <span class="button show" @click="unsetPortfolio"> Back </span>
      </div>
    </section>
    <!-- END overlay header: now playing -->

    <!-- START overlay header: now viewing -->
    <section v-if="showportfolio" class="over-nowviewing">
      Now viewing portfolio:
      <em v-if="portfolioplayer.id == 0" class="name">Mine</em>
      <em v-else class="name">{{ portfolioplayer.name }}</em>
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
        v-bind:wallets="portfolioplayer.cards.portfolio.wallets"
        v-bind:coins="portfolioplayer.cards.portfolio.coins"
      />
    </div>

    <!-- ELSE portfolio is hidden, show player selection screen -->
    <div v-else>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg show="true" feedback="Please choose the affected player:" />
        <div class="button-container">
          <span
            v-bind:class="selectedPlayerId > -1 ? 'button pulsate show' : 'button pulsate'"
            @click="emitSelectedPlayerAndClose"
            >Confirm choice</span
          >
        </div>
      </section>
      <!-- print played card -->
      <section class="player-selection">
        <div class="player-container" @click="selectedPlayerId = parseInt(this.lastplayer.id)">
          <div class="player-info" v-bind:class="selectedPlayerId === lastplayer.id ? 'selected' : ''">
            <span>Last player:</span><br />
            <em class="name">{{ lastplayer.name }}</em
            ><br />
            <VueImg v-bind:imgsrc="lastplayer.avatar" class="pic" /><br />
          </div>
        </div>
        <div class="player-container" @click="selectedPlayerId = parseInt(this.nextplayer.id)">
          <div class="player-info" v-bind:class="selectedPlayerId === nextplayer.id ? 'selected' : ''">
            <span>Next player:</span><br />
            <em class="name">{{ nextplayer.name }}</em
            ><br />
            <VueImg v-bind:imgsrc="nextplayer.avatar" class="pic" /><br />
          </div>
        </div>
        <div class="button-container">
          <div class="player-container">
            <span @click="setPortfolio(lastplayer)" class="button show">View portfolio</span>
          </div>
          <div class="player-container">
            <span @click="setPortfolio(nextplayer)" class="button show">View portfolio</span>
          </div>
        </div>
      </section>
    </div>
  </aside>
</template>

<script>
import VueImg from './VueImg'
import NotificationMsg from './NotificationMsg'
import PlayerPortfolio from './PlayerPortfolio'

export default {
  name: 'OverlayChoosePlayer',
  components: {
    VueImg,
    NotificationMsg,
    PlayerPortfolio,
  },
  props: ['player', 'lastplayer', 'nextplayer'],
  emits: ['affectedplayerselected'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.player.avatar)
    },
  },
  methods: {
    setPortfolio: function (player) {
      this.showportfolio = true
      this.portfolioplayer = player
    },
    unsetPortfolio: function () {
      this.showportfolio = false
      this.portfolioplayer = null
    },
    emitSelectedPlayerAndClose: function () {
      // this function emits an event with the id of the selected player.
      // than it navigates back to table.
      this.$emit('affectedplayerselected', this.selectedPlayerId)
      this.$router.push('/table')
      this.selectedPlayerId = -1
    },
  },
  data() {
    return {
      showportfolio: false,
      portfolioplayer: null,
      selectedPlayerId: -1,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
