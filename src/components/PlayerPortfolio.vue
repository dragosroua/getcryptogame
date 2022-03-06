<template>
  <div class="portfolio-container">
    <div v-bind:class="'portfolio player--' + player">Portfolio</div>
  </div>
</template>

<script>
export default {
  name: 'PlayerPortfolio',
  props: ['player', 'cards'],
  components: {},
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
.top .portfolio {
  height: 60%;
  top: -10px;
  /* width: calc(100% - 30px);
    left: 15px; */
}
.right .portfolio,
.left .portfolio {
  height: 60%;
  padding-top: 40px;
}
.right .portfolio {
  padding-left: 85px;
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
  left: 45px;
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
