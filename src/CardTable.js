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

    constructor(numberOfPlayers) {
        this.#deck = new Deck()
        this.#deck.shuffle()
        this.#discardPile = []
        this.#players = []
        this.#dealer = new Player("Dealer", 14)
        this.numberOfPlayers = numberOfPlayers
    }

    #compareHands(dealer, player) {
        if (dealer.valueOf() < player.valueOf()) {
            console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + "Dealer: " + `${dealer.toString()} (${dealer.valueOf()}) ` + player.nickname + " wins! 🎉", '\n')
        } else {
            console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + "Dealer: " + `${dealer.toString()} (${dealer.valueOf()}) ` + " Dealer wins! ☹️", '\n')
        }
    }

    #deal() {
        while (this.#deck.count > 1) {
          //  console.log("Deck count " + this.#deck.count, '\n')
            const deltCard = this.#deck.deal()
            return deltCard
        }
        if (this.#deck.count === 1) {
            console.log("Last card " + this.#deck)

            let newDeck = [];
            for (let i = 0; i < this.#discardPile.length; i++) {

                for (let j = 0; j < this.#discardPile[i].length; j++) {
                    newDeck.push(this.#discardPile[i][j]);
                }
            }
            this.#discardPile = newDeck
            this.#discardPile.push(this.#deck.deal())

            for (let i = this.#discardPile.length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1))
                    ;[this.#discardPile[i], this.#discardPile[randomIndex]] = [this.#discardPile[randomIndex], this.#discardPile[i]]
            }
            console.log("New shuffled pile! Number of Cards in new Deck: " + this.#discardPile.length)
            const deltCardObject = this.#discardPile.pop()
            console.log("Delt card: " + deltCardObject, '\n')
            const deltCard = deltCardObject

            return deltCard
        }
    }

    #playOut(dealer, player) {
        while (player.canHit === true) {

            let deltCard = this.#deal()
            player.addToHand(deltCard, '\n')

            if (player.isNaturalWinner) {
                console.log(player.nickname + `: ${player.toString()} (${player.valueOf()}) ` + player.nickname + " wins! 🎉", '\n')
            }
            if (player.isBusted) {
                console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + " BUSTED! " + "Dealer wins! ☹️", '\n')
            }
        }
        if (player.isBusted === false && player.isNaturalWinner === false) {
            while (dealer.canHit === true) {

                let deltCardDealer = this.#deal()
                dealer.addToHand(deltCardDealer, '\n')
               // console.log("Dealer: " + dealer.toString())
                //console.log(dealer.nickname + " hand total value: " + dealer.valueOf())

                if (dealer.isNaturelWinner) {
                    console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + " Dealer: " + `${dealer.toString()} (${dealer.valueOf()})` + " Dealer Wins! ☹️", '\n')
                }
                if (dealer.isBusted) {
                    console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})` + " Dealer: " + `${dealer.toString()} (${dealer.valueOf()})` + " BUSTED! " + player.nickname + " wins! 🎉", '\n')
                }
            }
            if (dealer.isBusted === false && dealer.isNaturalWinner === false && player.isBusted === false && player.isNaturalWinner === false) {
                this.#compareHands(dealer, player)
            }
        }
    }

    playRounds(numberOfRounds) {

        for (let i = 1; i < this.numberOfPlayers; i++) {
            let player = new Player(("Player#" + i), 14)
            this.#players.push(player)
        }
        for (let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
            console.log(`-------- Round # ${rounds} ----------`, '\n')

            for (let playerItem of this.#players) {
                let deltCard = this.#deal()
                playerItem.addToHand(deltCard, '\n')
            }
            for (let playerItem of this.#players) {
                this.#playOut(this.#dealer, playerItem)
                let arrDiscardedDealer = this.#dealer.discardHand()
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