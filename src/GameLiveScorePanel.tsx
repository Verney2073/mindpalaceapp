import { useState, useEffect } from 'react'
import './App.css'

export function GameLiveScorePanel(props: {
    gameState: string
}) {
    //props from the user action panel should determine the default value of useState
    const [seeCardsTimer, setSeeCardsTimer] = useState(5);


    useEffect(() => {
        if (props.gameState === "seeCardsPhase" && seeCardsTimer > 0) {
            const intervalId = setInterval(
                () => {
                    setSeeCardsTimer(seeCardsTimer - 1)
                }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [props.gameState, seeCardsTimer]);

    return (
        <div className="game-live-score-panel-container">
            <div className="see-cards-countdown-container">
                <span id="see-cards-countdown"> {seeCardsTimer} </span>
            </div>
            <button onClick={() => setSeeCardsTimer(5)}></button>
        </div>
    )
}