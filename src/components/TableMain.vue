<template>
  <div class="table-container player-count--4">
    <!-- this is going to be a loop that reads the player 
      array starting with the "isMe"-player and all the others 
      counter-clockwise from there -->

    <div class="table-tag player--1">
      <PlayerTag name="Natalia" total="15" walletTotal="5" />
    </div>
    <div class="table-tag player--2">
      <PlayerTag name="Ron" total="80" walletTotal="20" />
    </div>
    <div class="table-tag player--3">
      <PlayerTag name="Ron" total="8" walletTotal="0" />
    </div>
    <div class="table-tag player--4">
      <PlayerTag name="Ron" total="8" walletTotal="2" />
    </div>
    <div class="table-tag player--5">
      <PlayerTag name="Ron" total="8" walletTotal="0" />
    </div>
    <div class="table-tag player--6">
      <PlayerTag name="Ron" total="8" walletTotal="0" />
    </div>

    <div id="stack" class="stack">
      <div class="notification-container">
        <span class="round1">
          <span id="notifi-round1-1" class="notifications">It's Natalia's turn</span>
          <span id="notifi-round1-2" class="notifications">Natalia is picking up an event card</span>
          <span id="notifi-round1-3" class="notifications">Waiting for Natalia to select a card to play</span>
        </span>
        <span class="round2">
          <span id="notifi-round2-1" class="notifications">It's your turn, please pick up an event card</span>
          <span id="notifi-round2-2" class="notifications">You redeem 3 coin cards</span>
          <span id="notifi-round2-2-2" class="notifications">You redeem 1 coin card</span>
        </span>
        <span class="round3">
          <span id="notifi-round3-1" class="notifications">It's Ron's turn</span>
          <span id="notifi-round3-2" class="notifications">Ron is picking up an event card</span>
          <span id="notifi-round3-3" class="notifications">Waiting for Ron to select a card to play</span>
          <span id="notifi-round3-4" class="notifications">Ron redeems 1 coin card</span>
        </span>
        <span class="round4">
          <span id="notifi-round4-1" class="notifications">It's Andrea's turn</span>
          <span id="notifi-round4-2" class="notifications">Andrea is picking up an event card</span>
          <span id="notifi-round4-3" class="notifications">Waiting for Andrea to select a card to play</span>
          <span id="notifi-round4-4" class="notifications">Andrea redeems 1 coin card</span>
        </span>
        <span class="round5">
          <span id="notifi-round5-1" class="notifications">It's Natalia's turn</span>
          <span id="notifi-round5-2" class="notifications">Natalia is picking up an event card</span>
          <span id="notifi-round5-3" class="notifications">Waiting for Natalia to select a card to play</span>
          <span id="notifi-round5-4" class="notifications">Natalia redeems 1 coin card</span>
        </span>
      </div>
      <img src="../assets/img/anverso-questions.png" class="card" id="questionstack" />
      <img src="../assets/img/anverso-coins.png" class="card" id="cardstack" />
      <div class="cardstack" id="cardstack-ani">
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
        <img src="../assets/img/anverso-coins.png" class="card" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerTag from './PlayerTag'

let coins = [3, 1, 1]

export default {
  name: 'TableMain',
  data() {
    return {}
  },
  components: {
    PlayerTag,
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/table';

.table-container {
  height: $tableheight;
  position: relative;
  top: $appheaderheight;
  width: 100vw;
}

.table-tag {
  overflow: hidden;
  position: absolute;
  text-align: center;
}

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
  bottom: 0;
  @include player-tag--horizontal;
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
}
@mixin player-tag--left-bottom {
}
@mixin player-tag--right-top {
}
@mixin player-tag--right-bottom {
}

.player-count--2 {
  .player--1 {
    @include player-tag--bottom;
  }
  .player--2 {
    @include player-tag--top;
  }
  .player--3,
  .player--4,
  .player--5,
  .player--6 {
    display: none;
  }
}
.player-count--3 {
  .player--1 {
    @include player-tag--bottom;
  }
  .player--2 {
    @include player-tag--right;
  }
  .player--3 {
    @include player-tag--left;
  }
  .player--4,
  .player--5,
  .player--6 {
    display: none;
  }
}

.player-count--4 {
  .player--1 {
    @include player-tag--bottom;
  }
  .player--2 {
    @include player-tag--right;
  }
  .player--3 {
    @include player-tag--top;
  }
  .player--4 {
    @include player-tag--left;
  }
  .player--5,
  .player--6 {
    display: none;
  }
}
</style>
