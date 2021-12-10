<template>
  <div>
    <div class="container">
      <!-- <SpWelcome /> -->
      <SpTokenSend :address="address" :refresh="true" />
      <SpTransferList :address="address" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
  },
  mounted() {
    console.log('YES')
    console.log(this.$store)
    this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
      value: {
        '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
        creator: 'pylo1ewkc3uwtsrkgvx2hdnwthxrvsyj89vjuqu58kw',
        cookbookID: 'nftarena',
        recipeID: 'getcoins',
        coinInputsIndex: '0',
        itemIDs: [],
        paymentInfos: [],
      },
    })
    this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
      value: {
        '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
        creator: 'pylo1ewkc3uwtsrkgvx2hdnwthxrvsyj89vjuqu58kw',
        cookbookID: 'nftarena',
        recipeID: 'mintweapon',
        coinInputsIndex: '0',
        itemIDs: [],
        paymentInfos: [],
      },
    })
  },
}
</script>

<style scoped lang="scss"></style>
