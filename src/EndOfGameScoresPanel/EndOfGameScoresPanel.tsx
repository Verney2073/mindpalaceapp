import { gameStates } from '../ApiClient/ApiClient'
import { PlayerLivesDisplay } from '../PlayerLivesDisplay/PlayerLivesDisplay'
import './EndOfGameScoresPanel.css'

export function EndOfGameScoresPanel(props: {
    playerScore: number,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    gameState: gameStates
}) {
    if (props.playerLives > 0) {
        return (
            <div>
                <div className=
                    {props.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                    <PlayerLivesDisplay
                        gameState={props.gameState}
                        playerLives={props.playerLives}
                        setPlayerLives={props.setPlayerLives}
                    />
                    <p className="eog-text-item">Congrats!</p>
                    <p className="eog-text-item">You correctly recalled {props.playerScore} / {props.cardsToRecall} cards </p>
                </div>
            </div>
        )
    }
    else if (props.playerLives === 0) {
        return (
            <div>
                <div className=
                    {props.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                    <PlayerLivesDisplay
                        gameState={props.gameState}
                        playerLives={props.playerLives}
                        setPlayerLives={props.setPlayerLives}
                    />
                    <p className="eog-text-item">You ran out of lives :(</p>
                    <p className="eog-text-item">You correctly recalled {props.playerScore} / {props.cardsToRecall} cards </p>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}
