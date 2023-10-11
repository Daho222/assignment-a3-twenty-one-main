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
            console.log(player.nickname + " wins!!!")
        } else {
            console.log("Dealer wins!!!!")
        }
    }

    #deal() {
        while (this.#deck.count > 1) {
          //  console.log("Deck count " + this.#deck.count, '\n')
            const deltCard = this.#deck.deal()
            return deltCard
        }
        if (this.#deck.count === 1) {
            console.log("49 Last card " + this.#deck)

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
            console.log("New shuffled pile: ", this.#discardPile)
            const deltCardObject = this.#discardPile.pop()
            console.log("Delt card: " + deltCardObject)
            const deltCard = deltCardObject

            return deltCard
        }
    }

    #playOut(dealer, player) {
        console.log("PlayOut: ")

        while (player.canHit === true) {

            let deltCard = this.#deal()
            player.addToHand(deltCard, '\n')


            if (player.isNaturalWinner) {
                console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})`)
                console.log("21! Player Wins!")
                break
            }
            if (player.isBusted) {
                console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})`)
                console.log("Player busted!!!!!!!!!!!!!!")
                console.log("Dealer wins!")
                break
            }
        }
        if (player.isBusted === false && player.isNaturalWinner === false) {
            console.log(player.nickname + `: ${player.toString()} (${player.valueOf()})`)
            while (dealer.canHit === true) {

                let deltCardDealer = this.#deal()
                dealer.addToHand(deltCardDealer, '\n')
               // console.log("Dealer: " + dealer.toString())
                //console.log(dealer.nickname + " hand total value: " + dealer.valueOf())

                if (dealer.isNaturelWinner) {
                    console.log("Dealer: " + `${dealer.toString()} (${dealer.valueOf()})`)
                    console.log("21! Dealer Wins!")
                    break
                }
                if (dealer.isBusted) {
                    console.log("Dealer: " + `${dealer.toString()} (${dealer.valueOf()})`)
                    console.log("Dealer busted!!!")
                    console.log("Player wins!")
                    break
                }
            }
        }
        if (dealer.isBusted === false && dealer.isNaturalWinner === false && player.isBusted === false && player.isNaturalWinner === false) {
            console.log("Dealer: " + `${dealer.toString()} (${dealer.valueOf()})`)
            this.#compareHands(dealer, player)
        }
    }

    playRounds(numberOfRounds) {

        for (let i = 1; i < this.numberOfPlayers; i++) {
            let player = new Player(("Player#" + i), 14)
            this.#players.push(player)
        }
        for (let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
            console.log('\n', `------ Round # ${rounds} ----------`, '\n')


            for (let playerItem of this.#players) {
                let deltCard = this.#deal()
                playerItem.addToHand(deltCard, '\n')
                console.log(playerItem.nickname + ": " + playerItem.toString())
            }
            for (let playerItem of this.#players) {
                this.#playOut(this.#dealer, playerItem)
                let arr = this.#dealer.discardHand()
                if (arr.length > 0) {
                    this.#discardPile.push(arr)
                    this.#discardPile.push(playerItem.discardHand())

                } else {
                    this.#discardPile.push(playerItem.discardHand())

                }
            }
        }

        for (let j = 1; j < this.numberOfRounds - 1; j++) {
            for (let playerItem of this.#players) {
                console.log("CCCCCCCCCCCCCCCCCC")

                let deltCard = this.#deal()
                playerItem.addToHand(deltCard, '\n')
                console.log("177 " + playerItem.nickname + ": " + playerItem.toString())
            }
        }
    }
}