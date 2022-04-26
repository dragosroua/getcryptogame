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
  @media (max-width: 400px) {
    margin-left: -10px;
  }
}

.row .card {
  margin-left: -25px;
  position: relative;
  @media (max-width: 400px) {
    margin-left: -20px;
  }
}

.row img.card {
  box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 40%);
}

.walletrow {
  margin-right: 45px;
}

.walletrow.row:before {
  content: '';
  display: block;
  width: calc(100% + 37px);
  position: absolute;
  top: -17px;
  height: 104px;
  left: -30px;
  border-radius: 8px;
  max-height: calc(9vh + 25px);
  box-shadow: inset 0px 0px 7px 0px rgb(0 0 0 / 30%);
}

.walletrow .card:first-child {
  border: none;
  position: relative;
  top: -10px;
  z-index: 0;
}
</style>
