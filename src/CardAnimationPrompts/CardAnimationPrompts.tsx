import { gameStates } from "../ApiClient/ApiClient";
import { PlayerLivesDisplay } from "../PlayerLivesDisplay/PlayerLivesDisplay";
import "./CardAnimationPrompts.css"

export function CardAnimationPrompts(props: {
    gameState: string,
    cardsToRecall: number;
    seenCardsPile: string[];
    currentCount: number,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>
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
                <p className="seen-cards">Cards seen: {props.seenCardsPile.length}/{props.cardsToRecall}</p>
                {props.seenCardsPile.length == props.cardsToRecall && (<p>Last one!</p>
                )}
            </div>
        )
    }
    if (props.gameState == gameStates.recallPhase) {
        return (
            <div id="card-animation-prompts">
                <p>Cards recalled: {props.cardsToRecall - props.seenCardsPile.length}/{props.cardsToRecall}</p>
                {/* {props.cardsToRecall == props.seenCardsPile.length && (<p>When you’re ready, recall the first card from the deck and submit below…</p>)} */}
                <p>Cards skipped: TBD </p>
                <PlayerLivesDisplay
                    playerLives={props.playerLives}
                    setPlayerLives={props.setPlayerLives}
                    gameState={props.gameState} />
            </div>
        )
    }
}