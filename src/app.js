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
  
  if (startValueArray.length < 1) 
    {
      numberOfPlayers = 3
      numberOfRounds = 1
    } else if (startValueArray.length === 1) {
      if ((Number(startValueArray[0]) !== startValueArray[0] && startValueArray[0] % 1 !== 0 || startValueArray[0] % 1 < 1)) {
        throw Error("Inputs must be Integers")
      } else {
        numberOfRounds = startValueArray[0]
        numberOfPlayers = 3
      }
      
    } else if (startValueArray.length === 2) {
      if ((Number(startValueArray[0]) !== startValueArray[0] && startValueArray[0] % 1 !== 0) || 
        (Number(startValueArray[1]) !== startValueArray[1] && startValueArray[1] % 1 !== 0)) {
          throw Error("Inputs must be Integers")
        } else {
          if (startValueArray[0] > 5 && startValueArray[0] < 1) {
            throw Error('Enter number of rounds again, 1-5.')
          } else if (startValueArray[0] % 1 === 0) {
            numberOfRounds = parseInt(startValueArray[0])
            if (startValueArray[1] % 1 === 0) {
              numberOfPlayers = parseInt(startValueArray[1])
            } else {
              numberOfRounds = startValueArray[0]
              numberOfPlayers = startValueArray[1]
            }
            
          }
        }
      
    } else if (startValueArray.length > 2) {
      throw Error('Enter only up to two parameters!')
    }
 
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  console.log('Number Of Rounds: ' + numberOfRounds)
  console.log('Number Of Players: ' + (numberOfPlayers))
  console.log('Dealer' + '\n')
  
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  // Create a deck, view its 52 playing cards,...
 
  // now we know how many players that have to be created and number of rounds
 
 
 
  const deck = new Deck()
  // ...shuffle the deck and show the playing cards again.
  deck.shuffle()
  console.log("Shuffled Deck: " + '\n' + '\n' + deck.toString(), '\n')
  console.log("Deck count: " + deck.count)

  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')
  
  //let deltCard = deck.deal()
  
  
  // Put the delt card into hand of player one

  //const player1 = new Player('Ben', 14)
  const dealer = new Player('Dealer', 14)
  let players = []  
  let rounds = 0
  let deltCard = ""
  let hit = 1
  let i = 1



  for(rounds = 1; rounds < numberOfRounds + 1; rounds++) {
    console.log('\n', `------ Round # ${rounds} ----------`, '\n')

    for(i = 1; i < numberOfPlayers + 1; i++) {
      let player = new Player(("Player#" + i), 14)
      players.push(player.nickname)
    
      player.discardHand()
      hit = 1
      if (player.valueOf() < 22) {
        while (player.canHit === true) {
          console.log('\n', `------ ${player.nickname} Hit # ${hit} ----------`, '\n')

          deltCard = deck.deal()
          player.addToHand(deltCard)
          console.log("Deck count: " + deck.count + "  Delt Card:  " + deltCard.toString(), '\n')
          console.log(player.nickname + ": " + player.toString())

          
          if (player.isNaturelWinner) {
            console.log("21! Player Wins!")
            
          }
          if (player.isBusted) {
            console.log("Player busted!!!")
            console.log("Dealer wins!")
            
          }
          
          hit += 1
        }
        if (player.isBusted === false && player.canHit === false) {
          hit = 1
          while (dealer.canHit === true) {
            console.log('\n', `------ Dealer Hit # ${hit} ----------`, '\n')

            let deltCard = deck.deal()
            dealer.addToHand(deltCard)
            console.log("Deck count: " + deck.count + "  Delt Card:  " + deltCard.toString(), '\n')
            console.log("Dealer: " + dealer.toString())

          
            if (dealer.isNaturelWinner) {
              console.log("21! Dealer Wins!")
              
            }
            
            if (dealer.isBusted) {
              console.log("Dealer busted!!!")
              console.log("Player wins!")
              

            }
            hit += 1
          }
          if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() < player.valueOf()) {
            console.log("Player1 wins!!!")
            dealer.discardHand()
            player.discardHand()
          } else {
            console.log("Dealer wins!!!!")
            dealer.discardHand()
            player.discardHand()
          }
        }
        
      
      } 
      
    }
  }
  console.log('\n' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\n')


 // const gameTable = new CardTable(numberOfPlayers)
  
  //console.log("Dealer is: " + gameTable.dealer + '\n')
  
 
} catch (e) {
  console.error(e.message)
}
