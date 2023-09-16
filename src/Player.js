/**
 * @file Module for the class Player.
 * @module src/Player
 * @author Daniel Holdenmark <dh222sr@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a deck.
 */
export class Player {
  /**
   * Players.
   *
   * @type {Players}
   */
  #hand
  #nickname
  #standValue

  /**
   * Initializes a new instance of the Player class.
   *
   * @param nickname
   * @param standValue
   * @param hand
   */
  constructor (nickname, standValue = 19) {
    this.#nickname = nickname
    this.#standValue = standValue
    this.#hand = []
  }

  /**
   * Returns canHut.
   *
   */
  get canHit () {
    for (let i = 0; i < 5; i++) {
        
      let value = this.valueOf()      
      console.log("Points: " + value) 
      if (value < 21) {
          console.log("canhit shows true")
          return true
        } else {
          console.log("canhit shows false")
          return false
        }     
    }
  }

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
  get isNaturelWinner () {
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
    console.log('Player got: ' + this.#hand[this.#hand.length-1])
  }

  /**
   * Discards hand.
   *
   */
  discardHand () {
    return this.#hand
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    /* this.#hand.join(' ') */
  }

  /**
   * Returns the primitive value of the specified object.
   *
   * @returns {number} The primitive value of the specified object.
   */
  valueOf () {
    let value = this.#hand.reduce(function (a, b) {
      return a + b;
    }, 0);
    return value
  }
}
