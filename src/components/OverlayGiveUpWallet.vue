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
      <!-- START:IF only one wallet feedback notifications -->
      <section v-if="affectedplayer.cards.portfolio.wallets.length === 1" class="over-notifications">
        <NotificationMsg feedback="The player only has one wallet to give up" show="true" />
        <br />
        <span class="button pulsate show" @click="emitselectedWalletAndClose">OK</span>
      </section>
      <!-- END:IF only one wallet feedback notifications -->

      <!-- START:ELSE only one wallet feedback notifications -->
      <section v-else class="over-notifications">
        <NotificationMsg feedback="Select a wallet to be given up" v-bind:show="this.selectedWallet === false" />
        <span
          v-bind:class="this.selectedWallet !== false ? 'button pulsate show' : 'button pulsate'"
          @click="emitselectedWalletAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- END:ELSE only one wallet feedback notifications -->

      <!-- print cardholders -->
      <div class="walletholder-container">
        <span
          class="walletholder"
          v-bind:class="{
            selected: selectedWallet !== false,
            deletable: affectedplayer.cards.portfolio.wallets.length !== 1,
          }"
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
      this.$emit('wallettogiveupselected', this.selectedWallet)
      this.$router.push('/table')
      this.selectedWallet = false
      this.selectedWalletCards = []
      this.playerWallets = [...this.affectedplayer.cards.portfolio.wallets]
    },
  },
  data() {
    return {
      selectedWallet: this.affectedplayer.cards.portfolio.wallets.length === 1 ? 0 : false,
      selectedWalletCards:
        this.affectedplayer.cards.portfolio.wallets.length === 1 ? this.affectedplayer.cards.portfolio.wallets[0] : [],
      playerWallets:
        this.affectedplayer.cards.portfolio.wallets.length === 1
          ? []
          : [...this.affectedplayer.cards.portfolio.wallets],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
