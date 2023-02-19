import { useState, useEffect } from 'react'
import './App.css'
import { flipCard } from './CardCreationsInteractions';

export function GameLiveScorePanel(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>
}) {
    //props from the user action panel should determine the default value of useState
    const [currentCount, setcurrentCount] = useState(props.seeCardsTimer)
    useEffect(() => {

        if (props.gameState === "seeCardsPhase" && currentCount >= 0) {
            const intervalId = setInterval(
                () => {
                    currentCount === 0 ? setcurrentCount(props.seeCardsTimer) : setcurrentCount(currentCount - 1);
                }, 1000);
            return () => clearInterval(intervalId);
        }

    }, [props.gameState, currentCount]);

    return (
        <div className="game-live-score-panel-container">
            <div className="see-cards-countdown-container">
                <span id="see-cards-countdown"> {currentCount} </span>
            </div>
            <button onClick={() => props.setSeeCardsTimer(5)}></button>
            <br></br>
            <button onClick={() => props.setGameState("gameNotOn")}></button>
        </div>
    )
}