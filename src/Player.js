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
   * Initializes a new instance of the Deck class.
   */
  constructor (nickname, standValue = 14, hand) {
    this.#nickname = nickname
    this.#standValue = standValue
    this.#hand = []
    
  }

  /**
   * Returns canHut.
   * 
   */
  get canHit () {

    if (this.#standValue < 22) {
      return "canhit ja"
    } else {
      return false
    }
    
  }
  /**
 * Returns isBusted.
 * 
 */
  get isBusted () {
    if (this.#standValue > 21) {
      return "canhit nej"
    } else {
      return false
    }
  }
  /**
   * Returns isNaturalWinner.
   * 
   */
  get isNaturelWinner () {
    if (this.#standValue = 21) {
      return "winner"
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
   * 
   */
  addToHand (playingCard) {
    this.#hand.push(playingCard)
    console.log("the hand: " + this.#hand[0])
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
    return /*this.#hand.join(' ')*/
  }

  /**
   * Returns the primitive value of the specified object.
   *
   * @returns {number} The primitive value of the specified object.
   */
  valueOf () {
    return this.#standValue
  }
}