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
    

    
    #compareHands (dealer, player) {
        if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() < player.valueOf()) {
            return player
          } else {
            console.log("Dealer wins!!!!")
            return dealer
          }
    }
    #deal () {
        console.log(this.#deck.toString())
        
        while(this.#deck.count > 1) {
            console.log("45 deck count " + this.#deck.count + " +XXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            const deltCard = this.#deck.deal()
            return deltCard
        }
        if(this.#deck.count === 1) {
        console.log("49 last card " + this.#deck.toString())
        this.#discardPile.push(this.#deck)
        for (let i = this.#discardPile.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1))
            ;[this.#discardPile[i], this.#discardPile[randomIndex]] = [this.#discardPile[randomIndex], this.#discardPile[i]]
          }
          console.log("54 " + this.#discardPile)
          const deltCard = this.#discardPile.pop()
        return deltCard
    }
        
    }
    
    #playOut (dealer, player) {
        console.log("jjjjjjjjjjjjjjjjjjjjj")
        if (player.valueOf() < 22) {
            while (player.canHit === true) {
                
              let deltCard = this.#deal()
              player.addToHand(deltCard)

              console.log("Delt Card:  " + deltCard.toString(), '\n')
              console.log(player.nickname + ": " + player.toString())
              console.log("73 Player hand value: " + player.valueOf())
              
                            
              if (player.isNaturelWinner) {
                console.log("21! Player Wins!")
                let iterator = player.discardHand()
                for (const value of iterator) {
                  console.log("140 " + value.toString())
                  this.#discardPile.push(value.toString())
                }
                console.log("142 Discard Pile: " + this.#discardPile)
                
              }
              if (player.isBusted) {
                console.log("Player busted!!!")
                console.log("Dealer wins!") 
                let iterator = player.discardHand()
                for (const value of iterator) {
                  console.log("140 " + value.toString())
                  this.#discardPile.push(value.toString())
                  }
                  console.log("142 Discard Pile: " + this.#discardPile)
                
              }
            }
            
            if (player.isBusted === false && player.canHit === false && player.isNaturelWinner === false) {
                console.log("151 " + player.toString())
                let iterator = player.discardHand()
                for (const value of iterator) {
                  console.log("140 " + value.toString())
                  this.#discardPile.push(value.toString())
                  }
                  console.log("142 Discard Pile: " + this.#discardPile)
                
                console.log('\n', `------ Dealer ----------`, '\n') 
                console.log("160 " + dealer.toString(), '\n') 
                while (dealer.canHit === true) {
                    
                    let deltCard = this.#deal()
                    dealer.addToHand(deltCard)
                    console.log("Delt Card:  " + deltCard.toString(), '\n')
                    console.log("Dealer: " + dealer.toString())
        
                    if (this.#dealer.isNaturelWinner) {
                        console.log("21! Dealer Wins!")  
                        let iteratorDealer = dealer.discardHand()
                        for (const value of iteratorDealer) {
                        console.log("167 " + value.toString())
                        this.#discardPile.push(value.toString())
                        }
                        console.log("169 Discard Pile: " + this.#discardPile)                     
                                    
                    }
                    
                    if (dealer.isBusted) {
                        console.log("Dealer busted!!!")
                        console.log("Player wins!")
                        let iteratorDealer = dealer.discardHand()
                        for (const value of iteratorDealer) {
                        console.log("178 " + value.toString())
                        this.#discardPile.push(value.toString())
                        }
                        console.log("180 Discard Pile: " + this.#discardPile)                     
                        
                    }
              }
              console.log("ttttttttttttttttttttttt")
              if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() < player.valueOf()) {
                console.log("Player1 wins!!!")
                
                let iteratorDealer = dealer.discardHand()
                for (const value of iteratorDealer) {
                console.log("189 " + value.toString())
                this.#discardPile.push(value.toString())
                                     
                }
                console.log("191 Discard Pile: " + this.#discardPile)
                //this.#dealer.discardHand()
                //player.discardHand()
              } else if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() > player.valueOf()) {
                console.log("Dealer wins!!!!")
                let iteratorDealer = dealer.discardHand()
                for (const value of iteratorDealer) {
                console.log("175 " + value.toString())
                this.#discardPile.push(value.toString())

                }
                console.log("177 Discard Pile: " + this.#discardPile) 
                                 
                }

            }      
        }      
            
}

    
    playRounds (numberOfRounds) {

        for(let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
            console.log('\n', `------ Rounds # ${rounds} ----------`, '\n')
            
            if (this.numberOfPlayers < 2 && this.numberOfPlayers > 0) {
                let player = new Player(("Player#1"), 14)
                console.log("kkkkkkkkkkkkk " + player.nickname)
                this.#players.push(player)
                this.#playOut(this.#dealer, player)
                } else {
                    for(let i = 1; i < this.numberOfPlayers; i++) {
                        let player = new Player(("Player#" + i), 14)
                        console.log("gggggggggggggggggggggggg")
                        this.#players.push(player)  
                             
                      
                }
                for (let player of this.#players) {
                    console.log("eeeeeeeeeeeebbbbbbbbb " + player)
                    this.#playOut(this.#dealer, player)

                }
            
    }
}
}}