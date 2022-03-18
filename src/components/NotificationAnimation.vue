<template>
  <NotificationMsg v-bind:msg="feedback" />
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
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
