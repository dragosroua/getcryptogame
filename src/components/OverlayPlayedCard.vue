<template>
  <aside class="played-card-view">
    <!-- START overlay header: now playing -->
    <section class="over-nowplaying">
      Now playing:
      <img v-bind:src="getImgUrl" class="pic" />
      <em class="name">{{ player.name }}</em>
    </section>
    <!-- END overlay header: now playing -->

    <!-- START overlay main content -->
    <div>
      <!-- feedback notifications -->
      <section class="over-notifications">
        <NotificationMsg show="true" v-bind:feedback="player.name + ' has played the following card:'" />
      </section>
      <!-- print played card -->
      <VueImg v-bind:imgsrc="card + '-grid.png'" class="card full" />
    </div>

    <!-- START overlay main content -->
  </aside>
</template>

<script>
import VueImg from './VueImg'
import NotificationMsg from './NotificationMsg'

export default {
  name: 'OverlayPlayedCard',
  components: {
    VueImg,
    NotificationMsg,
  },
  props: ['player', 'card'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.player.avatar)
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
