<template>
  <img v-bind:src="getImgUrl" v-bind:class="imgclasses" />
</template>

<script>
export default {
  name: 'VueImg',
  props: ['imgsrc', 'imgclasses'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.imgsrc)
    },
  },
  methods: {
    emitClick: function () {},
  },
}
</script>
