<template>
  <span class="notifications-msg" v-bind:class="{ show: show }">{{ feedback }}</span>
</template>

<script>
export default {
  name: 'NotificationMsg',
  props: ['feedback', 'show'],
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.notifications-msg {
  background-color: #9e93ff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 80%);
  display: inline-block;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: -4px;
  max-width: 0;
  opacity: 0;
  padding: 0;
  transition: all 0.15s 0s ease-in;
  white-space: nowrap;
}

.show.notifications-msg {
  max-width: 100vw;
  opacity: 1;
  padding: 3px 10px 4px;
  transition: all 0.15s 0.3s ease-out;
}
</style>
