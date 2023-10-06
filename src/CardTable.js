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
        console.log("comparehands comparehands")
        if (dealer.valueOf() < player.valueOf()) {
            console.log("35 Player1 wins!!!")

            //            this.#discardPile.push(dealer.discardHand())

            //          console.log("191 Discard Pile: " + this.#discardPile)
            //this.#dealer.discardHand()
            //player.discardHand()
        } else {
            console.log("43 Dealer wins!!!!")
            //        this.#discardPile.push(dealer.discardHand())
            //      console.log("164 Discard Pile: " + this.#discardPile)

            //    console.log("143 Discard Pile number of cards: " + this.#discardPile.length, '\n')

        }
    }
    #deal() {

        console.log('\n' + "The Deck: " + this.#deck.toString(), '\n')

        while (this.#deck.count > 1) {
            console.log("46 Deck count " + this.#deck.count, '\n')
            const deltCard = this.#deck.deal()
            return deltCard
        }
        if (this.#deck.count === 1) {
            console.log("49 Last card " + this.#deck)
            console.log("53 Deck count " + this.#deck.count, '\n')

            this.#discardPile.push(this.#deck)
            console.log("56 Complete discard pile: " + this.#discardPile, '\n')
            for (let i = this.#discardPile.length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1))
                    ;[this.#discardPile[i], this.#discardPile[randomIndex]] = [this.#discardPile[randomIndex], this.#discardPile[i]]
            }
            console.log("54 new shuffled pile: " + this.#discardPile)
            return deltCard
        }
        if (this.#deck.count === 0) {
            while (this.#discardPile.length > 1) {

                const deltCard = this.#discardPile.pop()
                console.log("64 Delt card: " + deltCard)
                console.log("69 type: " + typeof (deltCard))
                return deltCard
            }
        }


    }

    #playOut(dealer, player) {
        console.log("playOut ", player.nickname)

        // if (player.valueOf() < 22) {
        while (player.canHit === true) {

            let deltCard = this.#deal()
            player.addToHand(deltCard, '\n')
            //this.#discardPile.push(this.#deck.add(deltCard))
            //console.log("96 " + this.#deck.toString())
            //console.log("73 Delt Card rank:  " + deltCard.rank)
            console.log("74 " + player.nickname + ": " + player.toString())
            console.log("75 " + player.nickname + " hand total value: " + player.valueOf())


            if (player.isNaturalWinner) {
                console.log("21! Player Wins!")
                //                this.#discardPile.push(player.discardHand())
                break

            }
            if (player.isBusted) {
                console.log("Player busted!!!!!!!!!!!!!!")
                console.log("Dealer wins!")
                break
                /**        let iterator = player.discardHand()
                        for (const value of iterator) {
                            console.log("value: " + value)
                            this.#discardPile.push(value)
                        } */
                //              this.#discardPile.push(player.discardHand())

            }
        }
        while (dealer.canHit === true) {

            let deltCardDealer = this.#deal()
            dealer.addToHand(deltCardDealer, '\n')
            console.log("Delt Card Dealer:  " + deltCardDealer.toString(), '\n')
            console.log("Dealer: " + dealer.toString())
            console.log("131 " + dealer.nickname + " hand total value: " + dealer.valueOf())

            if (dealer.isNaturelWinner) {
                console.log("21! Dealer Wins!")
                this.#discardPile.push(dealer.discardHand())
                this.#discardPile.push(player.discardHand())
                break
            }
            if (dealer.isBusted) {
                console.log("Dealer busted!!!")
                console.log("Player wins!")
                this.#discardPile.push(dealer.discardHand())
                break
            }


        }

    }

    playRounds(numberOfRounds) {
        for (let rounds = 1; rounds < numberOfRounds + 1; rounds++) {
            console.log('\n', `------ Rounds # ${rounds} ----------`, '\n')

            for (let i = 1; i < this.numberOfPlayers; i++) {
                let player = new Player(("Player#" + i), 14)
                this.#players.push(player)
            }
            for (let playerItem of this.#players) {
                console.log("AAAAAAAAAAAAAAAAA")
                this.#playOut(this.#dealer, playerItem)
                this.#compareHands(this.#dealer, playerItem)
                this.#discardPile.push(playerItem.discardHand())

            }
            console.log(this.#discardPile)

            /*  if (this.numberOfPlayers === 1) {
                 let player = new Player(("Player#1"), 14)
                 console.log("one player, creating new player for game " + player.nickname)
                 this.#players.push(player)
                 this.#playOut(this.#dealer, player)
                 
                 this.#discardPile.push(player.discardHand())
                 this.#discardPile.push(this.#dealer.discardHand())
             
             } else {
                 for (let i = 1; i < this.numberOfPlayers; i++) {
                     let player = new Player(("Player#" + i), 14)
                     this.#players.push(player)
                 }
             }
             for (let playerItem of this.#players) {
                 console.log("AAAAAAAAAAAAAAAAA")
 
                 this.#playOut(this.#dealer, playerItem)
                 this.#discardPile.push(playerItem.discardHand())
                 this.#discardPile.push(this.#dealer.discardHand())
                 console.log("180 Discard Pile: " + this.#discardPile)
 
             } */


        }
    }
}