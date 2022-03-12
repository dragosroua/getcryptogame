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
    users: [],
    isLoggedIn: false,
    isWinner: false,
  },
  mutations: {
    SET_GAMEDECK(state, gameDeckData) {
      state.gameDeck = gameDeckData
    },
  },
  actions: {
    updateGameDeck: (state, gameDeckData) => {
      state.gameDeck = Object.assign({}, gameDeckData)
      //context.commit('SET_GAMEDECK', gameDeckData)
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
