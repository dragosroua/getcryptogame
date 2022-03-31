<template>
  <PortfolioCardRow
    v-for="(wallet, index) in wallets"
    :key="index"
    v-bind:coins="wallet"
    isWallet="true"
    @click="emitEvent({ eventtype: 'walletselected', index: index })"
  />
  <PortfolioCardRow v-bind:coins="coins" @cardselected="emitEvent" />
</template>

<script>
import PortfolioCardRow from './PortfolioCardRow'

export default {
  name: 'PlayerPortfolio',
  props: ['wallets', 'coins'],
  emits: ['walletselected', 'cardselected'],
  components: {
    PortfolioCardRow,
  },
  methods: {
    emitEvent: function (event) {
      let eventtype = event.eventtype
      this.$emit(eventtype, event)
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
