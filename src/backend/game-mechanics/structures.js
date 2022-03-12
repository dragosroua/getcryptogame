/**
 *
 * holds the game structures
 *
 */

/**
 * total number of cards: 100
 * coin cards: 50
 * event cards: 50
 */

/** object constructors */

export function coinCard(
  cardName,
  cardSymbol,
  cardType,
  points,
  governance,
  useCase,
  player,
  inWallet,
  inGameVault,
  inCoinVault,
  inNextCoinVault,
  inDumpster,
) {
  this.cardName = cardName
  this.cardSymbol = cardSymbol
  this.cardType = cardType
  this.points = points
  this.governance = governance
  this.useCase = useCase
  this.player = player
  this.inWallet = inWallet
  this.inGameVault = inGameVault
  this.inCoinVault = inCoinVault
  this.inNextCoinVault = inNextCoinVault
  this.inDumpster = inDumpster
}

export function eventCard(
  cardName,
  cardType,
  cardLongDescription,
  player,
  inGameVault,
  inEventVault,
  inNextEventVault,
) {
  this.cardName = cardName
  this.cardType = cardType
  this.cardLongDescription = cardLongDescription
  this.player = player
  this.inGameVault = inGameVault
  this.inEventVault = inEventVault
  this.inNextEventVault = inNextEventVault
}

export function walletCard(
  cardName,
  cardType,
  cardLongDescription,
  player,
  protectedCoins,
  inGameVault,
  inEventVault,
  inNextEventVault,
) {
  this.cardName = cardName
  this.cardType = cardType
  this.cardLongDescription = cardLongDescription
  this.player = player
  this.protectedCoins = protectedCoins
  this.inGameVault = inGameVault
  this.inEventVault = inEventVault
  this.inNextEventVault = inNextEventVault
}

/***************** Coin cards ***************/

/**
 * 4 BTC available cards
 */
export var bitcoinCard = {
  cardName: 'Bitcoin',
  cardSymbol: 'BTC',
  cardType: 'coin',
  points: 10,
  governance: 'POW',
  useCase: null,
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  6 ETH available cards
 */

export var ethereumCard = {
  cardName: 'Ethereum',
  cardSymbol: 'ETH',
  cardType: 'coin',
  points: 5,
  governance: 'POW',
  useCase: null,
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/** Medium of exchange use cases */

/**
 *  1 BCH available card
 */

export var bchCard = {
  cardName: 'Bitcoin Cash',
  cardSymbol: 'BCH',
  cardType: 'coin',
  points: 3,
  governance: 'POW',
  useCase: 'Medium of exchange',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 DOGE available card
 */

export var dogeCard = {
  cardName: 'Dogecoin',
  cardSymbol: 'DOGE',
  cardType: 'coin',
  points: 3,
  governance: 'POW',
  useCase: 'Medium of exchange',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 LTC available card
 */

export var ltcCard = {
  cardName: 'Litecoin',
  cardSymbol: 'LTC',
  cardType: 'coin',
  points: 3,
  governance: 'POW',
  useCase: 'Medium of exchange',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 XMR available card
 */

export var xmrCard = {
  cardName: 'Monero',
  cardSymbol: 'XMR',
  cardType: 'coin',
  points: 3,
  governance: 'POW',
  useCase: 'Medium of exchange',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/** Smart contract platform use cases */

/**
 *  1 DOT available card
 */

export var dotCard = {
  cardName: 'Polkadot',
  cardSymbol: 'DOT',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Smart contract platform',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 ADA available card
 */

export var adaCard = {
  cardName: 'Cardano',
  cardSymbol: 'ADA',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Smart contract platform',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 ATOM available card
 */

export var atomCard = {
  cardName: 'Cosmos',
  cardSymbol: 'ATOM',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Smart contract platform',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 SOL available card
 */

export var solCard = {
  cardName: 'Solana',
  cardSymbol: 'SOL',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Smart contract platform',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/** DeFi use cases */

/**
 *  1 AAVE available card
 */

export var aaveCard = {
  cardName: 'Aave Protocol',
  cardSymbol: 'AAVE',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'DeFi',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 Uniswap available card
 */

export var uniswapCard = {
  cardName: 'Uniswap',
  cardSymbol: 'UNI',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'DeFi',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 AVAX available card
 */

export var avaxCard = {
  cardName: 'Avalanche',
  cardSymbol: 'AVAX',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'DeFi',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 Luna available card
 */

export var lunaCard = {
  cardName: 'Terra Luna',
  cardSymbol: 'LUNA',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'DeFi',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/** Web3 use cases */

/**
 *  1 FIL available card
 */

export var filCard = {
  cardName: 'Filecoin',
  cardSymbol: 'FIL',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 LINK available card
 */

export var linkCard = {
  cardName: 'Chainlink',
  cardSymbol: 'LINK',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 THETA available card
 */

export var thetaCard = {
  cardName: 'Theta',
  cardSymbol: 'THETA',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 GRT available card
 */

export var grtCard = {
  cardName: 'The Graph',
  cardSymbol: 'GRT',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/** Metaverse use cases */

/**
 *  1 AXS available card
 */

export var axsCard = {
  cardName: 'Axie Infirity',
  cardSymbol: 'AXS',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 MANA available card
 */

export var manaCard = {
  cardName: 'Decentraland',
  cardSymbol: 'MANA',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 FLOW available card
 */

export var flowCard = {
  cardName: 'Flow',
  cardSymbol: 'FLOW',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  1 ENJ available card
 */

export var enjCard = {
  cardName: 'Enjin',
  cardSymbol: 'ENJ',
  cardType: 'coin',
  points: 3,
  governance: 'POS',
  useCase: 'Web3',
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/**
 *  20 generic shitcoins available cards
 */

export var shitcoinCard = {
  cardName: 'Shitcoin',
  cardSymbol: 'SHITCOIN',
  cardType: 'coin',
  points: 1,
  governance: 'POS',
  useCase: null,
  player: null,
  inWallet: false,
  inGameVault: false,
  inCoinVault: false,
  inNextCoinVault: false,
  inDumpster: false,
}

/***************** Event cards ***************/

/**
 *  10 "not your wallet, not your keys" available cards
 */

export var nywnykCard = {
  cardName: 'Not your wallet, not your keys',
  cardType: 'not-wallet-not-keys',
  cardLongDescription:
    'The card is put down open on a pile next to the event card stack and the player next in turn has to give up 3 unprotected coin cards from his portfolio. The player can choose which coins he gives up. If he has less than 3 unprotected cards, he just gives up all of them. Shitcoin cards lost this way, leave the game. All other coin cards go to a pile next to the coin card stack.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  10 wallet available cards
 */

export var walletCardObj = {
  cardName: 'Wallet',
  cardType: 'wallet',
  protectedCoins: [],
  cardLongDescription:
    'If a user plays a wallet card, he lays it on the table in front of him and adds a coin card of his choice on top (letting the wallet a little bit visible). This card is now “in” the wallet and therefore protected from being taken with a “not your keys, not your coins” card. All other players who have a wallet card in front of them can now add 1 coin card of their choice to protect in their wallet. If you don’t have a wallet card on the table you can’t protect any cards.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  2 "lost your seed" available cards
 */

export var lostSeedCard = {
  cardName: 'Lost your seeds',
  cardType: 'lost-seed',
  cardLongDescription:
    'If a user plays a “lost your seed” card, one of his immediate neighbours has to give up a wallet and all of its contents. The player whose turn it is, can choose which of his two neighbours is going to be affected and which of their wallets they have to give up. Shitcoin cards lost this way, leave the game. All other coin cards go to a pile next to the coin card stack.The wallet card goes to the pile next to the event card stack.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  21 general knowledge available cards
 */

export var generalKnowledgeCard = {
  cardName: 'Knowledge',
  cardType: 'knowledge',
  cardLongDescription:
    'If a user plays a knowledge card, the card is put down open on a pile next to the event card stack and he can pick up 1 new coin card from the stack and add it to his portfolio (ideally he reads out loud the info on the card).',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  2 mining / staking available cards
 */

export var miningStakingCard = {
  cardName: 'Mining / staking',
  cardType: 'mining-staking',
  cardLongDescription:
    'If the user plays a mining/staking card, the card is put down open on a pile next to the event card stack and if he already owns a PoW (or PoS) coin card, he can pick up 2 new coin cards from the stack and add them to his portfolio',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  1 Medium of exchange use case card
 */

export var useCaseMECard = {
  cardName: 'Medium of exchange',
  cardType: 'medium-exchange',
  cardLongDescription:
    'If the user plays a medium of exchange use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  1 Smart contract platform use case card
 */

export var useCaseSCPCard = {
  cardName: 'Smart contract platform',
  cardType: 'smart-contract',
  cardLongDescription:
    'If the user plays a smart contract platform use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  1 DeFi use case card
 */

export var useCaseDFCard = {
  cardName: 'DeFi',
  cardType: 'defi',
  cardLongDescription:
    'If the user plays a DeFi use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  1 Web3 use case card
 */

export var useCaseW3Card = {
  cardName: 'Web 3',
  cardType: 'web3',
  cardLongDescription:
    'If the user plays a Web 3 use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/**
 *  1 Metaverse use case card
 */

export var useCaseMVCard = {
  cardName: 'Metaverse',
  cardType: 'metaverse',
  cardLongDescription:
    'If the user plays a Metaverse use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.',
  player: null,
  inGameVault: false,
  inEventVault: false,
  inNextEventVault: false,
}

/** Game related structures, used in recipes */

/**
 * Game vault, holds all the structures for the game, not implemented
 */

export var gameStruct = {
  blockchain: 'blockchainId', // ex: Pylons, Hive, Cronos
  id: 'unique',
  turn: 0, // updates at every turn
  host: {}, // playerStruct object
  players: [
    {
      id: 'player0',
      name: 'Eva',
      avatar: 'img',
      address: 'xyz',
      cards: {
        hand: ['q20', 'seed', 'q08'],
        portfolio: {
          cards: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
          wallets: [['FLOW']],
        },
      },
      isCurrent: false,
      isWinner: false,
    },
    {
      id: 'player1',
      name: 'Dragos',
      avatar: 'img',
      address: 'xyz',
      cards: {
        hand: ['q20', 'seed', 'q08'],
        portfolio: {
          cards: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
          wallets: [['FLOW']],
        },
      },
      isCurrent: false,
      isWinner: false,
    },
  ], // playerStruct objects
  coinCardsArray: [], // all coin cards, each cards has a prop that says which player has it
  eventCardsArray: [], // all event cards, each cards has a prop that says which player has it
  currentPlayer: {},
  playedEventCardsArray: [], // initialize this as empty
}

export var playerStruct = {
  id: 'player0',
  name: 'Eva',
  avatar: 'img',
  address: 'xyz',
  cards: {
    hand: ['q20', 'seed', 'q08'],
    portfolio: {
      cards: ['ETH', 'ATOM', 'SHIT', 'SHIT'],
      wallets: [['FLOW']],
    },
  },
  isCurrent: false,
  isWinner: false,
}

export var gameEventTypes = {
  'not-wallet-not-keys': [],
  wallet: [],
  'lost-seed': [],
  knowledge: [],
  'mining-staking': [],
  'medium-exchange': [],
  'smart-contract': [],
  defi: [],
  web3: [],
  metaverse: [],
}
