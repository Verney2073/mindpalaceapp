import { gameStates } from '../ApiClient/ApiClient'
import './EndOfGameScoresPanel.css'

export function EndOfGameScoresPanel(props: {
    playerScore: number,
    playerLives: number,
    cardsToRecall: number,
    gameState: gameStates
}) {
    return (
        <div>
            <div className=
                {props.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                <p>Congrats!</p>
                <p>You correctly recalled {props.playerScore} {props.playerScore == 1 ? "card" : "cards"} out of {props.cardsToRecall} to guess </p>
                <p>You had {props.playerLives} {props.playerLives == 1 ? "life" : "lives"} remaining </p>
            </div>
        </div>
    )
}
