<template>
  <div class="background">
    <div v-if="this.isUserLoggedIn()" class="container"></div>
    <div v-if="!this.isUserLoggedIn()">
      <PleaseLogIn />
    </div>
  </div>
</template>

<script>
import * as R from 'ramda'
import { getNft, getItems } from '../utils/pylonsInteraction.js'

import PleaseLogIn from '../components/PleaseLogIn.vue'

import { StringKeyValue } from '@/store/generated/Pylons-tech/pylons/Pylonstech.pylons.pylons'

export default {
  name: 'Workshop',
  components: {
    PleaseLogIn,
  },
  beforeCreate() {
    this.getNft = getNft.bind(this)
    this.getItems = getItems.bind(this)
  },
  data() {
    return {
      componentKey: 0,
      walletName: '',
      ownedItems: [],
    }
  },
  mounted() {
    console.log(this.$store)
    if (this.isUserLoggedIn()) {
      this.init()
    }
  },
  computed: {},
  methods: {
    init() {
      console.log('init')
    },
    isUserLoggedIn() {
      //console.log(this.$store)
      return this.$store.getters['common/wallet/loggedIn']
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.sp-fill {
  padding-top: 0;
}
.blue {
  filter: brightness(50%) sepia(1);
  //background: rgb(18, 209, 209);
}
</style>
