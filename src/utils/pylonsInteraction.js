export function getFight(id) {
  return this.$axios
    .get('http://v2202008103543124756.megasrv.de:1318/Pylons-tech/pylons/pylons/fight?ID=' + id, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then((res) => {
      return res.data.Fighter
    })
}

export function getNft() {
  return this.$store
    .dispatch('Pylonstech.pylons.pylons/QueryListItemByOwner', {
      params: {
        '@type': 'Pylonstech.pylons.pylons/QueryListItemByOwner',
        owner: this.$store.getters['common/wallet/address'],
      },
    })
    .then((res) => {
      console.log('getNft res:', res)
      let found = false
      res.Items.forEach((item) => {
        if (!found) {
          item.strings.forEach((str) => {
            if (!found && str.Key === 'ItemType' && str.Value === 'nft') {
              let entry = {
                ID: item.ID,
              }
              item.strings.forEach((string) => {
                entry[string.Key] = string.Value
              })
              item.doubles.forEach((double) => {
                entry[double.Key] = double.Value
              })
              item.mutableStrings.forEach((string) => {
                entry[string.Key] = string.Value
              })
              console.log('Entry:', entry)
              found = entry
            }
          })
        }
      })
      return found
    })
}
export function isLoggedIn() {
  return this.$store.getters['common/wallet/loggedIn']
}
export function getItems() {
  return this.$store
    .dispatch('Pylonstech.pylons.pylons/QueryListItemByOwner', {
      params: {
        '@type': 'Pylonstech.pylons.pylons/QueryListItemByOwner',
        owner: this.$store.getters['common/wallet/address'],
      },
    })
    .then((res) => {
      console.log('items', res)
      let items = []
      res.Items.forEach((item) => {
        let entry = {
          ID: item.ID,
        }
        item.strings.forEach((string) => {
          entry[string.Key] = string.Value
        })
        item.doubles.forEach((double) => {
          entry[double.Key] = double.Value
        })
        items.push(entry)
      })
      return items
    })
}

export function getItemsFromFight(fight) {
  return this.$store
    .dispatch('Pylonstech.pylons.pylons/QueryListItemByOwner', {
      params: {
        '@type': 'Pylonstech.pylons.pylons/QueryListItemByOwner',
        owner: fight.creator,
      },
    })
    .then((res) => {
      let items = []
      res.Items.forEach((item) => {
        let entry = {
          ID: item.ID,
        }
        item.strings.forEach((string) => {
          entry[string.Key] = string.Value
        })
        item.doubles.forEach((double) => {
          entry[double.Key] = double.Value
        })
        item.mutableStrings.forEach((string) => {
          entry[string.Key] = string.Value
        })
        items[item.ID] = entry
      })
      console.log('items dict', items)

      let opponentEquipment = {
        armor: items[fight.Armoritem],
        helmet: {},
        lefthand: items[fight.LHitem],
        righthand: items[fight.RHitem],
        nft: items[fight.NFT],
      }

      return opponentEquipment
    })
}

export function craftWeapon() {
  return this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
    value: {
      '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
      creator: this.$store.getters['common/wallet/address'],
      cookbookID: 'nftarena',
      recipeID: 'mintweapon',
      coinInputsIndex: '0',
      itemIDs: [],
      paymentInfos: [],
    },
  })
}

export function craftArmor() {
  return this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
    value: {
      '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
      creator: this.$store.getters['common/wallet/address'],
      cookbookID: 'nftarena',
      recipeID: 'mintarmor',
      coinInputsIndex: '0',
      itemIDs: [],
      paymentInfos: [],
    },
  })
}

export function craftShield() {
  return this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
    value: {
      '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
      creator: this.$store.getters['common/wallet/address'],
      cookbookID: 'nftarena',
      recipeID: 'mintshield',
      coinInputsIndex: '0',
      itemIDs: [],
      paymentInfos: [],
    },
  })
}
export function enchantItem(itemType, id) {
  let recipe
  switch (itemType) {
    case 'armor': {
      recipe = 'enchantarmor'
      break
    }
    case 'weapon': {
      recipe = 'enchantweapon'
      break
    }
    case 'shield': {
      recipe = 'enchantshield'
      break
    }
    default: {
      console.log('OOOPS WRONG ITEM TYPE!!!')
      return
    }
  }
  return this.$store.dispatch('Pylonstech.pylons.pylons/sendMsgExecuteRecipe', {
    value: {
      '@type': '/Pylonstech.pylons.pylons.MsgExecuteRecipe',
      creator: this.$store.getters['common/wallet/address'],
      cookbookID: 'nftarena',
      recipeID: recipe,
      coinInputsIndex: '0',
      itemIDs: [id],
      paymentInfos: [],
    },
  })
}
