<template>
  <div id="table">
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
export default {
  name: 'TableMain',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/table';
</style>
