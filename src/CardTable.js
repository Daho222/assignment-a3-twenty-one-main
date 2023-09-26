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
        this.#discardPile = []
        this.#players = []
        this.#dealer = new Player("Dealer", 14)
        this.numberOfPlayers = numberOfPlayers
        
    }
    assign(numberOfPlayers) {
        if (numberOfPlayers < 2 && numberOfPlayers > 0) {
            let player = new Player(("Player#1"), 14)
            this.#players.push(player.nickname)
        } else {
            for(let i = 1; i < numberOfPlayers; i++) {
                let player = new Player(("Player#" + i), 14)
                this.#players.push(player.nickname)  
                        
                //player.discardHand()
                let hit = 1
            }
        }
        console.log("43 Assigned Players: " + this.#players)
    }

    /**
    #compareHands (dealer, player) {
        if (dealer.valueOf() < 21 && player.valueOf() < 21 && dealer.valueOf() < player.valueOf()) {
            return player
          } else {
            console.log("Dealer wins!!!!")
            return dealer
          }
    }
    #deal () {
        const deck = new Deck()
        const deltCard = deck.deal()
        return deltCard
    }
    #playOut (dealer, player) {

    }
  */playRounds (numberOfRounds) {
      console.log(this.#deck)  
      
      console.log("Rounds: " + numberOfRounds)

    }
}