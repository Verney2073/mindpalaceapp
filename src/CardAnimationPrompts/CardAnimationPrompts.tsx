import { useContext } from "react";
import { gameStates } from "../ApiClient/ApiClient";
import { EndOfGameScoresPanel } from "../EndOfGameScoresPanel/EndOfGameScoresPanel";
import { PlayerLivesDisplay } from "../PlayerLivesDisplay/PlayerLivesDisplay";
import "./CardAnimationPrompts.css";
import { appContext } from "../App";

export function CardAnimationPrompts() {
  const {
    gameState,
    seenCardsPile,
    cardsToRecall,
    seeCardsTimer,
    skippedCards
  } = useContext(appContext);

  if (gameState === gameStates.gameNotOn) {
    return (
      <div id="card-animation-prompts">
        <p className="prompt-text"> Set game options Below. </p>
        <p>  When you're ready, click the deck to begin. </p>
      </div>
    );
  }
  if (gameState === gameStates.seeCardsPhase) {
    return (
      <div id="card-animation-prompts">
        <p className="seen-cards">Cards: {seenCardsPile.length}/{cardsToRecall}</p>
        {seenCardsPile.length === 1 && (<p>Fix the card in your mind's eye...</p>)}
        {seenCardsPile.length === cardsToRecall && (<p>Last card...</p>)}
        {seenCardsPile.length === 0 && seeCardsTimer !== -1 && (<p>Get ready...</p>)}
        {seenCardsPile.length === 0 && seeCardsTimer === -1 && (<p>Focus your mind, then click again to begin... </p>)}
      </div>
    );
  }
  if (gameState === gameStates.recallPhase) {
    return (
      <div id="card-animation-prompts">
        <p>Cards recalled: {cardsToRecall - seenCardsPile.length}/{cardsToRecall}</p>
        <p>Cards skipped: {skippedCards} </p>
        <PlayerLivesDisplay />
      </div>
    );
  }
  if (gameState === gameStates.endOfGamePhase) {
    return <EndOfGameScoresPanel />;
  }
  return <></>;
}
