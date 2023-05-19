import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import '../App.css'
import './CardAnimationArea.css'
import { createDeck, flipCard, shuffleDeck } from '../CardCreationInteractions/CardCreationsInteractions'
import { gameStates } from '../ApiClient/ApiClient';
import { CardAnimationPrompts } from '../CardAnimationPrompts/CardAnimationPrompts';
import { appContext } from '../App';

export function CardAnimationArea() {
    //When I remove string1, string 2 'ourShuffledDeck' below complains. But not with seenCardsPile. Why?
    let [activeDeck, setActiveDeck] = useState(['string1', 'string2']);
    let [cardsFlipped, setCardsFlipped] = useState(false)
    let [ourCurrentCardSuit, setourCurrentCardSuit] = useState("");
    let [ourCurrentCardRank, setourCurrentCardRank] = useState("");

    const {
        gameState,
        setGameState,
        seeCardsTimer,
        cardsToRecall,
        seenCardsPile,
        currentCount,
    } = useContext(appContext);

    async function displayCardFace(ourCard) {
        document.getElementById('card-face-up').className = "playing-card-front";
        setCardsFlipped(true);
        setourCurrentCardRank(ourCard.cardRank);
        setourCurrentCardSuit(ourCard.suitIcon);
        var cardCentre = document.getElementById("card-center-temp")
        var cardTopLeft = document.getElementById("card-top-left-temp");
        var cardBottomRight = document.getElementById("card-bottom-right-temp");
        cardCentre.style.color = ourCard.iconColor;
        cardTopLeft.style.color = ourCard.iconColor;
        cardBottomRight.style.color = ourCard.iconColor;
        cardCentre.style.display = "block";
        if (ourCard.cardRank === "10") {
            cardCentre.style.left = "37.5%";
        }
        else if (ourCard.cardRank === "J" || 3) {
            cardCentre.style.left = "44%";
        }
        else {
            cardCentre.style.left = "42%";
        }
        cardTopLeft.style.display = "block";
        cardBottomRight.style.display = "block";
    }

    async function handleMainDeckClick() {
        if (cardsToRecall > 0) {
            if (gameState === gameStates.gameNotOn) {
                setGameState(gameStates.seeCardsPhase)
                let ourShuffledDeck = shuffleDeck(createDeck());
                setActiveDeck(ourShuffledDeck);
            }
            if (gameState === gameStates.seeCardsPhase && seeCardsTimer == -1) {
                if (cardsToRecall === seenCardsPile.length) setGameState(gameStates.recallPhase);
                let ourCard = flipCard(activeDeck, seenCardsPile, cardsToRecall);
                displayCardFace(ourCard);
            }
        } else {
            alert("Set cards to recall to a value between 1 and 52")
        }
    }

    useEffect(() => {
        if (currentCount === 0) {
            if (cardsToRecall === seenCardsPile.length) {
                setGameState(gameStates.recallPhase)
            }
            let ourCard = flipCard(activeDeck, seenCardsPile, cardsToRecall);
            displayCardFace(ourCard); //add cardRank as well

        }
    }, [currentCount]);

    return (
        <div className="card-animation-container">
            <div className=
                {`card-face-up-container ${(gameState == gameStates.gameNotOn || (gameState == gameStates.seeCardsPhase && seeCardsTimer === -1))
                    ? "playing-card-clickable"
                    : ""}`}>
                <div className="playing-card-back"
                    id='card-face-up'
                    onClick={() => handleMainDeckClick()} >
                    <div id="card-center-temp"
                    >{ourCurrentCardRank}</div>
                    <div id="card-top-left-temp">{ourCurrentCardSuit}
                    </div>
                    <div id="card-bottom-right-temp">{ourCurrentCardSuit}
                    </div>
                </div>
            </div>
            {/* Temporarily hiding face-down-deck-container as I am using only a single deck to display cards rn */}
            <div className="card-face-down-deck-container" >
                <div className={`playing-card-back ${gameState == gameStates.gameNotOn ? "playing-card-clickable" : ""}`} >
                </div>
            </div>
            <div className="card-animation-prompt-container">
                <CardAnimationPrompts />
            </div>
        </div>
    )
}

