import '../App.css';
import './PlayerActionPanel.css';
import { useContext, useEffect, useState } from 'react';
import { gameStates } from '../ApiClient/ApiClient';
import { PlayerLivesDisplay } from '../PlayerLivesDisplay/PlayerLivesDisplay';
import { RecallPhasePanel } from './RecallPhasePanel';
import { appContext } from '../App';

export function PlayerActionPanel() {
  const [selectedSeeNextCard, setSelectedSeeNextCard] = useState("On Click");

  const {
    seenCardsPile,
    gameState,
    setSeeCardsTimer,
    setCurrentCount,
    setGameState,
    cardsToRecall,
    setCardsToRecall
  } = useContext(appContext);

  function updateTimer(newTime: number) {
    setSeeCardsTimer(newTime);
    setCurrentCount(newTime);
  }

  useEffect(() => {
    if (seenCardsPile.length === 1 && gameState === gameStates.endOfGamePhase)
      setGameState(gameStates.endOfGamePhase);
  }, [seenCardsPile]);

  return (
    <div className={`player-action-panel-container ${gameState !== gameStates.recallPhase ? "margin-boost" : "margin-regular"}`}>
      <ul className={gameState === gameStates.recallPhase ? "game-settings-panel-hidden" : "game-settings-panel"}>
        <li className='game-settings-item'>
          <span className="game-settings-title">See Next Card: </span>
          <span className='game-settings-option-buttons'>
            <span
              className={`game-settings-option-button ${selectedSeeNextCard === "On Click" ? "selected" : ""}`}
              onClick={() => {
                setSeeCardsTimer(-1);
                setSelectedSeeNextCard("On Click");
              }}
            >
              On Click
            </span>
            <span
              onClick={() => {
                updateTimer(3);
                setSelectedSeeNextCard("3s");
              }}
              className={`game-settings-option-button ${selectedSeeNextCard === "3s" ? "selected" : ""}`}
            >
              3s
            </span>
            <span
              onClick={() => {
                updateTimer(5);
                setSelectedSeeNextCard("5s");
              }}
              className={`game-settings-option-button ${selectedSeeNextCard === "5s" ? "selected" : ""}`}
            >
              5s
            </span>
            <span
              onClick={() => {
                updateTimer(10);
                setSelectedSeeNextCard("10s");
              }}
              className={`game-settings-option-button ${selectedSeeNextCard === "10s" ? "selected" : ""}`}
            >
              10s
            </span>
            <span
              onClick={() => {
                updateTimer(30);
                setSelectedSeeNextCard("30s");
              }}
              className={`game-settings-option-button ${selectedSeeNextCard === "30s" ? "selected" : ""}`}
            >
              30s
            </span>
          </span>
        </li><br></br>
        <li className='game-settings-item'>
          <label className="game-settings-title">Cards to recall:</label>
          <input
            type="number"
            id="number-to-recall"
            name="number-to-recall"
            min="1"
            max="52"
            value={cardsToRecall > 0 ? cardsToRecall : ""}
            onChange={(e) => {
              if (parseInt(e.target.value) <= 52) {
                setCardsToRecall(parseInt(e.target.value));
              } else if (e.target.value === "") {
                setCardsToRecall(0);
              } else {
                alert("The maximum number of cards that can be shown is 52");
              }
            }}
          ></input>
        </li><br></br>
        <li className='game-settings-item'>
          <label className="game-settings-title">Lives: </label>
          <div className="game-settings-lives-outer-container">
            <PlayerLivesDisplay />
          </div>
        </li> <br></br>
      </ul>
      <div className={gameState === gameStates.recallPhase ? "recall-phase-panel" : "recall-phase-panel-hidden"}>
        <RecallPhasePanel />
      </div>
    </div>
  );
}
