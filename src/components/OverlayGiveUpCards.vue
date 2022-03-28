<template>
  <aside class="hand-view-select">
    <!-- START overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <img v-bind:src="getImgUrl" class="pic" />
      <em class="name">{{ player.name }}</em>
    </section>
    <!-- END overlay header: now playing -->

    <!-- START overlay header: now viewing -->
    <section class="over-nowviewing">
      Now viewing portfolio:
      <em class="name">Mine</em>
    </section>
    <!-- END overlay header: now viewing -->

    <!-- START overlay main content -->
    <div>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg feedback="Please choose which cards to give up" v-bind:show="this.selectedCards.length < 3" />
        <span
          v-bind:class="this.selectedCards.length == 3 ? 'button pulsate show' : 'button pulsate'"
          @click="emitSelectedCardsAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- print cardholders -->
      <div class="cardholder-container">
        <span class="cardholder" v-bind:class="{ selected: selectedCards[0] }" @click="removeSelected(0)">
          <span
            class="cardholder-img"
            v-if="selectedCards[0]"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[0] + '-select.png') + ')',
            }"
          ></span>
        </span>
        <span class="cardholder" v-bind:class="{ selected: selectedCards[1] }" @click="removeSelected(1)">
          <span
            class="cardholder-img"
            v-if="selectedCards[1]"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[1] + '-select.png') + ')',
            }"
          ></span>
        </span>
        <span class="cardholder" v-bind:class="{ selected: selectedCards[2] }" @click="removeSelected(2)">
          <span
            class="cardholder-img"
            v-if="selectedCards[2]"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[2] + '-select.png') + ')',
            }"
          ></span>
        </span>
      </div>
      <!-- print portfolio -->
      <div class="portfolio-container">
        <PlayerPortfolio
          v-bind:wallets="player.cards.portfolio.wallets"
          v-bind:coins="playerCoins"
          emits="cardselected"
          @cardselected="addSelected"
        />
      </div>
    </div>

    <!-- START overlay main content -->
  </aside>
</template>

<script>
import PlayerPortfolio from './PlayerPortfolio'
import NotificationMsg from './NotificationMsg'

export default {
  name: 'OverlayGiveUpCards',
  components: {
    PlayerPortfolio,
    NotificationMsg,
  },
  props: ['player', 'card'],
  emits: ['cardstogiveupselected'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.player.avatar)
    },
  },
  methods: {
    addSelected: function (event) {
      if (this.selectedCards.length < 3) {
        this.selectedCards.push(event.ticker)
        this.playerCoins.splice(event.index, 1)
      }
    },
    removeSelected: function (cardId) {
      if (this.selectedCards[cardId]) {
        this.playerCoins.push(this.selectedCards[cardId])
        this.selectedCards.splice(cardId, 1)
      }
    },
    emitSelectedCardsAndClose: function () {
      // this function emits an event with the array of the tickers of the selected cards.
      // than it navigates back to table.
      console.log(this.selectedCards)
      this.$emit('cardstogiveupselected', this.selectedCards)
      this.$router.push('/table')
      this.selectedCards = []
      this.playerCoins = [...this.player.cards.portfolio.coins]
    },
  },
  data() {
    return {
      selectedCards: [],
      playerCoins: [...this.player.cards.portfolio.coins],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
