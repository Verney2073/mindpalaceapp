import React from 'react'
import './App.tsx'

export function createDeck() {
    const suits = ["H", "D", "S", "C"];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push(ranks[j] + suits[i]);
        }
    }
    return deck
}
export function shuffleDeck(deck: string[]) {
    for (let i = 0; i < deck.length; i++) {
        //creates a random index, then assigns that card to that random position in the deck
        let tempCard = deck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
    return deck;
}

export function flipCard(deck: string[], seenCards: string[]) {
    console.log("The card is: " + deck[0])
    //func() add card to seenCardsPile
    seenCards.push(deck[0])
    deck.shift();
    console.log("You have seen the following cards: " + seenCards);
    //phaseCheck(deck: string[],seenCards: string[])


}

export function gameStateCheck(currentGameState: string, deck: string[], seenCards: string[]) {
    //if gameNotOn, the phase can only move to seeCards. Happens when the user chooses to start a game
    //if seeCardsPhase, the phase should move on to reCallPhase if the active Deck is empty (i.e. all cards seen)
    if (deck.length === 0) return "recallPhase";
    //if seeCardsPhase, the phase can also move to gameNotOn if the user exits the game 
    //the user can also start a new game, i.e. exits and re-enters the seeCardsPhase, generating a new deck

    return currentGameState
}