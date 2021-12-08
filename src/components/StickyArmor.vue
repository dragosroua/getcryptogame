<template>
  <!--   v-class="{active: isClicked}" -->
  <div>
    <img :src="getSrc()" class="item-image" />
  </div>
</template>

<script>
//Weapons
import gambeson from '../assets/img/stick_items/gambeson.png'
import chainmail from '../assets/img/stick_items/chainmail.png'
import brigandine from '../assets/img/stick_items/brigandine.png'
import platearmor from '../assets/img/stick_items/platearmor.png'
import paddedvest from '../assets/img/stick_items/paddedvest.png'

export default {
  name: 'StickyArmor',
  props: {
    name: String,
  },
  data() {
    return {
      itemType: this.type,
      itemName: this.name,
      imgs: {
        //Armor
        chainmail: chainmail,
        gambeson: gambeson,
        brigandine: brigandine,
        plateArmor: platearmor,
        paddedVest: paddedvest,
      },
    }
  },
  watch: {
    '$store.state.fighterEquipment.armor': function () {
      console.log('armor has changed:', this.$store.state.fighterEquipment.armor.name)
      this.itemName = this.$store.state.fighterEquipment.armor.name
    },
  },
  methods: {
    getSrc() {
      //console.log('name: ' + this.itemName + ' || img: ' + this.imgs[this.itemName])
      return this.imgs[this.itemName]
      //return require('@/assets/' + this.imgs[this.itemName]).default
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.zclass {
  z-index: 9999;
}
.item-image {
  width: 100%;
  height: 100%;
}
</style>
