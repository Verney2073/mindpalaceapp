import { gameStates } from '../ApiClient/ApiClient'
import { appContext } from '../App'
import { PlayerLivesDisplay } from '../PlayerLivesDisplay/PlayerLivesDisplay'
import './EndOfGameScoresPanel.css'
import { useContext } from 'react'

export function EndOfGameScoresPanel() {

    const compContext = useContext(appContext)

    if (compContext.playerLives > 0) {
        return (
            <div>
                <div className=
                    {compContext.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                    <PlayerLivesDisplay
                    />
                    <p className="eog-text-item">Congrats!</p>
                    <p className="eog-text-item">You correctly recalled {compContext.playerScore} / {compContext.cardsToRecall} cards </p>
                </div>
            </div>
        )
    }
    else if (compContext.playerLives === 0) {
        return (
            <div>
                <div className=
                    {compContext.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                    <PlayerLivesDisplay
                    />
                    <p className="eog-text-item">You ran out of lives :(</p>
                    <p className="eog-text-item">You correctly recalled {compContext.playerScore} / {compContext.cardsToRecall} cards </p>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}
