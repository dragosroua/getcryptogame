<template>
  <div class="background">
    <div v-if="isUserLoggedIn()" class="container">
      <div class="title">Forge</div>
      <div class="description">Chose the item category</div>
      <div class="category-container">
        <div class="armor-wrapper">
          <div @click="craftArmor()" class="awesome-button">
            <img class="blackbox-img" src="../assets/img/market/armor.png" />
            <div class="awesome-button-text">CRAFT ARMOR ITEM</div>
          </div>
          <div class="description" style="padding-top: 15px; text-align: center">
            Price: <br />
            25 token
          </div>
        </div>
        <div class="weapon-wrapper">
          <div @click="craftWeapon()" class="awesome-button">
            <img class="blackbox-img" src="../assets/img/market/sword.png" />
            <div class="awesome-button-text">CRAFT WEAPON ITEM</div>
          </div>
          <div class="description" style="padding-top: 15px; text-align: center">
            Price: <br />
            25 token
          </div>
        </div>
        <div class="surprise-wrapper">
          <div @click="craftShield()" class="awesome-button">
            <img class="blackbox-img" src="../assets/img/market/shield.png" />
            <div class="awesome-button-text">CRAFT SHIELD ITEM</div>
          </div>
          <div class="description" style="padding-top: 15px; text-align: center">
            Price: <br />
            20 token
          </div>
        </div>
      </div>
      <router-link to="/workshop">
        <div class="awesome-button" style="float: left; margin: 100px auto; height: 40px; padding: 10px; width: 300px">
          <span class="awesome-button-text" style="padding-top: 0px">GO TO MY HERO PAGE</span>
        </div>
      </router-link>
    </div>
    <div v-if="!isUserLoggedIn()">
      <PleaseLogIn />
    </div>
  </div>
</template>

<script>
import { craftWeapon, craftArmor, craftShield, getItems } from '../utils/pylonsInteraction.js'
import PleaseLogIn from '../components/PleaseLogIn.vue'

export default {
  name: 'Market',
  components: {
    PleaseLogIn,
  },
  data() {
    return {
      lock: false,
    }
  },
  mounted() {
    if (!this.isUserLoggedIn())
      this.notifyFail('Epic fail', 'What would you even do with forged items without logging in?')
  },
  methods: {
    craftWeapon() {
      if (this.lock) {
        this.notifyInfo('CHILL OUT!', 'Please wait for your item to finish crafting before getting another one!')
        return
      }
      this.lock = true
      this.notifyInfo('Weapon', 'Crafting it \nPlease wait')
      craftWeapon
        .bind(this)()
        .then((res) => {
          console.log('craft result', res)
          this.notifySuccess('Very Nice', 'Weapon crafting successful!')
          //this.enchant()
          this.lock = false
        })
        .catch((err) => {
          this.notifyFail('YOU FAIL', "Maybe you're trying to send transactions too quickly, yes?" + err)
          console.error('YES, YOU DUN GOOFED:', err)
          this.lock = false
        })
    },
    craftArmor() {
      this.lock = true
      this.notifyInfo('Armor', 'Crafting it \nPlease wait')
      craftArmor
        .bind(this)()
        .then((res) => {
          console.log('craft result', res)
          this.notifySuccess('Very Nice', 'Armor crafting successful!')
          //this.enchant()
          this.lock = false
        })
        .catch((err) => {
          this.notifyFail('YOU FAIL', 'Crafting armor failed' + err)
          console.error('YES, YOU DUN GOOFED:', err)
          this.lock = false
        })
    },
    craftShield() {
      this.lock = true
      this.notifyInfo('Shield', 'Crafting it \nPlease wait')
      craftShield
        .bind(this)()
        .then((res) => {
          console.log('craft result', res)
          this.notifySuccess('Very Nice', 'Shield crafting successful!')
          //this.enchant()
          this.lock = false
        })
        .catch((err) => {
          this.notifyFail('YOU FAIL', 'Crafting shield failed' + err)
          console.error('YES, YOU DUN GOOFED:', err)
          this.lock = false
        })
    },
    isUserLoggedIn() {
      return this.$store.getters['common/wallet/loggedIn']
    },
    enchant() {
      let craftedItem
      getItems
        .bind(this)()
        .then((res) => {
          craftedItem = res[res.length - 1]
          //console.log(craftedItem)
          this.$router.push({
            name: 'Enchant',
            params: { itemNew: true, id: craftedItem.ID },
          })
        })
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.sp-fill {
  padding-top: 0;
}
.title {
  font-size: 50px;
  color: white;
  padding: 20px 0;
}
.description {
  font-size: 25px;
  color: white;
}
.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $background-gradient;
}
.container {
  padding: 5% 12%;
  margin: 0 auto;
}
.category-container {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 100px;
}
.blackbox {
  text-align: center;
  width: 150px;
  height: 150px;
  padding: 10px;
  background-color: black;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.blackbox-img {
  padding-top: 10px;
  height: 80px;
}
.blackbox-description {
  color: white;
  font-size: 15px;
  font-family: $font-family;
  font-weight: bolder;
  padding-top: 20px;
}
.my-hero-router {
  display: block;
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  cursor: pointer;
  margin: 80px auto;
  background-color: black;
  color: white;
  font-size: 16px;
  border-width: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 5px 4px;
  width: 30%;
}
.awesome-button {
  cursor: pointer;
  width: 180px;
  height: 180px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-style: white;
  padding: 20px;
  margin: auto;
  background-color: black;
  // background-color: #d61224;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 6px 6px rgba(255, 255, 255, 0.5);
  filter: invert(1);
  -webkit-filter: invert(1);
}
.awesome-button:hover {
  box-shadow: 0px 10px 10px rgba(255, 255, 255, 0.5);
}
.awesome-button:active {
  box-shadow: none;
}
.awesome-button-text {
  padding-top: 10px;
  text-decoration: none;
  color: white;
}
</style>
