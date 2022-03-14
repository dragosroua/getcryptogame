<template>
  <PortfolioCardRow v-for="(wallet, index) in wallets" :key="index" v-bind:coins="wallet" isWallet="true" />
  <PortfolioCardRow v-bind:coins="coins" />
</template>

<script>
import PortfolioCardRow from './PortfolioCardRow'

export default {
  name: 'PlayerPortfolio',
  props: ['wallets', 'coins'],
  components: {
    PortfolioCardRow,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
