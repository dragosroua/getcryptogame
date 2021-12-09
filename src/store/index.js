import { createStore } from 'vuex'
import init from './config'

const store = createStore({
  state: {
    gameDeck: {
      turn: 0,
      cards: {},
      players: {},
    },
    isLoggedIn: false,
    isWinner: false,
  },
  mutations: {
    setGameDeck(state, turn, cards, players) {
      state.gameDeck = {
        turn: turn,
        cards: cards,
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
