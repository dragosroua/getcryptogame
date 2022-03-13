import { createGameDeck, getCurrentGameDeck } from '../game-mechanics/functions'

/**
{
    players: [
        {
            id: "player0",
            name: "Dragos",
            avatar: "img",
            address: "",
            cards: {
                hand: ["keys","wallet", "q13"],
                portfolio: {
                    cards: ["ETH", "ADA", "SHIT", "SHIT"]
                    wallets: [
                        ["BTC"],
                        ["ETH", "UNI"]
                    ]
                }
            }
        },
        {
            id: "player0",
            name: "Eva",
            avatar: "img",
            address: "",
            cards: {
                hand: ["q20","seed", "q08"],
                portfolio: {
                    cards: ["ETH", "ATOM", "SHIT", "SHIT"]
                    wallets: [
                        ["FLOW"]
                    ]
                }
            }
        },
    ],
    isMe: "player1",
    isPlaying: "player0",
}
 */
/**
 * used to format the players array in a format suitable for the UI
 * called after each gameEvent to be in sync with the gameDeck
 *
 * arg "players" is the property on gameDeck, gameDeck.,players
 *
 * properties: id, name, avatar and address are set before, after users log in / enter the game room
 * and are already present in the players array when we call this
 *
 *  @param {} players
 */

export function getPlayersWithCards(gameDeck) {
  var playerCards = {
    cards: {
      hand: [],
      portfolio: {
        cards: [],
        wallets: [],
      },
    },
  }

  for (var i = 0; i < gameDeck.players.length; i++) {
    var currentPlayer = gameDeck.player[i]
    // reset player hand to an empty object
    currentPlayer.cards = playerCards.cards
    for (var m = 0; m < gameDeck.coinCards.length; m++) {
      var currentCard = gameDeck.coinCards[m]
      if (currentCard.inGameVault === false && currentCard.player === currentPlayer.id) {
        if (currentCard.inWallet === false) {
          console.log('coin card')
          currentPlayer.cards.portfolio.cards.push(currentCard)
        } else if (currentCard.inWallet === true) {
          console.log('coin card in a wallet')
          currentPlayer.cards.portfolio.wallet.push(currentCard)
        }
      }
    }
    gameDeck.player[i] = currentPlayer
  }

  for (var ii = 0; i < gameDeck.players.length; ii++) {
    var cPlayer = gameDeck.player[ii]
    for (var mm = 0; m < gameDeck.eventCards.length; mm++) {
      var cCard = gameDeck.eventCards[m]
      if (cCard.inGameVault === false && cCard.player === cPlayer.id) {
        console.log('event card')
        cPlayer.cards.hand.push(cCard)
      }
    }
    gameDeck.player[i] = cPlayer
  }

  return gameDeck.players
}

export function getUserName(gameId) {}
