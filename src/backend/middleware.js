import { createGameDeck, getCurrentGameDeck } from './functions'

/**
{
    players: [
        {
            id: "player0",
            name: "Dragos",
            avatar: "img",
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

export function getPlayerData(gameDeck) {
  var players = []
  var playerObj = {
    id: '',
    name: '',
    avatar: '',
    cards: {
      hand: [],
      portfolio: {
        cards: [],
        wallets: [],
      },
    },
  }
  for (var i = 0; i < gameDeck.players.length; i++) {
    playerObj.id = 'player' + i
    playerObj.name = 'tmp'
  }
}

export function getUserName(gameId) {}
