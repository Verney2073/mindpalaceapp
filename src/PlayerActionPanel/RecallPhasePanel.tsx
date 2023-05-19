import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi";
import { gameStates } from "../ApiClient/ApiClient";
import { useContext, useState } from 'react';
import { RecallPhaseGuessPrompts } from "../RecallPhaseGuessPrompts/RecallPhaseGuessPrompts";
import { appContext } from "../App";

export function RecallPhasePanel() {
  const [selectedOption, setSelectedOption] = useState("");
  const [guess, setGuess] = useState("");

  const {
    seenCardsPile,
    setUserRecallCard,
    setSkippedCards,
    setGameState,
    setPlayerScore,
    playerLives,
    setPlayerLives,
    gameState,
    userRecallCard
  } = useContext(appContext);

  function generateRecallPanelIcon(suit: string) {
    switch (suit) {
      case "D":
        return <GiDiamonds className="recall-phase-cards-icon" />;
      case "S":
        return <GiSpades className="recall-phase-cards-icon" />;
      case "H":
        return <GiHearts className="recall-phase-cards-icon" />;
      case "C":
        return <GiClubs className="recall-phase-cards-icon" />;
    }
  }

  function generateRecallPanelRow(suit: string) {
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    return (
      <tr>
        <th className="recall-phase-icon-square">
          {generateRecallPanelIcon(suit)}
        </th>
        {ranks.map((rank) => (
          <th
            key={rank}
            className={`recall-phase-cards-option ${selectedOption === rank + suit ? "selected" : ""}`}
            onClick={() => {
              setUserRecallCard(rank + suit);
              setSelectedOption(rank + suit);
            }}
          >
            {rank}
          </th>
        ))}
      </tr>
    );
  }

  function handleSkipCard() {
    seenCardsPile.shift();
    setSkippedCards((prevSkippedCards) => prevSkippedCards + 1);
    if (seenCardsPile.length === 0) {
      setGuess("");
      setGameState(gameStates.endOfGamePhase);
    }
  }

  function handleUserRecallGuess(userRecallCard: string) {
    if (gameState === gameStates.recallPhase) {
      if (userRecallCard === seenCardsPile[0]) {
        setGuess("correct");
        seenCardsPile.shift();
        setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
      } else if (userRecallCard === "") {
        alert("Select the card you want to guess from the grid below the playing area");
      } else if (playerLives === 1) {
        setGuess("");
        setPlayerLives(0);
        setGameState(gameStates.endOfGamePhase);
        alert("You're out of lives!");
      } else {
        setGuess("incorrect");
        setPlayerLives((prevPlayerLives) => prevPlayerLives - 1);
      }
    }
    if (seenCardsPile.length === 0) {
      setGuess("");
      setGameState(gameStates.endOfGamePhase);
    }
  }

  return (
    <div>
      <RecallPhaseGuessPrompts guess={guess} />
      <div className="recall-phase-top-menu">
        <button
          className="recall-phase-menu-button"
          onClick={() => handleUserRecallGuess(userRecallCard)}
        >
          Submit guess
        </button>
        <button className="recall-phase-menu-button" onClick={handleSkipCard}>
          Skip Card
        </button>
      </div>
      <div className="recall-phase-cards-section">
        <table className="recall-phase-cards-table">
          <tbody>
            {generateRecallPanelRow("D")}
            {generateRecallPanelRow("C")}
            {generateRecallPanelRow("H")}
            {generateRecallPanelRow("S")}
          </tbody>
        </table>
      </div>
    </div>
  );
}
