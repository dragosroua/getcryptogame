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
  var coinCardsArray = []
  var eventCardsArray = []

  // 4 BTC cards
  for (var b = 1; b <= 3; b++) {
    bitcoinCard.player = gameHost
    bitcoinCard.inGameVault = true
    coinCardsArray.push(bitcoinCard)
  }
  // 6 ETH cards
  for (var e = 1; e <= 5; e++) {
    ethereumCard.player = gameHost
    bitcoinCard.inGameVault = true
    coinCardsArray.push(ethereumCard)
  }

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
