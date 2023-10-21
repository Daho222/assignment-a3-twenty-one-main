/**
 * @file Module for the class Player.
 * @module src/Player
 * @author Daniel Holdenmark <dh222sr@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a player.
 */
export class Player {
  /**
   * Creates a new Player object.
   *
   * @param {string} nickname - The players name.
   * @param {number} standValue - The players stand value.
   */
  #hand
  #nickname
  #standValue

  constructor (nickname, standValue) {
    this.#nickname = nickname
    this.#standValue = standValue
    this.#hand = []
  }

  /**
   * Returns canHit.
   *
   */
  get canHit () {
    
    if(rankArray.includes(1) && this.valueOf() < 9) {
      let position = rankArray.indexOf(1)
      console.log("42 ", position)
      rankArray[position] = 14 
    }
    console.log("44 ", rankArray)
    if(rankArray.length > 1) {
      const value = this.rankArray.reduce(function (a, b) {
        
        return a + b
      }, 0)
      if (value > 18) {
        return false
      }
    }
       


    if (this.#hand.length === 5 && this.valueOf() < 22) {
      console.log(this.nickname + `: ${this.toString()} (${this.valueOf()}) ` + ' Five Cards! ' + this.nickname + ' wins! 🎉', '\n')
      return false
    } else if (this.valueOf() < this.#standValue) {
      return true
    } else {
      return false
    }
  }
  // }

  /**
   * Returns isBusted.
   *
   */
  get isBusted () {
    if (this.valueOf() > 21) {
      return true
    } else {
      return false
    }
  }

  /**
   * Returns isNaturalWinner.
   *
   */
  get isNaturalWinner () {
    if (this.valueOf() === 21) {
      return true
    } else {
      return false
    }
  }

  /**
   * Returns nickname.
   *
   */
  get nickname () {
    return this.#nickname
  }

  /**
   * Adds cards to players hand
   *
   * @param playingCard
   */
  addToHand (playingCard) {
    this.#hand.push(playingCard)
    /**if (playingCard.valueOf() === 1) {
      if (this.#hand.valueOf() > 7) {
        this.#hand.push(playingCard)
      } else {
        playingCard = new PlayingCard(14, playingCard.suit)
        this.#hand.push(playingCard)
      }
    } else {
      this.#hand.push(playingCard)
    }*/
  }

  /**
   * Discards hand.
   *
   */
  discardHand () {
    const discardedCards = []
    this.#hand.forEach(function (element) {
      discardedCards.push(element)
    })
    //    console.log("Discarded cards: ", discardedCards)

    this.#hand = []

    return discardedCards
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
/**  toString () {
    // If Ace, Jack, Queen, or King use the first character; otherwise the rank.
    let rankText
    switch (this.#hand) {
      case 14:
        rankText = 'A'
        break
    }

    return rankText + this.suit
  }
  */
 
  toString () {
    return this.#hand.join(' ')
  }

  /**
   * Returns the primitive value of the specified object.
   *
   * @returns {number} The primitive value of the specified object.
   */
  valueOf () {
    const value = this.#hand.reduce(function (a, b) {
      
      return a + b
    }, 0)

    return value
  }
}
