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

export function formatPlayerCards(gameDeck) {
  var playerCards = {
    hand: [],
    portfolio: {
      cards: [],
      wallets: [],
    },
  }
  for (var i = 0; i < gameDeck.players.length; i++) {
    var currentPlayer = gameDeck.player[i]
    for (var m = 0; m < gameDeck.coinCards.length; m++) {
      var currentCard = gameDeck.coinCards[m]
      if (currentCard.player === currentPlayer.id) {
        console.log('smth')
      }
    }
  }

  return playerCards
}

export function getUserName(gameId) {}
