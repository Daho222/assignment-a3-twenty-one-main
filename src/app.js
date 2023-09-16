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
  const startValueArray = process.argv
  let numberOfPlayers = 0
  let numberOfRounds = 0
  startValueArray.shift()
  startValueArray.shift()
  console.log(startValueArray)

  if (startValueArray.length < 1) {
    numberOfPlayers = 2
    numberOfRounds = 1
  } else if (startValueArray.length === 1) {
    numberOfRounds = 1
    numberOfPlayers = startValueArray[0]
  } else if (startValueArray.length === 2) {
    if (startValueArray[0] > 5) {
      throw Error('Only maximum 5 rounds can be played. Enter number of rounds again, 1-5.')
    } else {
      numberOfRounds = startValueArray[0]
      numberOfPlayers = startValueArray[1]
    }
  } else if (startValueArray.length > 2) {
    throw Error('Enter only up to two parameters!')
  }
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  console.log('Number Of Rounds: ' + numberOfRounds)
  console.log('Number Of Players: ' + (numberOfPlayers - 1))
  console.log('Dealer: 1' + '\n')
  
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  // Create a deck, view its 52 playing cards,...
 
  // now we know how many players that have to be created and number of rounds
 
 
 
  const deck = new Deck()
  // ...shuffle the deck and show the playing cards again.
  deck.shuffle()
  console.log("Shuffled Deck: " + '\n' + '\n' + deck.toString(), '\n')
  console.log("Deck count:  " + deck.count)

  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  //let deltCard = deck.deal()
  
  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  // Put the delt card into hand of player one

  const player1 = new Player('Ben', 14, 1)
  //player1.addToHand(deltCard)
    
  /*if (player1.canHit === true) {
    console.log(`Player1 stand value: ${deltCard.rank}`)
    
  } else {
    player1.isBusted
    console.log("Player1 busted!")
  }*/
  let round = 1
  if (player1.valueOf() < 22) {
    while (player1.canHit === true) {
      console.log('\n', `------ Round # ${round} ----------`, '\n')

      let deltCard = deck.deal()
      player1.addToHand(deltCard)
      console.log("Deck count:  " + deck.count + " Delt Card:  " + deltCard.toString(), '\n')
 
      console.log("Value of Players hand: " + player1.valueOf())
      if (player1.isNaturelWinner) {
        console.log("21! Player Wins!")
        break
      }
      round += 1
    }
  }
  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')

 // const gameTable = new CardTable(numberOfPlayers)
  
  //console.log("Dealer is: " + gameTable.dealer + '\n')
  
 
} catch (e) {
  console.error(e.message)
}
