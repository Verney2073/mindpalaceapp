import React from 'react'
import { useState } from 'react';
import './App.css'
import { createDeck, flipCard, gameStateCheck, shuffleDeck } from './CardCreationsInteractions'

export function CardAnimationArea(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>
}) {
    //When I remove string1, string 2 'ourShuffledDeck' below complains. But not with seenCardsPile. Why?
    let [activeDeck, setActiveDeck] = useState(['string1', 'string2']);

    //load this in as a component only after the game starts?
    let [seenCardsPile, setSeenCardsPile] = useState([]);

    async function handleMainDeckClick() {
        if (props.gameState === "gameNotOn") {
            props.setGameState("seeCardsPhase")
            console.log("the game has started!");
            let ourShuffledDeck = shuffleDeck(createDeck());
            setActiveDeck(ourShuffledDeck);
        }
        if (props.gameState === "seeCardsPhase") {
            flipCard(activeDeck, seenCardsPile);
            // console.log(activeDeck)

        }
        // I think there are synchronicity issues here. 
        // Seems that gameState is still set to gameNotOn when it reaches this function,
        //it hasn't yet been updated by the if statement above. Then this func keeps it at gameNotON
        //use .then() somehow here? 
        //.then(props.setGameState(gameStateCheck(props.gameState,activeDeck,seenCardsPile)));
        //ask chatgpt
        console.log(props.gameState);
    }
    return (
        <div className="card-animation-container">
            <div className="card-face-up-container"></div>
            <div className="card-face-down-deck-container" onClick={() => handleMainDeckClick()}></div>
        </div>
    )
}

