<template>
  <img v-bind:src="getImgUrl" class="card portfolio" />
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: ['ticker'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.ticker + '-table.png')
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

.card.portfolio {
  max-height: 9vh;
  width: auto;
  .overlay & {
    max-height: 12vh;
  }
}
</style>
