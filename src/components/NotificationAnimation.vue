<template>
  <div class="notification-container animated-feedback">
    <NotificationMsg
      v-for="(feed, index) in feedbackArray"
      :key="index"
      v-bind:feedback="feed.msg"
      v-bind:show="feed.show"
    />
  </div>
  <!--
  <span class="round1">
    <span class="notifications">It's Natalia's turn</span>
    <span class="notifications">Natalia is picking up an event card</span>
    <span class="notifications">Waiting for Natalia to select a card to play</span>
  </span>
 
    <span class="yourturn">
        <span id="notifi-round2-1" class="notifications">It's your turn, please pick up an event card</span>
        <span id="notifi-round2-2" class="notifications">You redeem 3 coin cards</span>
        <span id="notifi-round2-2-2" class="notifications">You redeem 1 coin card</span>
    </span>

    <span class="selectcardfromhand">
        <span id="over-me-notifi1" class="notifications">Please choose which card to play</span>
        <span id="over-me-not2" class="button pulsate" style="display: none" onclick="round1_me_3()">Confirm choice</span>
    </span>
    -->
</template>

<script>
import NotificationMsg from './NotificationMsg'

export default {
  name: 'NotificationAnimation',
  props: ['feedback'],
  components: {
    NotificationMsg,
  },
  computed: {
    feedbackArray: function () {
      if (Array.isArray(this.feedback)) {
        return this.feedback.map((element, index) => {
          if (index == this.showing) {
            return { ...element, show: true }
          } else {
            return { ...element, show: false }
          }
        })
      } else {
        return [{ ...this.feedback, show: false }]
      }
    },
  },
  mounted() {
    if (Array.isArray(this.feedback)) {
      for (let i = 0; i < this.feedback.length; i++) {
        setTimeout(() => {
          this.showing = i
        }, this.feedback[i].time)
      }
    }
  },
  data() {
    return {
      showing: null,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.notification-container {
  position: fixed;
  top: 87px;
  width: 100vw;
  z-index: 2;
}

.player-count--2.isplaying--2 .notification-container,
.player-count--3.isplaying--2 .notification-container,
.player-count--3.isplaying--3 .notification-container,
.player-count--4.isplaying--2 .notification-container,
.player-count--4.isplaying--3 .notification-container,
.player-count--4.isplaying--4 .notification-container,
.player-count--5.isplaying--3 .notification-container,
.player-count--5.isplaying--4 .notification-container,
.player-count--6.isplaying--4 .notification-container,
.player-count--6.isplaying--3 .notification-container,
.player-count--6.isplaying--5 .notification-container {
  bottom: calc(31% + 80px);
  position: relative;
  top: auto;
  @media (min-height: 620px) and (max-height: 690px) {
    margin-top: -15px;
  }
  @media (min-height: 768px) {
    margin-top: -10px;
  }
}

.isplaying--1 .notification-container,
.player-count--5.isplaying--2 .notification-container,
.player-count--6.isplaying--2 .notification-container,
.player-count--5.isplaying--5 .notification-container,
.player-count--6.isplaying--6 .notification-container {
  @media (min-height: 560px) {
    top: calc(2vh + 80px);
  }
}
</style>
