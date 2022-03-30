<template>
  <aside class="card-wallet-save">
    <!-- START overlay header: now playing -->
    <section v-if="affectedplayer.isPlaying === true" class="over-nowplaying">
      Now playing:
      <em class="name">Me</em>
    </section>
    <section v-else class="over-nowplaying">
      Now playing:
      <img v-bind:src="getImgUrl" class="pic" />
      <em class="name">{{ playingplayer.name }}</em>
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
      <!-- START:IF one or no wallet feedback notifications -->
      <section
        v-if="affectedplayer.cards.portfolio.wallets.length <= 1 || affectedplayer.isPlaying === true"
        class="over-notifications"
      >
        <NotificationMsg feedback="Add a new card to your wallet" v-bind:show="selectedCard === ''" />
        <span
          v-bind:class="selectedWallet >= 0 && selectedCard !== '' ? 'button pulsate show' : 'button pulsate'"
          @click="emitselectedWalletAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- END:IF only one wallet feedback notifications -->

      <!-- START:ELSE more than one wallet feedback notifications -->
      <section v-else class="over-notifications">
        <NotificationMsg
          feedback="Select a wallet and a card to add"
          v-bind:show="selectedWallet < 0 || selectedCard === ''"
        />
        <span
          v-bind:class="selectedWallet >= 0 && selectedCard !== '' ? 'button pulsate show' : 'button pulsate'"
          @click="emitselectedWalletAndClose"
          >Confirm choice</span
        >
      </section>
      <!-- END:ELSE only one wallet feedback notifications -->

      <div class="double-slection-container">
        <!-- print wallet holder -->
        <div class="walletholder-container">
          <span
            class="walletholder"
            v-bind:class="{
              selected: selectedWallet >= 0,
              deletable: affectedplayer.cards.portfolio.wallets.length > 1,
            }"
            @click="removeSelected('wallet')"
          >
            <PortfolioCardRow
              v-if="selectedWallet >= 0"
              v-bind:coins="affectedplayer.cards.portfolio.wallets[selectedWallet]"
              isWallet="true"
            />
          </span>
        </div>
        <!-- print cardholders -->
        <div class="cardholder-container">
          <span
            class="cardholder selected"
            v-bind:class="{ deletable: selectedCard !== '' }"
            @click="removeSelected('card')"
          >
            <span
              class="cardholder-img"
              v-if="selectedCard !== ''"
              v-bind:style="{
                'background-image': 'url(' + require('../assets/img/' + selectedCard + '-select.png') + ')',
              }"
            ></span>
          </span>
        </div>
      </div>
      <!-- print portfolio -->
      <div class="portfolio-container">
        <PlayerPortfolio
          v-bind:wallets="playerWallets"
          v-bind:coins="playerCoins"
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
  name: 'OverlaySaveCardToWallet',
  components: {
    PlayerPortfolio,
    NotificationMsg,
    PortfolioCardRow,
  },
  props: ['playingplayer', 'affectedplayer'],
  emits: ['cardsavedtowallet'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.playingplayer.avatar)
    },
  },
  methods: {
    addSelected: function (event) {
      console.log(event)
      // if (this.selectedWallet < 0) {
      if (event.eventtype === 'walletselected') {
        this.selectedWallet = event.index
        this.selectedWalletCards = this.playerWallets[event.index]
        this.playerWallets.splice(event.index, 1)
      }
      if (event.eventtype === 'cardselected') {
        this.selectedCard = event.ticker
        this.playerCoins.splice(event.index, 1)
      }
    },
    removeSelected: function (type) {
      console.log(type)
      if (type === 'wallet' && this.selectedWallet >= 0) {
        this.playerWallets.splice(this.selectedWallet, 0, this.selectedWalletCards)
        this.selectedWalletCards = []
        this.selectedWallet = -1
      }
      if (type === 'card' && this.selectedCard !== '') {
        this.playerCoins.push(this.selectedCard)
        this.selectedCard = ''
      }
    },
    emitselectedWalletAndClose: function () {
      // this function emits an event with the array of the tickers of the selected cards.
      // than it navigates back to table.
      this.selectedWalletCards.push(this.selectedCard)
      console.log(this.selectedWalletCards)
      this.$emit('cardsavedtowallet', this.selectedWallet, this.selectedWalletCards)
      this.$router.push('/table')
      this.selectedCard = ''
      this.selectedWallet = -1
      this.selectedWalletCards = []
      // these need to receive the updated version of the player array, maybe set them in onmount?
      this.playerWallets = [...this.affectedplayer.cards.portfolio.wallets]
      this.playerCoins = [...this.affectedplayer.cards.portfolio.coins]
    },
  },
  data() {
    return {
      selectedWallet: this.affectedplayer.cards.portfolio.wallets.length <= 1 ? 0 : -1,
      selectedWalletCards:
        this.affectedplayer.cards.portfolio.wallets.length === 1 ? this.affectedplayer.cards.portfolio.wallets[0] : [],
      playerWallets:
        this.affectedplayer.cards.portfolio.wallets.length === 1
          ? []
          : [...this.affectedplayer.cards.portfolio.wallets],
      selectedCard: '',
      playerCoins: [...this.affectedplayer.cards.portfolio.coins],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
