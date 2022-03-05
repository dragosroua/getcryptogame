<template>
  <span class="stats">
    <div class="info">
      <img src="../assets/img/natalia.png" class="pic" />
      <em class="name">
        {{ name }}
      </em>
      <em class="total">
        {{ total }}
      </em>
      <span class="walletcontainer">
        <em class="wallettotal">
          <span class="wallettext">{{ walletTotal }}</span>
        </em>
      </span>
      <span class="coins">
        <em class="coin">3</em>
        <em class="coin">1</em>
        <em class="coin">1</em>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'PlayerTag',
  props: ['name', 'total', 'walletTotal'],
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.stats {
  background-color: #9e93ff;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: inline-block;
  position: relative;
}

.info .pic {
  border-radius: 50%;
  height: auto;
  vertical-align: middle;
  width: 25px;
  position: relative;
}

.info .coins .coin {
  background-color: #9e93ff;
  border-radius: 10px;
  border: 1px solid #000;
  display: inline-block;
  line-height: 1.4;
  padding: 0 7px;
}

.info .walletcontainer {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  padding: 5px;
  margin: 10px 0px;
}

.info .wallettotal {
  color: #fff;
  position: relative;
  bottom: 1px;
  margin-right: 0px;
  background-color: #000;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 20px;
  border-radius: 4px;
}

.info .wallettotal:before {
  content: '';
  display: block;
  height: 20px;
  position: relative;
  top: -14px;
  width: 8px;
  border: solid 2px #000;
  border-radius: 5px;
  left: -1px;
}

.info .wallettext {
  height: 22px;
  line-height: 1;
  display: block;
  vertical-align: middle;
  position: relative;
  top: -29px;
  left: -6px;
  text-align: center;
  width: 22px;
}
</style>
