<template>
  <span v-bind:class="[isWallet ? 'walletrow row' : 'cardrow row']">
    <PortfolioCard v-if="isWallet" ticker="wallet" />
    <TransitionGroup name="list">
      <PortfolioCard
        v-for="(ticker, index) in coins"
        :key="index"
        v-bind:ticker="ticker"
        @click="emitEvent({ eventtype: 'cardselected', ticker: ticker, index: index })"
      />
    </TransitionGroup>
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
  margin: 6px auto;
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
  margin: 8px 45px 8px -10px;
}

/* .walletrow.row:before {
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
.overlay .walletrow.row:before {
  max-height: calc(9vh + 42px);
}
.walletholder-container .walletrow.row:before {
  box-shadow: none;
} */

.walletrow.row:before {
  content: '';
  background-color: #eee;
  border: solid 1px #ccc;
  display: block;
  width: calc(100% + 25px);
  position: absolute;
  top: -12px;
  height: 90px;
  left: -22px;
  border-radius: 8px;
  max-height: calc(9vh + 14px);
}
.overlay .walletrow.row:before {
  background-color: rgba(220, 220, 220, 0.8);
  max-height: none;
  top: -14px;
  height: 92px;
  left: -28px;
  width: calc(100% + 29px);
}
.walletholder-container .walletrow.row:before {
  background-color: transparent;
  border: none;
}

.walletrow .card:first-child {
  border: none;
  position: relative;
  top: -10px;
  z-index: 0;
}

.list-enter-active {
  border: solid 1px rgb(2, 248, 2);
  transition: all 1s ease;
}
.list-enter-from {
  // border: solid 1px red;
  transition: all 1s ease;
}
</style>
