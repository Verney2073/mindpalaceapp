import {  useEffect } from 'react'
import '../App.css'
import './GameLiveScorePanel.css'
import { gameStates } from '../ApiClient/ApiClient';

export function GameLiveScorePanel(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<gameStates>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    currentCount: number,
    setCurrentCount: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    seenCardsPile: string[],
}): JSX.Element {

    useEffect(() => {
        if (props.gameState === gameStates.seeCardsPhase && props.currentCount >= 0 && props.seeCardsTimer >= 0) {
            const intervalId = setInterval(
                () => {
                    props.currentCount === 0 ? props.setCurrentCount(props.seeCardsTimer) : props.setCurrentCount(props.currentCount - 1);
                    //run PhaseCheck function here to move us on to the recallPhase 
                    console.log("props.cardsToRecall is returning " + props.cardsToRecall + " in GameLiveScorePanel")
                    console.log("props.seeCardsTimer is equal to " + props.seeCardsTimer)
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
            <button id="reset-button" 
            className={`${props.gameState !== gameStates.recallPhase ? "non-recall" : "recall"}`} onClick={() => props.setGameState(gameStates.gameNotOn)}>Restart Game</button>
        </div>
    )
}
