import { createStore } from 'vuex'
import init from './config'

const store = createStore({
  state: {
    gameDeck: {
      blockchain: '',
      id: '',
      turn: 0,
      host: {},
      players: [],
      coinCardsArray: [],
      eventCardsArray: [],
      currentPlayer: {},
      playedEventCardsArray: [],
    },
    users: [],
    isLoggedIn: false,
    isWinner: false,
  },
  mutations: {
    setGameDeck(state, gameId, turn, coinCards, eventCards, players) {
      state.gameDeck = {
        gameId: gameId,
        turn: turn,
        coinCards: coinCards,
        eventCards: eventCards,
        players: players,
      }
    },
  },
  getters: {
    getGameDeck: (state) => {
      return state.gameDeck
    },
  },
})
init(store)
export default store
