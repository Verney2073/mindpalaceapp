import { useState, useEffect } from 'react'
import './App.css'
import { flipCard } from './CardCreationsInteractions';
//why can't I use gameStates now as the type of GameState
import gameStates from './App'

export function GameLiveScorePanel(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    currentCount: number,
    setCurrentCount: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    seenCardsPile: string[],
}): JSX.Element {

    useEffect(() => {

        if (props.gameState === "seeCardsPhase" && props.currentCount >= 0 && props.seeCardsTimer >= 0) {
            const intervalId = setInterval(
                () => {
                    props.currentCount === 0 ? props.setCurrentCount(props.seeCardsTimer) : props.setCurrentCount(props.currentCount - 1);
                    //run PhaseCheck function here to move us on to the recallPhase 
                    console.log("props.cardsToRecall is returning " + props.cardsToRecall + " in GameLiveScorePanel")
                    console.log("props.seeCardsTimer is equal to " + props.seeCardsTimer)
                    if (props.cardsToRecall === props.seenCardsPile.length) {
                        props.setGameState("recallPhase")
                    }

                }, 1000);

            return () => clearInterval(intervalId);
        }

    }, [props.gameState, props.currentCount, props.cardsToRecall, props.seeCardsTimer]);

    return (
        <div className="game-live-score-panel-container">
            <div className="see-cards-countdown-container">
                <span id={props.seeCardsTimer === -1 ? "see-card-countdown-hidden" : "see-cards-countdown"}
                > {props.currentCount} </span>
            </div>
            <br></br>
            <button onClick={() => props.setGameState("gameNotOn")}>Emergency Reset</button>
        </div>
    )
}