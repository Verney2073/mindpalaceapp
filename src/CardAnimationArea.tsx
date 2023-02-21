import React from 'react'
import { useState } from 'react';
import './App.css'
import { createDeck, flipCard, gameStateCheck, shuffleDeck } from './CardCreationsInteractions'
import { GiCardDraw } from 'react-icons/gi';


export function CardAnimationArea(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>
    cardsToRecall: number;
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>
    seenCardsPile: string[];
    setSeenCardsPile: React.Dispatch<React.SetStateAction<string[]>>
}) {
    //When I remove string1, string 2 'ourShuffledDeck' below complains. But not with seenCardsPile. Why?
    let [activeDeck, setActiveDeck] = useState(['string1', 'string2']);

    //load this in as a component only after the game starts?

    async function handleMainDeckClick() {
        if (props.gameState === "gameNotOn") {
            props.setGameState("seeCardsPhase")
            console.log("the game has started!");
            let ourShuffledDeck = shuffleDeck(createDeck());
            setActiveDeck(ourShuffledDeck);
        }
        if (props.gameState === "seeCardsPhase") {
            flipCard(activeDeck, props.seenCardsPile, props.cardsToRecall);
            // console.log(activeDeck)
        }
        console.log(props.cardsToRecall);

        console.log(props.gameState);
    }
    return (
        <div className="card-animation-container">
            <div className="card-face-up-container"></div>
            <div className="card-face-down-deck-container" onClick={() => handleMainDeckClick()}></div>
            <div className="card-start-game-button-container">
                <div className="card-start-game-button"></div>
                <p className="card-start-game-message">Start game and memorise 5 cards</p>
            </div>
        </div>
    )
}

