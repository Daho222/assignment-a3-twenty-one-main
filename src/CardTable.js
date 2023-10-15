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

  /**
   *
   * @param numberOfPlayers
   */
  constructor (numberOfPlayers) {
    this.#deck = new Deck()
    this.#deck.shuffle()
    this.#discardPile = []
    this.#players = []
    this.#dealer = new Player('Dealer', 15)
    this.numberOfPlayers = numberOfPlayers
  }

  /**
   *
   * @param dealer
   * @param player
   */
  #compareHands (dealer, player) {

    if (dealer.valueOf() < player.valueOf()) {
      console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + 'Dealer: ' + `${dealer.toString()} (${dealer.valueOf()}) ` + player.nickname + ' wins! 🎉', '\n')
    } else {
      console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + 'Dealer: ' + `${dealer.toString()} (${dealer.valueOf()}) ` + ' Dealer wins! ☹️', '\n')
    }
  }

  /**
   *
   */
  #deal () {
    while (this.#deck.count > 1) {
      // console.log("Deck count " + this.#deck.count, '\n')
      const deltCard = this.#deck.deal()
      return deltCard
    }
    if (this.#deck.count === 1) {
      console.log('Last card ' + this.#deck)

      const newDeck = []
      for (let i = 0; i < this.#discardPile.length; i++) {
        for (let j = 0; j < this.#discardPile[i].length; j++) {
          newDeck.push(this.#discardPile[i][j])
        }
      }
      this.#discardPile = newDeck
      this.#discardPile.push(this.#deck.deal())

      for (let i = this.#discardPile.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
                    ;[this.#discardPile[i], this.#discardPile[randomIndex]] = [this.#discardPile[randomIndex], this.#discardPile[i]]
      }
      const deltCardObject = this.#discardPile.pop()
      const deltCard = deltCardObject

      return deltCard
    }
  }

  /**
   *
   * @param dealer
   * @param player
   */
  #playOut (dealer, player) {
    while (player.canHit === true) {
      let deltCard = this.#deal()
      //player.addToHand(deltCard, '\n')
      console.log("89 ", (player.valueOf() + 100))
      console.log("90 ", player.valueOf()) 
     console.log("87 ", player.valueOf(), deltCard.valueOf())
      if (deltCard.valueOf() === 1 && (player.valueOf() + 14) < 22 && player.valueOf() < 4) {
          deltCard = new PlayingCard(14, deltCard.suit)
          console.log("92 ", deltCard)
          player.addToHand(deltCard, '\n')

        } else {
          player.addToHand(deltCard, '\n')
        }
      if (player.isNaturalWinner) {
        console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + player.nickname + ' wins! 🎉', '\n')
      } else if (player.isBusted) {
        console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + ' BUSTED! ' + 'Dealer wins! ☹️', '\n')
      }
  
      //console.log("96 ", player.valueOf())
     /** if (player.isNaturalWinner) {
        console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + player.nickname + ' wins! 🎉', '\n')
      } else if (player.isBusted) {
        console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + ' BUSTED! ' + 'Dealer wins! ☹️', '\n')
      } */
    }

    
    if (player.isBusted === false && player.isNaturalWinner === false) {
      while (dealer.canHit === true) {
        const deltCardDealer = this.#deal()
        dealer.addToHand(deltCardDealer, '\n')

        if (dealer.isNaturalWinner) {
            console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + ' Dealer: ' + `${dealer.toString()} (${dealer.valueOf()})` + ' Dealer Wins! ☹️', '\n')
          } else if (dealer.isBusted) {
            console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + ' Dealer: ' + `${dealer.toString()} (${dealer.valueOf()})` + ' BUSTED! ' + player.nickname + ' wins! 🎉', '\n')
          }
      }  
      
      if (dealer.isBusted === false && dealer.isNaturalWinner === false && player.isBusted === false && player.isNaturalWinner === false) {
        this.#compareHands(dealer, player)
      }
    }
  }

  /**
   *
   * @param numberOfRounds
   */
  playRounds (numberOfRounds) {
    for (let i = 1; i < this.numberOfPlayers; i++) {
      const player = new Player(('Player#' + i), 15)
      this.#players.push(player)
    }
    for (let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
      console.log(`-------- Round # ${rounds} ----------`, '\n')
      console.log('The Deck: ' + this.#deck.toString(), '\n')
      for (const playerItem of this.#players) {
        const deltCard = this.#deal()
        playerItem.addToHand(deltCard, '\n')
        console.log(playerItem.nickname + " " + playerItem.toString())
      }
      for (const playerItem of this.#players) {
        this.#playOut(this.#dealer, playerItem)
        const arrDiscardedDealer = this.#dealer.discardHand()
        if (arrDiscardedDealer.length > 0) {
          this.#discardPile.push(arrDiscardedDealer)
          this.#discardPile.push(playerItem.discardHand())
        } else {
          this.#discardPile.push(playerItem.discardHand())
        }
      }
    }
  }
}
