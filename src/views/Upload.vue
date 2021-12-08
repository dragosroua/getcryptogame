<template>
  <div v-if="this.isUserLoggedIn()" class="background">
    <div v-if="!initialized">LOADING....</div>
    <div v-if="initialized" class="container">
      <div class="title">Get Ready for Battle!</div>
      <div class="description">
        Here you can upload your NFT. Currently this is only possible via the right-click-save-as bridge. <br />
        However in the future we want to do this through IBC once Pylons supports IBC transfer of NFTs. <br />
        <br />
        Please enter the Name of your fighter:
      </div>

      <input v-model="nftname" class="e60_170" type="text" name="nftname" :placeholder="nftname" required />

      <form @submit.prevent="upload"></form>

      <div class="img-container">
        <input
          @change="onFileChange"
          class="e60_156"
          type="file"
          id="nftimg"
          name="image"
          accept="image/png, image/jpeg"
          v-bind:style="[hasImg ? { display: none } : { display: block }]"
        />
        <img class="uploaded-img" :src="nftimg" />
      </div>

      <div
        @click="setNftData()"
        class="awesome-button"
        style="margin: -20px auto; height: 40px; padding: 10px; width: 300px"
      >
        <span class="awesome-button-text">UPLOAD TO BLOCKCHAIN</span>
      </div>
      <!--button v-on:click="printAllItems()">print all items</button-->
      <!--button v-on:click="loadNft()">Load NFT</button-->
    </div>
  </div>
  <div v-if="!this.isUserLoggedIn()" class="background">
    <PleaseLogIn />
  </div>
</template>

<script>
import PleaseLogIn from '../components/PleaseLogIn.vue'

export default {
  name: 'Upload',
  components: {
    PleaseLogIn,
  },
  data() {
    return {
      hasImg: false,
      nftname: '',
      nftimg: '',
      heroNft: {},
      heroName: '',
      heroImg: '',
      initialized: true,
    }
  },
  mounted() {
    if (this.isUserLoggedIn()) this.loadNft()
    else this.notifyFail('Epic fail', 'You must be logged in to upload or update NFT')
  },
  methods: {
    loadNft() {
      this.queryMyNFT().then((res) => {
        console.log('First res is: ')
        console.log(res)
        if (res === false) {
          this.createNft().then(() => {
            console.log('Created NFT: ')
            this.queryMyNFT().then((res) => {
              this.heroNft = res
              this.getNftData()
              this.initialized = true
              console.log('Final Result: ')
              console.log(res)
              console.log('Hero: ')
              console.log(this.heroNft)
            })
          })
        } else {
          this.heroNft = res
          console.log('Hero: ')
          console.log(this.heroNft)
          this.getNftData()
          this.initialized = true
        }
      })
    },
    printAllItems() {
      this.$store
        .dispatch('Pylonstech.pylons.pylons/QueryListItemByOwner', {
          params: {
            '@type': 'Pylonstech.pylons.pylons/QueryListItemByOwner',
            owner: this.$store.getters['common/wallet/address'],
          },
        })
        .then((res) => {
          console.log('All items: ')
          console.log(res.Items)
        })
    },
    createNft() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
            value: {
              '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
              creator: this.$store.getters['common/wallet/address'],
              cookbookID: 'nftarena',
              recipeID: 'importnft',
              coinInputsIndex: '0',
              itemIDs: [],
              paymentInfos: [],
            },
          })
          .then((res) => {
            resolve(res)
          })
      })
    },
    inputFile(event) {
      let file = event.target.files[0]

      uploadImg(file, (result) => {
        console.log('uploadImg result', result)
        this.nftimg = result
      })
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
      this.hasImg = true
      console.log('hasImg: ' + this.hasImg)
    },
    createImage(file) {
      //var nftimg = new Image();
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.nftimg = e.target.result
        this.nftimg = e.target.result
      }
      reader.readAsDataURL(file)

      console.log(file)
      //console.log(vm.nftimg)
    },
    setNftData() {
      this.notifyInfo('Updating NFT', 'Your NFT is being updated, please wait!')
      this.$store
        .dispatch('Pylonstech.pylons.pylons/sendMsgSetItemString', {
          value: {
            '@type': '/Pylonstech.pylons.pylons.MsgSetItemString',
            creator: this.$store.getters['common/wallet/address'],
            cookbookID: 'nftarena',
            ID: this.heroNft.ID,
            field: 'name',
            value: this.nftname,
          },
        })
        .then((res) => {
          console.log('name updated')
          console.log(res)

          console.log('compressing: ', this.nftimg)
          let compressedImg = compressImg(this.nftimg, 100)
          console.log('img to upload:', compressedImg)

          this.$store
            .dispatch('Pylonstech.pylons.pylons/sendMsgSetItemString', {
              value: {
                '@type': '/Pylonstech.pylons.pylons.MsgSetItemString',
                creator: this.$store.getters['common/wallet/address'],
                cookbookID: 'nftarena',
                ID: this.heroNft.ID,
                field: 'image',
                value: compressedImg,
              },
              fee: [],
            })
            .then((res) => {
              if (res.code == 0) {
                console.log('Img updated', res)
                this.notifySuccess('Very Nice', 'NFT Name and Image successfully updated!')
              } else {
                console.error(res)
                this.notifyFail('Sad :(', 'TX FAILED!')
              }
            })
        })
    },
    isUserLoggedIn() {
      return this.$store.getters['common/wallet/loggedIn']
    },
    getNftData() {
      this.nftname = this.heroNft.name
      this.nftimg = this.heroNft.image

      console.log('getting data, name', this.nftname, ' img:', this.nftimg)

      if (this.nftimg === '') this.hasImg = false
      else this.hasImg = true
    },
  },
}

function uploadImg(file, callback) {
  let resolution = { height: 1300, width: 838 }

  const reader = new FileReader()

  reader.onload = function (readerEvent) {
    var image = new Image()
    image.onload = function () {
      // Resize the image
      let canvas = document.createElement('canvas')
      let maxSize = resolution.height
      let width = image.width
      let height = image.height
      if (height > maxSize) {
        width *= maxSize / height
        height = maxSize
      }
      // centering
      let widthAdjust = 0
      if (width > resolution.width) {
        widthAdjust = (width - resolution.width) / 2
      }
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(image, -widthAdjust, 0, width, height)

      let dataUrl = canvas.toDataURL('image/png')

      callback(dataUrl)
    }
    image.src = readerEvent.target.result
  }
  reader.onerror = (error) => console.error(error)
  reader.readAsDataURL(file)
}

function compressImg(dataURL, maxKB) {
  var image = new Image()
  image.src = dataURL
  console.log('image.src', image.src)
  console.log('image.width', image.width)
  console.log('image.height', image.height)

  let canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height)

  let quality = 0.9
  let newDataURL = canvas.toDataURL('image/jpeg', quality)
  console.log('newDataURL', newDataURL)
  console.log('quality', quality, 'size', Math.round(newDataURL.length) / 1000)

  while (Math.round(newDataURL.length) / 1000 > maxKB) {
    quality -= 0.1
    newDataURL = canvas.toDataURL('image/jpeg', quality)
    console.log('quality', quality, 'size', Math.round(newDataURL.length) / 1000)

    if (quality <= 0) return ''
  }
  return newDataURL
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.title {
  font-size: 40px;
  color: black;
  padding: 20px;
}
.description {
  font-size: 18px;
  color: black;
  padding-bottom: 5px;
}
.disabled {
  display: none;
  background-image: none;
  background-color: rgba(0, 0, 0, 0);
  width: 1%;
}
.sp-fill {
  padding-top: 0;
}
.container {
  text-align: center;
  align-content: center;
  height: 100%;
  width: 80%;
  padding: 5% 7%;
  background-color: rgba(255, 198.00000339746475, 98.00000175833702, 1);
}
.img-container {
  display: grid;
}
.uploaded-img {
  max-width: 100%;
  max-height: 400px;
  margin: 70px auto;
  grid-column: 1;
  grid-row: 1;
}
.awesome-button {
  cursor: pointer;
  width: 180px;
  height: 90px;
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
  text-decoration: none;
  color: white;
}

.e60_150 {
  background-color: black;
  color: white;
  width: 50%;
  border-width: 0px;
  font-size: 25px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3px 2px;
}

.e60_170 {
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  opacity: 0.9;
  font-size: 35px;
  color: black;
  padding: 5px;
  width: 675px;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: block;
}
.e60_156::after {
  display: none;
}
.e60_156 * {
  display: none;
}
.e60_156 {
  //Image upload box
  grid-column: 1;
  grid-row: 1;
  display: block;
  margin: 50px auto;
  background-image: url('../assets/img/cross.png');
  background-size: 200px, 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.5);
  width: 400px;
  height: 400px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.background {
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 120%;
  background: $background-gradient;
}
</style>
