import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css'
import './CardAnimationArea.css'
import { createDeck, flipCard, gameStateCheck, shuffleDeck } from '../CardCreationInteractions/CardCreationsInteractions'
import { GiCardDraw } from 'react-icons/gi';
import { gameStates } from '../ApiClient/ApiClient';


export function CardAnimationArea(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>
    cardsToRecall: number;
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>
    seenCardsPile: string[];
    setSeenCardsPile: React.Dispatch<React.SetStateAction<string[]>>
    currentCount: number,
    setCurrentCount: React.Dispatch<React.SetStateAction<number>>,

}) {
    //When I remove string1, string 2 'ourShuffledDeck' below complains. But not with seenCardsPile. Why?
    let [activeDeck, setActiveDeck] = useState(['string1', 'string2']);
    let [cardsFlipped, setCardsFlipped] = useState(false)
    let [ourCurrentCardSuit, setourCurrentCardSuit] = useState("");
    let [ourCurrentCardRank, setourCurrentCardRank] = useState("");

    //load this in as a component only after the game starts?

    async function displayCardFace(ourCard) {
        document.getElementById('card-face-up').className = "playing-card-front";
        // document.getElementById("card-face-up").innerHTML = ourCard.suitIcon + ourCard.cardRank; //add cardRank as well
        setCardsFlipped(true);
        setourCurrentCardRank(ourCard.cardRank);
        setourCurrentCardSuit(ourCard.suitIcon);
        document.getElementById("card-center-temp").style.color = ourCard.iconColor;
        document.getElementById("card-top-left-temp").style.color = ourCard.iconColor;
        document.getElementById("card-bottom-right-temp").style.color = ourCard.iconColor;
        document.getElementById("card-center-temp").style.display = "block";
        document.getElementById("card-top-left-temp").style.display = "block";
        document.getElementById("card-bottom-right-temp").style.display = "block";
    }

    async function handleMainDeckClick() {
        if (props.gameState === "gameNotOn") {
            props.setGameState("seeCardsPhase")
            console.log("the game has started!");
            let ourShuffledDeck = shuffleDeck(createDeck());
            setActiveDeck(ourShuffledDeck);
            //prompt the user to click again if they are in the 'onclick' mode 

        }
        if (props.gameState === "seeCardsPhase") {
            let ourCard = flipCard(activeDeck, props.seenCardsPile, props.cardsToRecall);

            // show the visuals of the card
            displayCardFace(ourCard);
            if (props.cardsToRecall === props.seenCardsPile.length) {
                props.setGameState(gameStates.recallPhase)
            }
        }
    }

    useEffect(() => {
        if (props.currentCount === 0) {
            let ourCard = flipCard(activeDeck, props.seenCardsPile, props.cardsToRecall);
            displayCardFace(ourCard); //add cardRank as well
            if (props.cardsToRecall === props.seenCardsPile.length) {
                props.setGameState("recallPhase")
            }
        }
    }, [props.currentCount]);

    return (
        <div className="card-animation-container">
            <div className="card-face-up-container">
                <div className='playing-card-back' id='card-face-up' >
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
                <div className="playing-card-back" ></div>
            </div>
            <div className="card-start-game-button-container">
                <div className="card-start-game-button"
                    onClick={() => handleMainDeckClick()}>
                </div>
                <p className="card-start-game-message">Start game and memorise 5 cards</p>
            </div>
        </div>
    )
}

