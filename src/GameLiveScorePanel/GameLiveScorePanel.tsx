import { useContext, useEffect } from 'react';
import '../App.css';
import './GameLiveScorePanel.css';
import { gameStates } from '../ApiClient/ApiClient';
import { appContext } from '../App';

export function GameLiveScorePanel(): JSX.Element {
  const {
    gameState,
    currentCount,
    seeCardsTimer,
    setCurrentCount,
    cardsToRecall,
    setGameState,
  } = useContext(appContext);

  useEffect(() => {
    if (
      gameState === gameStates.seeCardsPhase &&
      currentCount >= 0 &&
      seeCardsTimer >= 0
    ) {
      const intervalId = setInterval(() => {
        setCurrentCount((prevCurrentCount) =>
          prevCurrentCount === 0 ? seeCardsTimer : prevCurrentCount - 1
        );
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [gameState, currentCount, cardsToRecall, seeCardsTimer, setCurrentCount]);

  return (
    <div className="game-live-score-panel-container">
      <div className="see-cards-countdown-container">
        <span
          id={seeCardsTimer === -1 ? "see-card-countdown-hidden" : "see-cards-countdown"}
        >
          {currentCount}
        </span>
      </div>
      <button
        id="reset-button"
        className={`${gameState !== gameStates.recallPhase ? "non-recall" : "recall"}`}
        onClick={() => setGameState(gameStates.gameNotOn)}
      >
        Restart Game
      </button>
    </div>
  );
}
