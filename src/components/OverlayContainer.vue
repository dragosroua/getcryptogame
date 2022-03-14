<template>
  <div class="overlay show">
    <OverlayHandView v-bind:players="data.players" v-bind:newcard="data.nexteventcard" />
  </div>
</template>

<script>
import OverlayHandView from './OverlayHandView'

export default {
  name: 'OverlayContainer',
  components: {
    OverlayHandView,
  },
  props: ['data'],
  computed: {
    playingPlayer: function () {
      let arr = this.data.players.filter((player) => player.isPlaying)
      return arr[0]
    },
  },
  data() {
    return {
      showportfolio: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.overlay {
  background-color: rgba(125, 111, 255, 0.59);
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(155, 155, 155, 0.6);
  backdrop-filter: blur(10px);
  height: $tableheight;
  left: 0;
  opacity: 0;
  position: fixed;
  top: $appheaderheight;
  transition: all 0.1s 0s ease-out;
  width: 100vw;
  z-index: 5;
}

.overlay.show {
  opacity: 1;
  transition: all 0.3s 0s ease-in;
  display: block;
}
</style>
