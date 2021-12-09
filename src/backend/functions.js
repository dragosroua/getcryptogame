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
} from './structures.js'

import {
  nywnykCard,
  walletCard,
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
    bitcoinCard.player = gameHost
    bitcoinCard.inGameVault = true
    coinCardsArray.push(bitcoinCard)
  }
  // 6 ETH cards
  for (var e = 1; e <= 6; e++) {
    ethereumCard.player = gameHost
    ethereumCard.inGameVault = true
    coinCardsArray.push(ethereumCard)
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
    shitcoinCard.player = gameHost
    shitcoinCard.inGameVault = true
    coinCardsArray.push(shitcoinCard)
  }

  /** events cards array  */

  // 10 not your key not your coins cards
  for (var nk = 1; nk <= 10; nk++) {
    nywnykCard.player = gameHost
    nywnykCard.inGameVault = true
    eventCardsArray.push(nywnykCard)
  }

  // 10 wallet cards
  for (var w = 1; w <= 10; w++) {
    walletCard.player = gameHost
    walletCard.inGameVault = true
    eventCardsArray.push(walletCard)
  }

  // 2 lost your seed cards
  for (var ls = 1; ls <= 2; ls++) {
    lostSeedCard.player = gameHost
    lostSeedCard.inGameVault = true
    eventCardsArray.push(lostSeedCard)
  }

  // 21 general knowledge cards
  for (var gk = 1; gk <= 21; gk++) {
    generalKnowledgeCard.player = gameHost
    generalKnowledgeCard.inGameVault = true
    eventCardsArray.push(generalKnowledgeCard)
  }

  // 2 mining / staking cards
  for (var ms = 1; ms <= 2; ms++) {
    miningStakingCard.player = gameHost
    miningStakingCard.inGameVault = true
    eventCardsArray.push(miningStakingCard)
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

  // distribute coin cards to players
  for (var cc = 0; cc < 50; cc++) {
    var currentCoinCard = coinCardsArray[cc]
    currentCoinCard.inGameVault = false
    if (cc >= 0 && cc < howManyCoinCards) {
      currentCoinCard.player = playersArray[0]
    } else if (cc >= howManyCoinCards && cc < howManyCoinCards * 2) {
      currentCoinCard.player = playersArray[1]
      currentCoinCard.inGameVault = false
    } else if (playersArray.length > 2) {
      if (cc >= howManyCoinCards * 2 && cc < howManyCoinCards * 3) {
        currentCoinCard.player = playersArray[2]
        currentCoinCard.inGameVault = false
      } else if (cc >= howManyCoinCards * 3 && cc < howManyCoinCards * 4) {
        currentCoinCard.player = playersArray[3]
        currentCoinCard.inGameVault = false
      }
    } else {
      currentCoinCard.inCoinVault = true
    }
  }

  // distribute event cards to players
  for (var ee = 0; ee < 50; ee++) {
    var currentEventCard = eventCardsArray[ee]
    currentEventCard.inGameVault = false
    if (cc >= 0 && cc < howManyEventsCards) {
      currentEventCard.player = playersArray[0]
    } else if (cc >= howManyEventsCards && cc < howManyEventsCards * 2) {
      currentEventCard.player = playersArray[1]
      currentEventCard.inGameVault = false
    } else if (playersArray.length > 2) {
      if (cc >= howManyEventsCards * 2 && cc < howManyEventsCards * 3) {
        currentEventCard.player = playersArray[2]
        currentEventCard.inGameVault = false
      } else if (cc >= howManyEventsCards * 3 && cc < howManyEventsCards * 4) {
        currentEventCard.player = playersArray[3]
        currentEventCard.inGameVault = false
      }
    } else {
      currentEventCard.inEventVault = true
    }
  }

  console.log('coin cards ' + JSON.stringify(coinCardsArray, null, 2))
  console.log('event cards ' + JSON.stringify(eventCardsArray, null, 2))

  var gameDeck = {
    players: playersArray,
    coinCardsArray: coinCardsArray,
    eventCardsArray: eventCardsArray,
  }

  return gameDeck
}

// playes a card by a player and implements the game mechanic, increments gameTurn
// @params: gameId, playerAddress, cardType
// @returns: gameId, eventId, eventType, eventReceiver
export function playEventCard() {}

// implements the events
// @params: gameId, eventType, eventReceiver
export function executeGameEvent() {}

/** utils */

// validate a specific action, against the base parameters
// invoked before calling executeGameEvent
// @params: blockchainId, gameId, gameTurn, currentPlayer
export function validateAction() {}
