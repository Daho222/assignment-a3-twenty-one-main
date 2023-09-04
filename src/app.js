/**
 * @file The starting point of the application.
 * @module src/app
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 2.0.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'
import { Player } from './Player.js'

try {
  // Create a deck, view its 52 playing cards,...
  const deck = new Deck()
  
  // ...shuffle the deck and show the playing cards again.
  deck.shuffle()
  console.log(deck.toString(), '\n')

  const deltCard = deck.deal()
  console.log(deck.toString(), '\n')
  console.log(deltCard.toString(), '\n')
  const arr = [2, 4]
  
  deck.add(deltCard)
  console.log(deck.toString(), '\n')

  console.log(deck.count)

  const player = new Player('Ben', 14, 1)
  
  console.log("busted1")
  if (player.canHit) {
    player.addToHand(deltCard)
    console.log(player.canHit)
    
  } else {
    player.isBusted
    console.log("busted")
  }



} catch (e) {
  console.error(e.message)
}
