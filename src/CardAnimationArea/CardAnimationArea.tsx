import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css'
import './CardAnimationArea.css'
import { createDeck, flipCard, shuffleDeck } from '../CardCreationInteractions/CardCreationsInteractions'
import { gameStates } from '../ApiClient/ApiClient';
import { CardAnimationPrompts } from '../CardAnimationPrompts/CardAnimationPrompts';

export function CardAnimationArea(props: {
    gameState: gameStates,
    setGameState: React.Dispatch<React.SetStateAction<gameStates>>
    cardsToRecall: number;
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>
    seenCardsPile: string[];
    setSeenCardsPile: React.Dispatch<React.SetStateAction<string[]>>
    currentCount: number,
    setCurrentCount: React.Dispatch<React.SetStateAction<number>>,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>
    seeCardsTimer: number,
    skippedCards: number,
    playerScore: number,

}) {
    //When I remove string1, string 2 'ourShuffledDeck' below complains. But not with seenCardsPile. Why?
    let [activeDeck, setActiveDeck] = useState(['string1', 'string2']);
    let [cardsFlipped, setCardsFlipped] = useState(false)
    let [ourCurrentCardSuit, setourCurrentCardSuit] = useState("");
    let [ourCurrentCardRank, setourCurrentCardRank] = useState("");

    async function displayCardFace(ourCard) {
        document.getElementById('card-face-up').className = "playing-card-front";
        // document.getElementById("card-face-up").innerHTML = ourCard.suitIcon + ourCard.cardRank; //add cardRank as well
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
        if (props.cardsToRecall > 0) {
            if (props.gameState === gameStates.gameNotOn) {
                props.setGameState(gameStates.seeCardsPhase)
                console.log("the game has started!");
                let ourShuffledDeck = shuffleDeck(createDeck());
                setActiveDeck(ourShuffledDeck);
                //prompt the user to click again if they are in the 'onclick' mode 
            }
            if (props.gameState === gameStates.seeCardsPhase && props.seeCardsTimer == -1) {
                if (props.cardsToRecall === props.seenCardsPile.length) props.setGameState(gameStates.recallPhase);

                let ourCard = flipCard(activeDeck, props.seenCardsPile, props.cardsToRecall);
                // show the visuals of the card
                displayCardFace(ourCard);
            }
        } else {
            alert("Set cards to recall to a value between 1 and 52")
        }
    }

    useEffect(() => {
        if (props.currentCount === 0) {
            if (props.cardsToRecall === props.seenCardsPile.length) {
                props.setGameState(gameStates.recallPhase)
            }
            let ourCard = flipCard(activeDeck, props.seenCardsPile, props.cardsToRecall);
            displayCardFace(ourCard); //add cardRank as well

        }
    }, [props.currentCount]);

    return (
        <div className="card-animation-container">
            <div className=
                {`card-face-up-container ${(props.gameState == gameStates.gameNotOn || (props.gameState == gameStates.seeCardsPhase && props.seeCardsTimer === -1))
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
                <div className={`playing-card-back ${props.gameState == gameStates.gameNotOn ? "playing-card-clickable" : ""}`} >
                </div>
            </div>
            <div className="card-animation-prompt-container">
                <CardAnimationPrompts
                    gameState={props.gameState}
                    cardsToRecall={props.cardsToRecall}
                    seenCardsPile={props.seenCardsPile}
                    currentCount={props.currentCount}
                    playerLives={props.playerLives}
                    setPlayerLives={props.setPlayerLives}
                    skippedCards={props.skippedCards}
                    playerScore={props.playerScore}
                    seeCardsTimer={props.seeCardsTimer}
                />
            </div>
        </div>
    )
}

