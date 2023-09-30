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
        this.hit = 0
        
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
        
        if (player.valueOf() < 22) {
        while (player.canHit === true) {
            console.log('\n', `------ ${player.nickname} Hit # ${hit} ----------`, '\n')

            let deltCard = this.#deck.deal()
            player.addToHand(deltCard)
            console.log("Deck count: " + this.#deck.count + "  Delt Card:  " + deltCard.toString(), '\n')
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

            let deltCard = this.#deck.deal()
            dealer.addToHand(deltCard)
            console.log("Deck count: " + this.#deck.count + "  Delt Card:  " + deltCard.toString(), '\n')
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
            } else {
            console.log("Dealer wins!!!!")
            }
        }
        
        
        } 
        
    }
    
    playRounds (numberOfRounds) {
        
        for(let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
            console.log('\n', `------ Rounds # ${rounds} ----------`, '\n')
            console.log(this.#deal().valueOf()) 
            
            if (this.numberOfPlayers < 2 && this.numberOfPlayers > 0) {
                let player = new Player(("Player#1"), 14)
                this.#players.push(player)
                } else {
                    for(let i = 1; i < this.numberOfPlayers; i++) {
                        let player = new Player(("Player#" + i), 14)
                        this.#players.push(player)  
                        
                        if (player.valueOf() < 22) {
                            while (player.canHit === true) {
                        
                              let deltCard = this.#deal()
                              player.addToHand(deltCard)
                              console.log("Deck count: " + this.#deck.count + "  Delt Card:  " + deltCard.toString(), '\n')
                              console.log(player.nickname + ": " + player.toString())
                              console.log(player.valueOf())
                              
                              if (player.isNaturelWinner) {
                                console.log("21! Player Wins!")
                                
                              }
                              if (player.isBusted) {
                                console.log("Player busted!!!")
                                console.log("Dealer wins!")
                                
                              }
                        
                            }
                            if (player.isBusted === false && player.canHit === false) {
                              while (dealer.canHit === true) {
                                console.log('\n', `------ Dealer Hit # ${hit} ----------`, '\n')
                    
                                let deltCard = this.#deal()
                                dealer.addToHand(deltCard)
                                console.log("Deck count: " + this.#deal.count + "  Delt Card:  " + deltCard.toString(), '\n')
                                console.log("Dealer: " + dealer.toString())
                    
                              
                                if (dealer.isNaturelWinner) {
                                  console.log("21! Dealer Wins!")
                                  
                                }
                                
                                if (dealer.isBusted) {
                                  console.log("Dealer busted!!!")
                                  console.log("Player wins!")
                                  
                    
                                }
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
                            
                    
                                
                        //player.discardHand()
                    }
                }
            }
                  
            
            for(let i = 0; i< this.#players.length; i++) {
                this.#players[i] 
                console.log(this.#players[i])

                
            }
    }
    }
}