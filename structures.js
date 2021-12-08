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


/***************** Coin cards ***************/

/**
 * 4 BTC available cards
 */
var bitcoinCard = {
    "cardName": "Bitcoin",
    "cardSymbol": "BTC",
    "cardType": "coin",
    "points": 10,
    "governance": "POW",
    "useCase": null
}

/**
 *  6 ETH available cards
 */

 var ethereumCard = {
    "cardName": "Ethereum",
    "cardSymbol": "ETH",
    "cardType": "coin",
    "points": 5,
    "governance": "POW",
    "useCase": null
}

/** Medium of exchange use cases */

/**
 *  1 BCH available card
 */

 var bchCard = {
    "cardName": "Bitcoin Cash",
    "cardSymbol": "BCH",
    "cardType": "coin",
    "points": 3,
    "governance": "POW",
    "useCase": "Medium of exchange"
}

/**
 *  1 DOGE available card
 */

 var dogeCard = {
    "cardName": "Dogecoin",
    "cardSymbol": "DOGE",
    "cardType": "coin",
    "points": 3,
    "governance": "POW",
    "useCase": "Medium of exchange"
}

/**
 *  1 LTC available card
 */

 var ltcCard = {
    "cardName": "Litecoin",
    "cardSymbol": "LTC",
    "cardType": "coin",
    "points": 3,
    "governance": "POW",
    "useCase": "Medium of exchange"
}

/**
 *  1 XMR available card
 */

 var xmrCard = {
    "cardName": "Monero",
    "cardSymbol": "XMR",
    "cardType": "coin",
    "points": 3,
    "governance": "POW",
    "useCase": "Medium of exchange"
}

/** Smart contract platform use cases */

/**
 *  1 DOT available card
 */

 var dotCard = {
    "cardName": "Polkadot",
    "cardSymbol": "DOT",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Smart contract platform"
}

/**
 *  1 ADA available card
 */

 var adaCard = {
    "cardName": "Cardano",
    "cardSymbol": "ADA",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Smart contract platform"
}

/**
 *  1 ATOM available card
 */

 var atomCard = {
    "cardName": "Cosmos",
    "cardSymbol": "ATOM",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Smart contract platform"
}

/**
 *  1 SOL available card
 */

 var solCard = {
    "cardName": "Solana",
    "cardSymbol": "SOL",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Smart contract platform"
}

/** DeFi use cases */

/**
 *  1 AAVE available card
 */

 var aaveCard = {
    "cardName": "Aave Protocol",
    "cardSymbol": "AAVE",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "DeFi"
}

/**
 *  1 Uniswap available card
 */

 var uniswapCard = {
    "cardName": "Uniswap",
    "cardSymbol": "UNI",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "DeFi"
}

/**
 *  1 AVAX available card
 */

 var avaxCard = {
    "cardName": "Avalanche",
    "cardSymbol": "AVAX",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "DeFi"
}

/**
 *  1 Luna available card
 */

 var lunaCard = {
    "cardName": "Terra Luna",
    "cardSymbol": "LUNA",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "DeFi"
}

/** Web3 use cases */

/**
 *  1 FIL available card
 */

 var filCard = {
    "cardName": "Filecoin",
    "cardSymbol": "FIL",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 LINK available card
 */

 var linkCard = {
    "cardName": "Chainlink",
    "cardSymbol": "LINK",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 THETA available card
 */

 var thetaCard = {
    "cardName": "Theta",
    "cardSymbol": "THETA",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 GRT available card
 */

 var grtCard = {
    "cardName": "The Graph",
    "cardSymbol": "GRT",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/** Metaverse use cases */

/**
 *  1 AXS available card
 */

 var axsCard = {
    "cardName": "Axie Infirity",
    "cardSymbol": "AXS",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 MANA available card
 */

 var manaCard = {
    "cardName": "Decentraland",
    "cardSymbol": "MANA",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 FLOW available card
 */

 var flowCard = {
    "cardName": "Flow",
    "cardSymbol": "FLOW",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  1 ENJ available card
 */

 var enjCard = {
    "cardName": "Enjin",
    "cardSymbol": "ENJ",
    "cardType": "coin",
    "points": 3,
    "governance": "POS",
    "useCase": "Web3"
}

/**
 *  20 generic shitcoins available cards
 */

 var shitcoinCard = {
    "cardName": "Shitcoin",
    "cardSymbol": "SHITCOIN",
    "cardType": "coin",
    "points": 1,
    "governance": "POS",
    "useCase": null
}

/***************** Event cards ***************/

/**
 *  10 "not your wallet, not your keys" available cards
 */

 var nywnykCard = {
    "cardName": "Not your wallet, not your keys",
    "cardType": "not-wallet-not-keys",
    "cardLongDescription": "The card is put down open on a pile next to the event card stack and the player next in turn has to give up 3 unprotected coin cards from his portfolio. The player can choose which coins he gives up. If he has less than 3 unprotected cards, he just gives up all of them. Shitcoin cards lost this way, leave the game. All other coin cards go to a pile next to the coin card stack.",
}

/**
 *  10 wallet available cards
 */

 var walletCard = {
    "cardName": "Wallet",
    "cardType": "wallet",
    "protectedCoins": [],
    "cardLongDescription": "If a user plays a wallet card, he lays it on the table in front of him and adds a coin card of his choice on top (letting the wallet a little bit visible). This card is now “in” the wallet and therefore protected from being taken with a “not your keys, not your coins” card. All other players who have a wallet card in front of them can now add 1 coin card of their choice to protect in their wallet. If you don’t have a wallet card on the table you can’t protect any cards.",
}

/**
 *  2 "lost your seed" available cards
 */

 var lostSeedCard = {
    "cardName": "Lost your seeds",
    "cardType": "lost-seed",
    "cardLongDescription": "If a user plays a “lost your seed” card, one of his immediate neighbours has to give up a wallet and all of its contents. The player whose turn it is, can choose which of his two neighbours is going to be affected and which of their wallets they have to give up. Shitcoin cards lost this way, leave the game. All other coin cards go to a pile next to the coin card stack.The wallet card goes to the pile next to the event card stack.",
}

/**
 *  21 general knowledge available cards
 */

 var generalKnowledgeCard = {
    "cardName": "Knowledge",
    "cardType": "knowledge",
    "cardLongDescription": "If a user plays a knowledge card, the card is put down open on a pile next to the event card stack and he can pick up 1 new coin card from the stack and add it to his portfolio (ideally he reads out loud the info on the card).",
}

/**
 *  2 mining / staking available cards
 */

 var generalKnowledgeCard = {
    "cardName": "Mining / staking",
    "cardType": "mining-staking",
    "cardLongDescription": "If the user plays a mining/staking card, the card is put down open on a pile next to the event card stack and if he already owns a PoW (or PoS) coin card, he can pick up 2 new coin cards from the stack and add them to his portfolio",
}

/**
 *  1 Medium of exchange use case card
 */

 var useCaseMECard = {
    "cardName": "Medium of exchange",
    "cardType": "medium-exchange",
    "cardLongDescription": "If the user plays a medium of exchange use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.",
}

/**
 *  1 Smart contract platform use case card
 */

 var useCaseSCPCard = {
    "cardName": "Smart contract platform",
    "cardType": "smart-contract",
    "cardLongDescription": "If the user plays a smart contract platform use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.",
}

/**
 *  1 DeFi use case card
 */

 var useCaseDFCard = {
    "cardName": "DeFi",
    "cardType": "defi",
    "cardLongDescription": "If the user plays a DeFi use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.",
}

/**
 *  1 Web3 use case card
 */

 var useCaseW3Card = {
    "cardName": "Web 3",
    "cardType": "web3",
    "cardLongDescription": "If the user plays a Web 3 use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.",
}

/**
 *  1 Metaverse use case card
 */

 var useCaseMVCard = {
    "cardName": "Metaverse",
    "cardType": "metaverse",
    "cardLongDescription": "If the user plays a Metaverse use case card, the card is put down open on a pile next to the event card stack and if he owns at least 1 coin card of the same use case, he can pick up 3 new coins from the stack and add them to his portfolio.",
}

/** Game related structures, used in recipes */

/** 
 * Game vault, holds all the structures for the game
*/

var gameVault = {
    "gameBlockchain": "blockchainId", // ex: Pylons, Hive, Cronos
    "gameId": "unique",
    "gameTurn": 0, // updates at every turn
    "gameHost": "", // acct address, ex: "pylwwer903wnrkajne"
    "gamePlayers": [
        {"player_one_acct": "acct address", "player_one_portfolio": [], "player_one_event_cards": []},
        {"player_two_acct": "acct address", "player_two_portfolio": [], "player_two_event_cards": []},
    ], // acct addresses
    "gamePack": [], // 50 coin cards, 50 event cards, as per game mechanics
    "coinCardsVault": [], // the initial coin cards vault, after cards are distributed
    "eventCardsVault": [], // the initial event cards vault, after cards are distributed
    "gameGeneratedCoinCardsVault": [], // the coin cards vault generated by the game
    "gameGeneratedEventCardsVault": [] // the event cards vault, generated by the game
}

/** recipes scaffold */

function createGameVault(
    // generates the game vault, shuffles the deck and distributes the cards to the players
    // @params: gameHost, playersArray, blockchain
) 


function playEventCard(
    // playes a card by a player and implements the game mechanic, increments gameTurn
    // @params: gameId, playerAddress, cardType
    // @returns: gameId, eventId, eventType, eventReceiver
)

function executeGameEvent(
    // implements the events
    // @params: gameId, eventType, eventReceiver
)

/** utils */

function validateAction(
    // validate a specific action, against the base parameters
    // invoked before calling executeGameEvent
    // @params: blockchainId, gameId, gameTurn, currentPlayer
)

const gameEventTypes = {
    "not-wallet-not-keys" : [],
    "wallet": [],
    "lost-seed": [],
    "knowledge": [],
    "mining-staking": [],
    "medium-exchange": [],
    "smart-contract": [],
    "defi": [],
    "web3": [],
    "metaverse": []
}