<template>
  <div></div>
</template>

<script>
import { createGameDeck, pickEventCard, executeGameEvent } from '@/backend/functions'

export default {
  name: 'Game',
  methods: {
    createGameDeck,
    pickEventCard,
    executeGameEvent,
  },
}
// replace with visuals for the game start, this is where we initialize the game deck and save it into state
// calling createGameDeck will generate a game deck for given the proper arguments (players, etc)
// and will save it in state
// picking a card it's done by calling pickEventCard
// advancing the game will call executeGameEvent
//
// ex @click{{createGameDeck(gameHost, playersArray, blockchain)}}
// ex @click{{pickEventCard(gameId, playerAddress, gameDeck)}}
//
</script>

<style lang="scss">
@import '../scss/variables';
</style>
