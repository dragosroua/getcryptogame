<template>
  <div class="stack" v-bind:class="animation">
    <img src="../assets/img/anverso-questions.png" class="card" />
    <img src="../assets/img/anverso-coins.png" class="card" />
    <div class="cardstack">
      <img src="../assets/img/anverso-coins.png" class="card" />
      <img src="../assets/img/anverso-coins.png" class="card" />
      <img src="../assets/img/anverso-coins.png" class="card" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStack',
  props: ['animation'],
  computed: {},
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.stack {
  left: 50%;
  margin-left: -45vw;
  position: fixed;
  top: calc(85% - 200px);
  width: 90vw;
  z-index: 1; // necessary for coin animations
  @media (max-height: 600px) {
    top: calc(85% - 160px);
  }
}

.stack img,
.stack .cardstack {
  height: 48vw;
  margin: 0 1vw;
  max-height: 25vh;
  width: auto;
}

.isplaying--1 .stack,
.player-count--5.isplaying--2 .stack,
.player-count--6.isplaying--2 .stack,
.player-count--5.isplaying--5 .stack,
.player-count--6.isplaying--6 .stack {
  top: calc(8vh + 80px);
  img,
  .cardstack {
    @media (max-height: 640px) {
      max-height: 24vh;
    }
  }
}

.player-count--2.isplaying--2 .stack,
.player-count--3.isplaying--2 .stack,
.player-count--3.isplaying--3 .stack,
.player-count--4.isplaying--2 .stack,
.player-count--4.isplaying--3 .stack,
.player-count--4.isplaying--4 .stack,
.player-count--5.isplaying--3 .stack,
.player-count--5.isplaying--4 .stack,
.player-count--6.isplaying--4 .stack,
.player-count--6.isplaying--3 .stack,
.player-count--6.isplaying--5 .stack {
  top: auto;
  bottom: calc(4vh + 40px);
  img,
  .cardstack {
    @media (max-height: 640px) {
      max-height: 24vh;
    }
  }
}

.stack .cardstack {
  display: inline-block;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
}

.stack .cardstack img {
  position: absolute;
  top: 0;
  right: 0;
}

/* 
.stack .cardstack {
    display: inline-block;
    opacity: 0;
    position: relative;
    top: -176px;
}

.stack .cardstack img {
    position: absolute;
    height: auto;
    width: 120px;
    margin: 0 5px;
    top: 0;
    right: 0;
}
 */

.waitforeventcard img:first-child {
  box-shadow: 0px 0px 20px 0px #9e93ff;
  animation: pulsate 1s ease-out infinite;
}

.pickupcoin .cardstack,
.pickup3coins .cardstack {
  opacity: 1;
}

.pickupcoin .cardstack img:last-child {
  top: 20px;
  right: 15px;
  transition: all 0.7s 0s ease-out;
  .player-count--2.isplaying--2 &,
  .player-count--4.isplaying--3 &,
  .player-count--6.isplaying--4 & {
    top: -20px;
  }
  // player right bottom
  .player-count--5.isplaying--2 &,
  .player-count--6.isplaying--2 & {
    right: -15px;
  }
  // player right top
  .player-count--3.isplaying--2 &,
  .player-count--4.isplaying--2 &,
  .player-count--5.isplaying--3 &,
  .player-count--6.isplaying--3 & {
    right: -15px;
    top: -20px;
  }
  // player left bottom
  .player-count--5.isplaying--5 &,
  .player-count--6.isplaying--6 & {
    left: auto;
    right: 15px;
  }
  // player left top
  .player-count--5.isplaying--4 &,
  .player-count--6.isplaying--5 &,
  .player-count--3.isplaying--3 &,
  .player-count--4.isplaying--4 & {
    left: auto;
    right: 15px;
    top: -20px;
  }
}

.pickup3coins .cardstack img {
  top: 40px;
  right: 30px;
  transition: all 0.7s 0s ease-out;
  // player top
  .player-count--2.isplaying--2 &,
  .player-count--4.isplaying--3 &,
  .player-count--6.isplaying--4 & {
    top: -40px;
  }
  // player right bottom
  .player-count--5.isplaying--2 &,
  .player-count--6.isplaying--2 & {
    right: -30px;
  }
  // player right top
  .player-count--3.isplaying--2 &,
  .player-count--4.isplaying--2 &,
  .player-count--5.isplaying--3 &,
  .player-count--6.isplaying--3 & {
    right: -30px;
    top: -40px;
  }
  // player left bottom
  .player-count--5.isplaying--5 &,
  .player-count--6.isplaying--6 & {
    left: auto;
    right: 30px;
  }
  // player left top
  .player-count--5.isplaying--4 &,
  .player-count--6.isplaying--5 &,
  .player-count--3.isplaying--3 &,
  .player-count--4.isplaying--4 & {
    left: auto;
    right: 30px;
    top: -40px;
  }
}
.pickup3coins .cardstack img:first-child {
  top: 20px;
  right: 15px;
  transition: all 0.7s 0s ease-out;
  .player-count--2.isplaying--2 &,
  .player-count--4.isplaying--3 &,
  .player-count--6.isplaying--4 & {
    top: -20px;
  }
  // player right bottom
  .player-count--5.isplaying--2 &,
  .player-count--6.isplaying--2 & {
    right: -15px;
  }
  // player right top
  .player-count--3.isplaying--2 &,
  .player-count--4.isplaying--2 &,
  .player-count--5.isplaying--3 &,
  .player-count--6.isplaying--3 & {
    right: -15px;
    top: -20px;
  }
  // player left bottom
  .player-count--5.isplaying--5 &,
  .player-count--6.isplaying--6 & {
    left: auto;
    right: 15px;
  }
  // player left top
  .player-count--5.isplaying--4 &,
  .player-count--6.isplaying--5 &,
  .player-count--3.isplaying--3 &,
  .player-count--4.isplaying--4 & {
    left: auto;
    right: 15px;
    top: -20px;
  }
}
.pickup3coins .cardstack img:last-child {
  top: 60px;
  right: 45px;
  transition: all 0.7s 0s ease-out;
  .player-count--2.isplaying--2 &,
  .player-count--4.isplaying--3 &,
  .player-count--6.isplaying--4 & {
    top: -60px;
  }
  // player right bottom
  .player-count--5.isplaying--2 &,
  .player-count--6.isplaying--2 & {
    right: -45px;
  }
  // player right top
  .player-count--3.isplaying--2 &,
  .player-count--5.isplaying--3 &,
  .player-count--4.isplaying--2 &,
  .player-count--6.isplaying--3 & {
    right: -45px;
    top: -60px;
  }
  // player left bottom
  .player-count--5.isplaying--5 &,
  .player-count--6.isplaying--6 & {
    left: auto;
    right: 45px;
  }
  // player left top
  .player-count--5.isplaying--4 &,
  .player-count--6.isplaying--5 &,
  .player-count--3.isplaying--3 &,
  .player-count--4.isplaying--4 & {
    left: auto;
    right: 45px;
    top: -60px;
  }
}

/* 

.playing .stack .cardstack.pulsate.card-1 img:last-child {
    top: 20px;
    right: 30px;
    transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img {
    top: 40px;
    right: 60px;
    transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img:first-child {
    top: 20px;
    right: 30px;
    transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img:last-child {
    top: 60px;
    right: 90px;
    transition: all 0.7s 0s ease-out;
}
 */
</style>
