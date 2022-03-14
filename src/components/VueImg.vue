<template>
  <img v-bind:src="getImgUrl" v-bind:class="imgclasses" @click="imgonclick" />
</template>

<script>
export default {
  name: 'VueImg',
  props: ['imgsrc', 'imgclasses', 'imgonclick'],
  computed: {
    getImgUrl() {
      return require('../assets/img/' + this.imgsrc)
    },
  },
}
</script>
