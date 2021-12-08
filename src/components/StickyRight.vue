<template>
  <!--   v-class="{active: isClicked}" -->
  <div>
    <img :src="getSrc()" class="item-image" :class="{ flip: this.flipImg() }" />
  </div>
</template>

<script>
//Weapons
import axe from '@/assets/img/stick_items/axe.png'
import sword from '../assets/img/stick_items/sword.png'
import greatsword from '../assets/img/stick_items/greatsword.png'
import dagger from '../assets/img/stick_items/dagger.png'
import flail from '../assets/img/stick_items/flail.png'
import maul from '../assets/img/stick_items/maul.png'
import mace from '../assets/img/stick_items/mace.png'
import poleaxe from '../assets/img/stick_items/poleaxe.png'
import spear from '../assets/img/stick_items/spear.png'

import bow from '../assets/img/stick_items/bow.png'
import crossbow from '../assets/img/stick_items/crossbow.png'
import javelin from '../assets/img/stick_items/javelin.png'

import roundShield from '../assets/img/stick_items/roundShield.png'
import kiteShield from '../assets/img/stick_items/kiteShield.png'
import heaterShield from '../assets/img/stick_items/heaterShield.png'
import towerShield from '../assets/img/stick_items/towerShield.png'

export default {
  name: 'StickyRight',
  props: {
    name: String,
  },
  data() {
    return {
      itemType: this.type,
      itemName: this.name,
      imgs: {
        //Weapons
        axe: axe,
        sword: sword,
        greatSword: greatsword,
        dagger: dagger,
        flail: flail,
        maul: maul,
        mace: mace,
        poleAxe: poleaxe,
        spear: spear,

        bow: bow,
        crossbow: crossbow,
        javelin: javelin,
        //Shields
        roundShield: roundShield,
        kiteShield: kiteShield,
        heaterShield: heaterShield,
        towerShield: towerShield,
      },
    }
  },
  watch: {
    '$store.state.fighterEquipment.righthand': function () {
      console.log('righthand has changed:', this.$store.state.fighterEquipment.righthand.name)
      this.itemName = this.$store.state.fighterEquipment.righthand.name
    },
  },
  methods: {
    flipImg() {
      switch (this.itemName) {
        case 'RoundShield':
        case 'KiteShield':
        case 'HeaterShield':
        case 'TowerShield':
          return true
      }
      return false
    },
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
.flip {
  transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
}
.item-image {
  width: 100%;
  height: 100%;
}
</style>
