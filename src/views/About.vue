<template>
  <div class="background">
    <div class="container">
      <div class="title">About Crowd Control</div>
      <div class="description">
        Crowd Control is a DAO that develops a NFT trading card game made by players, built with Cosmos blockchain. The
        CrowdControl team has build this contribution to the Hackatom VI.
        <br /><br />
        Find out more about us:
        <a href="https://crowdcontrol.network/#/" target="_blank" class="cc"> Crowd Control Website</a>.
        <br />
        Or join our Discord server and get in touch!
      </div>

      <a target="_blank" href="https://discord.gg/ZKKbhUs">
        <div class="awesome-button" style="margin-top: 65px; float: left">
          <img class="img-fit" src="../assets/icon/discord.png" style="" />
          <span class="awesome-button-text">JOIN US</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.img-fit {
  max-width: 100%;
  max-height: 90%;
}
.cc {
  font-size: 30px;
  color: rgb(160, 192, 240);
  margin-top: 20px;
}
.title {
  font-size: 50px;
  color: white;
  padding: 30px 0;
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
  padding: 90px 10%;
}
.e90_483 {
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  background-color: white;
  width: 300px;
  height: 85px;
  font-size: 40px;
  border-width: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
