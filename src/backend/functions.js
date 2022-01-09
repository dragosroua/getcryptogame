import {
  bitcoinCard,
  ethereumCard,
  bchCard,
  dogeCard,
  ltcCard,
  xmrCard,
  dotCard,
  adaCard,
  atomCard,
  solCard,
  aaveCard,
  uniswapCard,
  avaxCard,
  lunaCard,
  filCard,
  linkCard,
  thetaCard,
  grtCard,
  axsCard,
  manaCard,
  flowCard,
  enjCard,
  shitcoinCard,
  miningStakingCard,
  coinCard,
  eventCard,
  walletCard,
} from './structures.js'

import {
  nywnykCard,
  walletCardObj,
  lostSeedCard,
  generalKnowledgeCard,
  useCaseMECard,
  useCaseSCPCard,
  useCaseDFCard,
  useCaseW3Card,
  useCaseMVCard,
} from './structures.js'

/** game mechanics scaffold */

// generates the game vault, shuffles the deck and distributes the cards to the players
// @params: gameHost, playersArray (alreaady contains gameHost), blockchain
export function createGameDeck(gameHost, playersArray, blockchain = 'pylons') {
  if (gameHost === null && gameHost === undefined) {
    gameHost = this.$store.getters['common/wallet/address']
  }
  if (playersArray === null && playersArray === undefined) {
    playersArray = [gameHost, 'player 2']
  }

  var coinCardsArray = []
  var eventCardsArray = []

  /** coin cards array */

  // 4 BTC cards
  for (var b = 1; b <= 4; b++) {
    var btcCard = new coinCard(
      bitcoinCard.cardName,
      bitcoinCard.cardSymbol,
      bitcoinCard.cardType,
      bitcoinCard.points,
      bitcoinCard.governance,
      bitcoinCard.useCase,
      bitcoinCard.player,
      bitcoinCard.inWallet,
      bitcoinCard.inGameVault,
      bitcoinCard.inCoinVault,
      bitcoinCard.inNextCoinVault,
      bitcoinCard.inDumpster,
    )
    btcCard.player = gameHost
    btcCard.inGameVault = true
    coinCardsArray.push(btcCard)
  }
  // 6 ETH cards
  for (var e = 1; e <= 6; e++) {
    var ethCard = new coinCard(
      ethereumCard.cardName,
      ethereumCard.cardSymbol,
      ethereumCard.cardType,
      ethereumCard.points,
      ethereumCard.governance,
      ethereumCard.useCase,
      ethereumCard.player,
      ethereumCard.inWallet,
      ethereumCard.inGameVault,
      ethereumCard.inCoinVault,
      ethereumCard.inNextCoinVault,
      ethereumCard.inDumpster,
    )
    ethCard.player = gameHost
    ethCard.inGameVault = true
    coinCardsArray.push(ethCard)
  }

  bchCard.player = gameHost
  bchCard.inGameVault = true
  coinCardsArray.push(bchCard)

  dogeCard.player = gameHost
  dogeCard.inGameVault = true
  coinCardsArray.push(dogeCard)

  ltcCard.player = gameHost
  ltcCard.inGameVault = true
  coinCardsArray.push(ltcCard)

  xmrCard.player = gameHost
  xmrCard.inGameVault = true
  coinCardsArray.push(xmrCard)

  dotCard.player = gameHost
  dotCard.inGameVault = true
  coinCardsArray.push(dotCard)

  adaCard.player = gameHost
  adaCard.inGameVault = true
  coinCardsArray.push(adaCard)

  atomCard.player = gameHost
  atomCard.inGameVault = true
  coinCardsArray.push(atomCard)

  solCard.player = gameHost
  solCard.inGameVault = true
  coinCardsArray.push(solCard)

  aaveCard.player = gameHost
  aaveCard.inGameVault = true
  coinCardsArray.push(aaveCard)

  uniswapCard.player = gameHost
  uniswapCard.inGameVault = true
  coinCardsArray.push(uniswapCard)

  avaxCard.player = gameHost
  avaxCard.inGameVault = true
  coinCardsArray.push(avaxCard)

  lunaCard.player = gameHost
  lunaCard.inGameVault = true
  coinCardsArray.push(lunaCard)

  filCard.player = gameHost
  filCard.inGameVault = true
  coinCardsArray.push(filCard)

  linkCard.player = gameHost
  linkCard.inGameVault = true
  coinCardsArray.push(linkCard)

  thetaCard.player = gameHost
  thetaCard.inGameVault = true
  coinCardsArray.push(thetaCard)

  grtCard.player = gameHost
  grtCard.inGameVault = true
  coinCardsArray.push(grtCard)

  axsCard.player = gameHost
  axsCard.inGameVault = true
  coinCardsArray.push(axsCard)

  manaCard.player = gameHost
  manaCard.inGameVault = true
  coinCardsArray.push(manaCard)

  flowCard.player = gameHost
  flowCard.inGameVault = true
  coinCardsArray.push(flowCard)

  enjCard.player = gameHost
  enjCard.inGameVault = true
  coinCardsArray.push(enjCard)

  // 20 shitcoin cards
  for (var s = 1; s <= 20; s++) {
    var shtCard = new coinCard(
      shitcoinCard.cardName,
      shitcoinCard.cardSymbol,
      shitcoinCard.cardType,
      shitcoinCard.points,
      shitcoinCard.governance,
      shitcoinCard.useCase,
      shitcoinCard.player,
      shitcoinCard.inWallet,
      shitcoinCard.inGameVault,
      shitcoinCard.inCoinVault,
      shitcoinCard.inNextCoinVault,
      shitcoinCard.inDumpster,
    )
    shtCard.player = gameHost
    shtCard.inGameVault = true
    coinCardsArray.push(shtCard)
  }

  /** events cards array  */

  // 10 not your key not your coins cards
  for (var nk = 1; nk <= 10; nk++) {
    var nkyk = new eventCard(
      nywnykCard.cardName,
      nywnykCard.cardType,
      nywnykCard.cardLongDescription,
      nywnykCard.player,
      nywnykCard.inGameVault,
      nywnykCard.inEventVault,
      nywnykCard.inNextEventVault,
    )
    nkyk.player = gameHost
    nkyk.inGameVault = true
    eventCardsArray.push(nkyk)
  }

  // 10 wallet cards
  for (var w = 1; w <= 10; w++) {
    var wl = new walletCard(
      walletCardObj.cardName,
      walletCardObj.cardType,
      walletCardObj.cardLongDescription,
      walletCardObj.player,
      walletCardObj.protectedCoins,
      walletCardObj.inGameVault,
      walletCardObj.inEventVault,
      walletCardObj.inNextEventVault,
    )
    wl.player = gameHost
    wl.inGameVault = true
    eventCardsArray.push(wl)
  }

  // 2 lost your seed cards
  for (var ls = 1; ls <= 2; ls++) {
    var lc = new eventCard(
      lostSeedCard.cardName,
      lostSeedCard.cardType,
      lostSeedCard.cardLongDescription,
      lostSeedCard.player,
      lostSeedCard.inGameVault,
      lostSeedCard.inEventVault,
      lostSeedCard.inNextEventVault,
    )
    lc.player = gameHost
    lc.inGameVault = true
    eventCardsArray.push(lc)
  }

  // 21 general knowledge cards
  for (var gk = 1; gk <= 21; gk++) {
    var gc = new eventCard(
      generalKnowledgeCard.cardName,
      generalKnowledgeCard.cardType,
      generalKnowledgeCard.cardLongDescription,
      generalKnowledgeCard.player,
      generalKnowledgeCard.inGameVault,
      generalKnowledgeCard.inEventVault,
      generalKnowledgeCard.inNextEventVault,
    )
    gc.player = gameHost
    gc.inGameVault = true
    eventCardsArray.push(gc)
  }

  // 2 mining / staking cards
  for (var ms = 1; ms <= 2; ms++) {
    var mc = new eventCard(
      miningStakingCard.cardName,
      miningStakingCard.cardType,
      miningStakingCard.cardLongDescription,
      miningStakingCard.player,
      miningStakingCard.inGameVault,
      miningStakingCard.inEventVault,
      miningStakingCard.inNextEventVault,
    )
    mc.player = gameHost
    mc.inGameVault = true
    eventCardsArray.push(mc)
  }

  useCaseMECard.player = gameHost
  useCaseMECard.inGameVault = true
  eventCardsArray.push(useCaseMECard)

  useCaseSCPCard.player = gameHost
  useCaseSCPCard.inGameVault = true
  eventCardsArray.push(useCaseSCPCard)

  useCaseDFCard.player = gameHost
  useCaseDFCard.inGameVault = true
  eventCardsArray.push(useCaseDFCard)

  useCaseW3Card.player = gameHost
  useCaseW3Card.inGameVault = true
  eventCardsArray.push(useCaseW3Card)

  useCaseMVCard.player = gameHost
  useCaseMVCard.inGameVault = true
  eventCardsArray.push(useCaseMVCard)

  // shuffle, to revisit
  coinCardsArray.sort(() => Math.random() - 0.5)
  eventCardsArray.sort(() => Math.random() - 0.5)
  var howManyCoinCards = 6
  var howManyEventsCards = 3
  if (playersArray.length === 2) howManyCoinCards = 8
  //console.log('playersArray ' + playersArray.length)
  // distribute coin cards to players
  for (var cc = 0; cc < 50; cc++) {
    var currentCoinCard = coinCardsArray[cc]
    currentCoinCard.inGameVault = false
    if (cc >= 0 && cc < howManyCoinCards) {
      currentCoinCard.player = playersArray[0]
    } else if (cc >= howManyCoinCards && cc < howManyCoinCards * 2) {
      currentCoinCard.player = playersArray[1]
    } else if (playersArray.length > 2) {
      if (cc >= howManyCoinCards * 2 && cc < howManyCoinCards * 3) {
        currentCoinCard.player = playersArray[2]
      } else if (cc >= howManyCoinCards * 3 && cc < howManyCoinCards * 4) {
        currentCoinCard.player = playersArray[3]
      }
    } else {
      currentCoinCard.inCoinVault = true
    }
  }

  // distribute event cards to players
  for (var ee = 0; ee < 50; ee++) {
    var currentEventCard = eventCardsArray[ee]
    currentEventCard.inGameVault = false
    if (ee >= 0 && ee < howManyEventsCards) {
      currentEventCard.player = playersArray[0]
      console.log(ee + ' ' + currentEventCard.cardName + ' ' + currentCoinCard.player)
    } else if (ee >= howManyEventsCards && ee < howManyEventsCards * 2) {
      currentEventCard.player = playersArray[1]
    } else if (playersArray.length > 2) {
      if (ee >= howManyEventsCards * 2 && ee < howManyEventsCards * 3) {
        currentEventCard.player = playersArray[2]
      } else if (ee >= howManyEventsCards * 3 && ee < howManyEventsCards * 4) {
        currentEventCard.player = playersArray[3]
      }
    } else {
      currentEventCard.inEventVault = true
    }
  }

  //console.log('coin cards ' + JSON.stringify(coinCardsArray, null, 2))
  //console.log('event cards ' + JSON.stringify(eventCardsArray, null, 2))

  var gameDeck = {
    players: playersArray,
    currentPlayer: [],
    coinCardsArray: coinCardsArray,
    eventCardsArray: eventCardsArray,
  }

  return gameDeck
}

export function setCurrentPlayer(gameDeck, playerAddress) {
  return (gameDeck.currentPlayer = playerAddress)
}

// playes a card by a player and implements the game mechanic, increments gameTurn
// @params: gameId, playerAddress, gameDeck, xcardType
// @returns: gameId, eventId, eventType, eventReceiver
export function playEventCard(gameId, playerAddress, gameDeck, cardType) {
  // to do: validate if the player had the card is playing
  // card conditions
  if (cardType === 'not-wallet-not-keys') {
    // the card is put down open on a pile next to the event card stack and the player next in turn
    // has to give up 3 unprotected coin cards from his portfolio. The player can choose which coins he gives up.
    // If he has less than 3 unprotected cards, he just gives up all of them.
    // Shitcoin cards lost this way, leave the game. All other coin cards go to a pile next to the coin card stack

    // get the next player in turn
    var nextIndex = gameDeck.players.indexOf(playerAddress)
    // if this is the last player in the array, move the needle to the beginning
    if (nextIndex === gameDeck.players.length - 1) {
      nextIndex = 0
    }
    var nextPlayer = gameDeck.players[nextIndex]
    // trigger a function of card transfers
    setCurrentPlayer(gameDeck, nextPlayer)
    playEventCard(gameId, nextPlayer, gameDeck, 'give-up-cards')
  }
}

// implements the events
// @params: gameId, eventType, eventReceiver
export function executeGameEvent() {}

/** utils */

// validate a specific action, against the base parameters
// invoked before calling executeGameEvent
// @params: blockchainId, gameId, gameTurn, currentPlayer
export function validateAction() {}
