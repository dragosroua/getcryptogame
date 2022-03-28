<template>
  <aside class="seed-wallet-select">
    <!-- START overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <img v-bind:src="getImgUrl" class="pic" />
      <em class="name">{{ playingplayer.name }}</em>
    </section>
    <!-- END overlay header: now playing -->

    <!-- START overlay header: now viewing -->
    <section class="over-nowviewing">
      Now viewing portfolio:
      <em class="name">{{ affectedplayer.name }}</em>
    </section>
    <!-- END overlay header: now viewing -->

    <!-- START overlay main content -->
    <div>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg v-bind:feedback="feedbackMessage" v-bind:show="this.selectedWallet.length < 3" />
        <span
          v-bind:class="this.selectedWallet.length == 3 ? 'button pulsate show' : 'button pulsate'"
          @click="emitselectedWalletAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- print cardholders -->
      <div class="walletholder-container">
        <span
          class="walletholder deletable selected"
          v-bind:class="{ selected: selectedWallet }"
          @click="removeSelected"
        >
          <PortfolioCardRow v-if="selectedWalletCards.length > 0" v-bind:coins="selectedWalletCards" isWallet="true" />
        </span>
      </div>
      <!-- print portfolio -->
      <div class="portfolio-container">
        <PlayerPortfolio
          v-bind:wallets="playerWallets"
          v-bind:coins="affectedplayer.cards.portfolio.coins"
          @cardselected="addSelected"
          @walletselected="addSelected"
        />
      </div>
    </div>

    <!-- START overlay main content -->
  </aside>
</template>

<script>
import PlayerPortfolio from './PlayerPortfolio'
import NotificationMsg from './NotificationMsg'
import PortfolioCardRow from './PortfolioCardRow'

export default {
  name: 'OverlayGiveUpWallet',
  components: {
    PlayerPortfolio,
    NotificationMsg,
    PortfolioCardRow,
  },
  props: ['playingplayer', 'affectedplayer'],
  emits: ['wallettogiveupselected'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.playingplayer.avatar)
    },
    feedbackMessage() {
      let length = this.affectedplayer.cards.portfolio.wallets.length
      let msg = 'Please choose which wallet has to be given up'
      if (length == 1) {
        msg = 'The player has only one wallet'
      }
      return msg
    },
  },
  methods: {
    addSelected: function (event) {
      console.log(event)
      if (this.selectedWallet === false) {
        this.selectedWallet = event.index
        this.selectedWalletCards = this.playerWallets[event.index]
        this.playerWallets.splice(event.index, 1)
      }
    },
    removeSelected: function () {
      console.log(this.selectedWallet)
      if (this.selectedWallet !== false) {
        this.playerWallets.splice(this.selectedWallet, 0, this.selectedWalletCards)
        this.selectedWalletCards = []
        this.selectedWallet = false
      }
    },
    emitselectedWalletAndClose: function () {
      // this function emits an event with the array of the tickers of the selected cards.
      // than it navigates back to table.
      console.log(this.selectedWallet)
      this.$emit('cardstogiveupselected', this.selectedWallet)
      this.$router.push('/table')
      this.selectedWallet = false
      this.selectedWalletCards = []
      this.playerWallets = [...this.affectedplayer.cards.portfolio.wallets]
    },
  },
  data() {
    return {
      selectedWallet:
        this.affectedplayer.cards.portfolio.wallets.length == 1 ? this.affectedplayer.cards.portfolio.wallets : false,
      selectedWalletCards: [],
      playerWallets: [...this.affectedplayer.cards.portfolio.wallets],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
