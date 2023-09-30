/**
 * @file The starting point of the application.
 * @module src/app
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Daniel Holdenmark <dh222sr@student.lnu.se>
 * @version 2.0.0
 */

// TODO: Replace the code below with your own game logic.

import { CardTable } from './CardTable.js'

try {

  const startValueArray = process.argv
  let numberOfPlayers = 0
  let numberOfRounds = 0
  startValueArray.shift()
  startValueArray.shift()
  const startValueObject = {
    "numberOfRounds": 0,
    "numberOfPlayers": 0
  }
  //console.log(cardTable.playRounds(startValueArray[0]))  
  
  
  if (startValueArray.length < 1) {
    numberOfPlayers = 3
    numberOfRounds = 1
    startValueObject.numberOfRounds = 1
    startValueObject.numberOfPlayers = 3
    console.log(startValueObject)
    

  } else if (startValueArray.length === 1) {
    if ((isFinite(startValueArray[0]) === false && startValueArray[0] % 1 !== 0 && startValueArray[0] % 1 < 1)) {
      throw Error("Inputs must be Integers")
    } else {
      startValueObject.numberOfRounds = startValueArray[0]
      startValueObject.numberOfPlayers = 3
      console.log("44", startValueObject)     
    }
    
  } else if (startValueArray.length === 2) {
    if ((Number(startValueArray[0]) !== startValueArray[0] && startValueArray[0] % 1 !== 0) || 
      (Number(startValueArray[1]) !== startValueArray[1] && startValueArray[1] % 1 !== 0)) {
        throw Error("Inputs must be Integerss")
      } else {
        if (startValueArray[0] > 5 && startValueArray[0] < 1) {
          throw Error('Enter number of rounds again, 1-5.')
        } else if (startValueArray[0] % 1 === 0) {
          numberOfRounds = parseInt(startValueArray[0])
          startValueObject.numberOfRounds = parseInt(startValueArray[0])

          if (startValueArray[1] % 1 === 0) {
            numberOfPlayers = parseInt(startValueArray[1])
            startValueObject.numberOfPlayers = parseInt(startValueArray[1])
            
          } else {
            numberOfRounds = startValueArray[0]
            numberOfPlayers = startValueArray[1]

            startValueObject.numberOfRounds = startValueArray[0]
            startValueObject.numberOfPlayers = startValueArray[1]
            console.log(startValueObject)
          }
        } 
      }
  } else if (startValueArray.length > 2) {
    throw Error('Enter only up to two parameters!')
  }

  const cardTable = new CardTable(startValueObject.numberOfPlayers)
  //cardTable.assign(startValueObject.numberOfPlayers)
  console.log(startValueObject.numberOfRounds)
  cardTable.playRounds(startValueObject.numberOfRounds)
  
  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')

  //cardTable.playRounds(startValueObject.numberOfRounds)
    
  // Create a deck, view its 52 playing cards,...
 
  // now we know how many players that have to be created and number of rounds
 
 // const deck = new Deck()
  // ...shuffle the deck and show the playing cards again.

 
} catch (e) {
  console.error(e.message)
}
