import { gameStates } from '../ApiClient/ApiClient'
import './EndOfGameScoresPanel.css'

export function EndOfGameScoresPanel(props: {
    cardsToRecall: number
    gameState: gameStates
}) {
    return (
        <div>
            <div className=
                {props.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                <p>Congrats!</p>
                <p>You correctly recalled {props.cardsToRecall} cards!! </p>
            </div>
        </div>
    )
}
