## GetCrypto Game - A HackAtom VI project

The game is a card game for newbies in the crypto space and can be played in groups of 2-6 players. It introduces the players to basic concepts around crypto currencies and reinforces best practices for holding your own crypto.

The game is played with two types of cards: event cards and coin cards. The coin cards represent Bitcoin, Ethereum and a total of 20 altcoins and tokens. They also introduce the players to the concept of "shitcoin".

The event cards let you pick up or lose coin cards and introduce topics around security, blockchain related jargon, use cases and community culture.

For details and game mechanics, have a look at [Game Mechanics](GameDescription.md).

### Implementation & Status

Relevant files can be found in `backend/library.js`, `backend/structures.js` and `backend/functions.js`.

Each card is an autonomous object that contains all the necessary metadata: description, points, and game state (if it's in the main deck, in a wallet, which player has it, etc). The deck contains all the coin cards aand event cards, a players array, and the game current turn. The initial turn is 0 (at this stage, the deck is initialized, shuffled and the cards are distributed to the players). Playing the game is a matter of updating the properties of each modified card in the deck after each turn.

We got to a point where we initialize the game with the correct structures (coin cards, event cards, turn, players), we update the state with this object, called `gameDeck`, and we can start playing (which would have also involved some pairing with the UI). 

The actual playing involves updating the state with the `gameDeck` object modified in two places:

- the current turn, which is updated after all the actions have been taken (and recorded in the JS)
- the modified cards in the deck

If we had more time, we would have deployed the `gameDeck` object via a recipe, so each game could be tracked. _Keeping the `gameDeck` object on chain would allow for a "replaying" of a game just by following the state of this object as the game progresses._

Our plan was to have just 2 recipes:

- processGame - this will start and advance a game, and it contains only the gameDeck and some chain-related metada (ids, etc). The input param will be `gameDeck` and it will just update the structure. This object is owned by `gameHost` until the game ends.
- finishGame - this will take all the cards that each players has at the end of the game (their points), turns them into individual NFTs and distributes theam to each player, so they can keep them in their wallet. These NFTs can't be used in another game, but it's a nice way to learn about blockchain.

Should we had more time, we would have deployed the recipes too.

# Interactive Demo

If you want to have a look at the UI and see a prototype:

`git clone https://github.com/dragosroua/getcryptogame.git`

`cd interactive-prototype`

Open `index.html` in your browser and click around. (_this is just a prototype, there's no connection to the blockchain yet, cookbook and recipes haven't been deployed_).
