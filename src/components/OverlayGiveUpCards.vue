<template>
  <aside class="keys-card-select">
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
    <!-- START:IF there are more than 3 unprotected cards -->
    <div v-if="player.cards.portfolio.coins.length > 3">
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg v-bind:feedback="feedbackMessage" v-bind:show="this.selectedCards.length < 3" />
        <span
          v-bind:class="this.selectedCards.length == 3 ? 'button pulsate show' : 'button pulsate'"
          @click="emitSelectedCardsAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- print cardholders -->
      <div class="cardholder-container">
        <span class="cardholder deletable" v-bind:class="{ selected: selectedCards[0] }" @click="removeSelected(0)">
          <span
            class="cardholder-img"
            v-if="selectedCards[0]"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[0] + '-select.png') + ')',
            }"
          ></span>
        </span>
        <span class="cardholder deletable" v-bind:class="{ selected: selectedCards[1] }" @click="removeSelected(1)">
          <span
            class="cardholder-img"
            v-if="selectedCards[1]"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[1] + '-select.png') + ')',
            }"
          ></span>
        </span>
        <span class="cardholder deletable" v-bind:class="{ selected: selectedCards[2] }" @click="removeSelected(2)">
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
          @cardselected="addSelected"
          @walletselected="feedbackMessage = 'Please select a card that is not part of a wallet'"
        />
      </div>
    </div>
    <!-- END:IF there are more than 3 unprotected cards -->
    <!-- START:ELSE there are less than 3 -->
    <div v-else>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg v-bind:feedback="feedbackMessage" show="true" />
        <br />
        <span class="button pulsate show" @click="emitSelectedCardsAndClose">OK</span>
      </section>
      <!-- print cardholders -->
      <div class="cardholder-container">
        <span v-for="(card, index) in selectedCards" :key="index" class="cardholder selected">
          <span
            class="cardholder-img"
            v-bind:style="{
              'background-image': 'url(' + require('../assets/img/' + selectedCards[index] + '-select.png') + ')',
            }"
          ></span>
        </span>
      </div>
      <!-- print portfolio -->
      <div class="portfolio-container">
        <PortfolioCardRow
          v-for="(wallet, index) in player.cards.portfolio.wallets"
          :key="index"
          v-bind:coins="wallet"
          isWallet="true"
        />
      </div>
    </div>
    <!-- END:ELSE there are less than 3 -->

    <!-- START overlay main content -->
  </aside>
</template>

<script>
import PlayerPortfolio from './PlayerPortfolio'
import NotificationMsg from './NotificationMsg'
import PortfolioCardRow from './PortfolioCardRow'

export default {
  name: 'OverlayGiveUpCards',
  components: {
    PlayerPortfolio,
    NotificationMsg,
    PortfolioCardRow,
  },
  props: ['player'],
  emits: ['cardstogiveupselected'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.player.avatar)
    },
    feedbackMessage() {
      let length = this.player.cards.portfolio.coins.length
      let msg = 'Please choose which cards to give up'
      if (length <= 3) {
        let plural = length > 1 ? 's' : ''
        msg = 'You only have ' + length + ' unprotected card' + plural + ' to lose'
      }
      return msg
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
      this.$emit('cardstogiveupselected', this.selectedCards)
      this.$router.push('/table')
      this.selectedCards = []
      this.playerCoins = [...this.player.cards.portfolio.coins]
    },
  },
  data() {
    return {
      selectedCards: this.player.cards.portfolio.coins.length <= 3 ? this.player.cards.portfolio.coins : [],
      playerCoins: [...this.player.cards.portfolio.coins],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
