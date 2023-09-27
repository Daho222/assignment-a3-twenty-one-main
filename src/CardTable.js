/**
 * @file Module for the class Deck.
 * @module src/CardTable
 * @author Daniel Holdenmark <dh222sr@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'
import { Deck } from './Deck.js'
import { Player } from './Player.js'

/**
 * Represents a deck.
 */
export class CardTable {
    #dealer
    #deck
    #discardPile
    #players
    deltCard

    constructor (numberOfPlayers) {
        this.#deck = new Deck()
        this.#deck.shuffle()
        this.#discardPile = []
        this.#players = []
        this.#dealer = new Player("Dealer", 14)
        this.numberOfPlayers = numberOfPlayers
        
    }
    assign(numberOfPlayers) {
        if (numberOfPlayers < 2 && numberOfPlayers > 0) {
            let player = new Player(("Player#1"), 14)
            this.#players.push(player)
        } else {
            for(let i = 1; i < numberOfPlayers; i++) {
                let player = new Player(("Player#" + i), 14)
                this.#players.push(player)  
                
                        
                //player.discardHand()
                let hit = 1
            }
        }
        for(let i = 0; i< this.#players.length; i++) {
            console.log(this.#players[i])
        }
        
        console.log("43 Assigned Players: ", this.#players, " Dealer: " + this.#dealer.nickname)
    }

    /**
    #compareHands (dealer, player) {
        if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() < player.valueOf()) {
            return player
          } else {
            console.log("Dealer wins!!!!")
            return dealer
          }
    }*/
    #deal () {
//        console.log(this.#deck.shuffle())
        console.log(this.#deck.toString())
        const deltCard = this.#deck.deal()
        const remainingCards = this.#deck.count
        console.log("58", deltCard.toString(), remainingCards)
        return deltCard
        
    }
    
    #playOut (dealer, player) {
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
                  console.log(player.valueOf())
                  
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
    }
    playRounds (numberOfRounds) {
      console.log(this.#deal())  
      
      console.log("Rounds: " + numberOfRounds, this.#deal())

    }
}