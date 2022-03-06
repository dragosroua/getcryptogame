<template>
  <div class="portfolio-container">
    <div v-bind:class="'portfolio player--' + player">
      <div class="info">
        <img v-bind:src="getImgUrl" class="pic" />
        <em class="name"> {{ name }} </em>
        <em class="total">
          {{ total }}
        </em>
        <!--this needs to be conditional on wallettoal -->
        <span class="walletcontainer">
          <em class="wallettotal">
            <span class="wallettext">{{ wallettotal }}</span>
          </em>
        </span>
        <!--this needs to be conditional on lowestcoins -->
        <span class="coins">
          <em v-for="(coinvalue, index) in lowestcoins" :key="index" class="coin">{{ coinvalue }}</em>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerPortfolio',
  props: ['player', 'name', 'avatar', 'total', 'wallettotal', 'lowestcoins', 'cards'],
  components: {},
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.avatar)
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.portfolio-container {
  overflow: hidden;
  padding: 10px;
  position: relative;
  height: 100%;
  width: 100%;
}

.portfolio {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 40%);
  box-sizing: border-box;
  height: 45%;
  padding: 10px 30px 30px 70px;
  position: absolute;
  text-align: left;
  width: 100%;
}

.portfolio .info {
  margin: 5px 0 15px -25px;
}
.player-count--2 .portfolio.player--2,
.player-count--4 .portfolio.player--3,
.player-count--6 .portfolio.player--4 {
  .info {
    margin: 25px 0 10px -25px;
  }
}

.portfolio .info .total {
  border-bottom: none;
  border-right: solid 1px #000;
  padding: 0px 4px;
}

.portfolio .info .walletcontainer {
  margin: 8px 9px 10px 2px;
}

.portfolio .info .coins .coin {
  display: inline;
  margin-left: -8px;
  padding: 0 7px;
}

.portfolio .info .coin {
  background-color: #f5f5f5;
}

.portfolio .card {
  margin-left: -25px;
  position: relative;
}

.portfolio .card.wallet {
  top: -10px;
  position: relative;
  z-index: 0;
}

.portfolio .row.ronwallet {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 10px 0 0 25px;
  margin: -10px 0 0 -25px;
}
.portfolio .row.ronwallet.show {
  max-height: 100px;
  opacity: 1;
  transition: max-height 0.6s 0s ease-out, opacity 0.3s 0.3s ease-out;
}

@mixin player-portfolio--bottom {
  bottom: -15px;
  width: calc(100% - 20px);
}
@mixin player-portfolio--right {
  right: -15px;
  top: 20px;
}
@mixin player-portfolio--right-bottom {
  bottom: 20px;
  right: -15px;
}
@mixin player-portfolio--right-top {
  right: -15px;
  top: 20px;
}
@mixin player-portfolio--top {
  top: -25px;
  width: calc(100% - 20px);
}
@mixin player-portfolio--left {
  left: -15px;
  top: 20px;
}
@mixin player-portfolio--left-top {
  left: -15px;
  top: 20px;
}
@mixin player-portfolio--left-bottom {
  bottom: 45px;
  left: -25px;
}

.portfolio.player--1 {
  @include player-portfolio--bottom;
}
.player-count--2 .portfolio.player--2,
.player-count--4 .portfolio.player--3,
.player-count--6 .portfolio.player--4 {
  @include player-portfolio--top;
}
.player-count--3 .portfolio.player--2,
.player-count--4 .portfolio.player--2 {
  @include player-portfolio--right;
}
.player-count--5 .portfolio.player--2,
.player-count--6 .portfolio.player--2 {
  @include player-portfolio--right-bottom;
}
.player-count--5 .portfolio.player--3,
.player-count--6 .portfolio.player--3 {
  @include player-portfolio--right-top;
}
.player-count--3 .portfolio.player--3,
.player-count--4 .portfolio.player--4 {
  @include player-portfolio--left;
}
.player-count--5 .portfolio.player--4,
.player-count--6 .portfolio.player--5 {
  @include player-portfolio--left-top;
}
.player-count--5 .portfolio.player--5,
.player-count--6 .portfolio.player--6 {
  @include player-portfolio--left-bottom;
}
</style>
