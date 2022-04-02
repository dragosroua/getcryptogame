<template>
  <div v-bind:class="'table-tag player--' + player">
    <span class="stats">
      <div class="info">
        <img v-bind:src="getImgUrl" class="pic" />
        <em class="name"> {{ name }}</em>
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
    </span>
  </div>
</template>

<script>
export default {
  name: 'PlayerTag',
  props: ['player', 'name', 'img', 'avatar', 'total', 'wallettotal', 'lowestcoins'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.avatar)
    },
  },
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.stats {
  background-color: #9e93ff;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: inline-block;
  position: relative;
}

.info .pic {
  border-radius: 50%;
  height: auto;
  vertical-align: middle;
  width: 25px;
  position: relative;
}

.info .name {
  display: none;
}

.info .coins .coin {
  background-color: #9e93ff;
  border-radius: 10px;
  border: 1px solid #000;
  display: inline-block;
  line-height: 1.4;
  padding: 0 7px;
}

.info .walletcontainer {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  padding: 5px;
  margin: 10px 0px;
}

.info .wallettotal {
  color: #fff;
  position: relative;
  bottom: 1px;
  margin-right: 0px;
  background-color: #000;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 20px;
  border-radius: 4px;
}

.info .wallettotal:before {
  content: '';
  display: block;
  height: 20px;
  position: relative;
  top: -14px;
  width: 8px;
  border: solid 2px #000;
  border-radius: 5px;
  left: -1px;
}

.info .wallettext {
  height: 22px;
  line-height: 1;
  display: block;
  vertical-align: middle;
  position: relative;
  top: -29px;
  left: -6px;
  text-align: center;
  width: 22px;
}

.table-tag {
  overflow: hidden;
  position: absolute;
  text-align: center;
  z-index: 1;
}

//position specific styles with mixins

@mixin player-tag--horizontal {
  height: 50px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  .info {
    margin: 7px 10px;
  }
  .info .pic {
    margin-top: -6px;
  }
  .info .walletcontainer {
    margin-right: -7px;
  }
  .info .coins {
    padding: 0 0 0 15px;
    .coin {
      margin-left: -6px;
    }
  }
  .info .total:after {
    border-right: 1px solid #000;
    content: '';
    height: 90%;
    padding: 0 4px;
    vertical-align: middle;
  }
}

@mixin player-tag--vertical {
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  margin-top: -100px;
  top: 50%;
  width: 50px;
  .info {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 95%;
    padding: 3px 5px;
  }
  .info .pic {
    margin-top: 6px;
  }
  .info .total {
    border-bottom: 1px solid #000;
    line-height: 1;
    text-align: center;
    width: 80%;
    padding: 2px 0 4px;
  }
  .info .walletcontainer {
    margin-bottom: 7px;
  }
  .info .coins {
    margin: 0 2px;
    padding: 0 0 7px 1px;
    .coin {
      margin-top: -6px;
      padding: 3px 7px;
      display: block;
      line-height: 1;
    }
  }
}

@mixin player-tag--bottom {
  @include player-tag--horizontal;
  margin-left: -200px;
  margin-left: max(-63vw, -200px);
  bottom: 0;
  text-align: right;
  .stats {
    bottom: -13px;
    padding-bottom: 5px;
    .info {
      margin-top: 1px;
    }
  }
}
@mixin player-tag--top {
  top: 0;
  @include player-tag--horizontal;
  .stats {
    top: -17px;
    padding-top: 5px;
    .info {
      margin: 10px 10px -9px;
    }
  }
}
@mixin player-tag--left {
  left: 0;
  @include player-tag--vertical;
  .stats {
    left: -12px;
    padding-left: 5px;
    .info {
      padding-left: 10px;
    }
  }
}
@mixin player-tag--right {
  right: 0;
  @include player-tag--vertical;
  .stats {
    right: -12px;
    padding-right: 6px;
    .info {
      padding-right: 10px;
    }
  }
}
@mixin player-tag--left-top {
  @include player-tag--left;
  margin-top: -200px;
}
@mixin player-tag--left-bottom {
  @include player-tag--left;
  margin-top: 0;
}
@mixin player-tag--right-top {
  @include player-tag--right;
  margin-top: -200px;
}
@mixin player-tag--right-bottom {
  @include player-tag--right;
  margin-top: 0;
}

.table-tag.player--1 {
  @include player-tag--bottom;
}
.player-count--2 .table-tag.player--2,
.player-count--4 .table-tag.player--3,
.player-count--6 .table-tag.player--4 {
  @include player-tag--top;
}
.player-count--3 .table-tag.player--2,
.player-count--4 .table-tag.player--2 {
  @include player-tag--right;
}
.player-count--5 .table-tag.player--2,
.player-count--6 .table-tag.player--2 {
  @include player-tag--right-bottom;
}
.player-count--5 .table-tag.player--3,
.player-count--6 .table-tag.player--3 {
  @include player-tag--right-top;
}
.player-count--3 .table-tag.player--3,
.player-count--4 .table-tag.player--4 {
  @include player-tag--left;
}
.player-count--5 .table-tag.player--4,
.player-count--6 .table-tag.player--5 {
  @include player-tag--left-top;
}
.player-count--5 .table-tag.player--5,
.player-count--6 .table-tag.player--6 {
  @include player-tag--left-bottom;
}
</style>
