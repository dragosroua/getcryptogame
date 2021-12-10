import { createStore } from 'vuex'
import init from './config'

const store = createStore({
  state: {
    gameDeck: {
      turn: 0,
      coinCards: [],
      eventCards: [],
      players: [],
    },
    isLoggedIn: false,
    isWinner: false,
  },
  mutations: {
    setGameDeck(state, turn, coinCards, eventCards, players) {
      state.gameDeck = {
        turn: turn,
        coinCards: coinCards,
        eventCards: eventCards,
        players: players,
      }
    },
  },
  actions: {},
  getters: {
    getGameDeck: (state) => {
      return state.gameDeck
    },
  },
})
init(store)
export default store
