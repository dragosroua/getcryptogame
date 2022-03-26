<template>
  <span v-bind:class="[isWallet ? 'walletrow row' : 'cardrow row']">
    <PortfolioCard v-if="isWallet" ticker="wallet" />
    <PortfolioCard
      v-for="(ticker, index) in coins"
      :key="index"
      v-bind:ticker="ticker"
      @click="emitEvent({ eventtype: 'cardselected', ticker: ticker, index: index })"
    />
  </span>
</template>

<script>
import PortfolioCard from './PortfolioCard'

export default {
  name: 'PortfolioCardRow',
  props: ['coins', 'isWallet'],
  components: {
    PortfolioCard,
  },
  emits: ['cardselected'],
  methods: {
    emitEvent: function (payload) {
      if (!this.isWallet) {
        this.$emit('cardselected', payload)
      }
    },
  },
  data() {
    return {
      walletclass: 'walletrow row',
      coinclass: 'coinrow row',
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.row {
  display: inline-block;
  margin: 0.75vh auto;
  position: relative;
}

.row .card {
  margin-left: -25px;
  position: relative;
}

.walletrow {
  margin-right: 45px;
}

.walletrow img.card {
  border: solid 2px #11de70;
}

.walletrow .card:first-child {
  border: none;
  position: relative;
  top: -10px;
  z-index: 0;
}
</style>
