import { gameStates } from "../ApiClient/ApiClient";
import { EndOfGameScoresPanel } from "../EndOfGameScoresPanel/EndOfGameScoresPanel";
import { PlayerLivesDisplay } from "../PlayerLivesDisplay/PlayerLivesDisplay";
import "./CardAnimationPrompts.css"

export function CardAnimationPrompts(props: {
    gameState: string,
    cardsToRecall: number;
    seenCardsPile: string[];
    currentCount: number,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>
    skippedCards: number,
    playerScore:number,
}) {
    if (props.gameState == gameStates.gameNotOn) {
        return (
            <div id="card-animation-prompts">
                <p className="prompt-text"> Set game options Below. </p>
                <p>  When you're ready, click the deck to begin. </p>
            </div>
        )
    }
    if (props.gameState == gameStates.seeCardsPhase) {
        return (
            <div id="card-animation-prompts">
                <p className="seen-cards">Cards: {props.seenCardsPile.length}/{props.cardsToRecall}</p>
                {props.seenCardsPile.length == props.cardsToRecall && (<p>Last one!</p>
                )}
            </div>
        )
    }
    if (props.gameState == gameStates.recallPhase) {
        return (
            <div id="card-animation-prompts">
                <p>Cards recalled: {props.cardsToRecall - props.seenCardsPile.length}/{props.cardsToRecall}</p>
                <p>Cards skipped: {props.skippedCards} </p>
                <PlayerLivesDisplay
                    playerLives={props.playerLives}
                    setPlayerLives={props.setPlayerLives}
                    gameState={props.gameState} />
            </div>
        )
    }
    if (props.gameState == gameStates.endOfGamePhase) {
        return (
            <EndOfGameScoresPanel
            playerScore={props.playerScore}
            playerLives={props.playerLives}
            setPlayerLives={props.setPlayerLives}
            cardsToRecall={props.cardsToRecall}
            gameState={props.gameState} /> 
        )
    }
}