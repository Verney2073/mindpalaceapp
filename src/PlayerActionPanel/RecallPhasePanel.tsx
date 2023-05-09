import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi";
import { gameStates } from "../ApiClient/ApiClient";
import { useState } from "react";
import { RecallPhaseGuessPrompts } from "../RecallPhaseGuessPrompts/RecallPhaseGuessPrompts";

export function RecallPhasePanel(props: {
  gameState: gameStates;
  setGameState: React.Dispatch<React.SetStateAction<gameStates>>;
  seeCardsTimer: number;
  setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>;
  cardsToRecall: number;
  setCardsToRecall: React.Dispatch<React.SetStateAction<number>>;
  userRecallCard: string;
  setUserRecallCard: React.Dispatch<React.SetStateAction<string>>;
  seenCardsPile: string[];
  setcurrentCount: React.Dispatch<React.SetStateAction<number>>;
  playerLives: number;
  setPlayerLives: React.Dispatch<React.SetStateAction<number>>;
  playerScore: number;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  skippedCards: number;
  setSkippedCards: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [guess, setGuess] = useState("");

  function handleSkipCard() {
    props.seenCardsPile.shift();
    console.log("You have skipped this card");
    props.setSkippedCards(props.skippedCards + 1);
    if (props.seenCardsPile.length === 0) {
      setGuess("");
      props.setGameState(gameStates.endOfGamePhase);
    }
  }

  function handleUserRecallGuess(userRecallCard: string) {
    if (props.gameState === gameStates.recallPhase) {
      if (userRecallCard === props.seenCardsPile[0]) {
        setGuess("correct");
        props.seenCardsPile.shift();
        props.setPlayerScore(props.playerScore + 1);
        console.log("Your score is: " + props.playerScore);
      } else if (userRecallCard === "") {
        alert(
          "Select the card you want to guess from the grid below the playing area"
        );
      } else if (props.playerLives == 1) {
        setGuess("");
        props.setPlayerLives(0);
        props.setGameState(gameStates.endOfGamePhase);
        alert("You're out of lives!");
      } else {
        setGuess("incorrect");
        props.setPlayerLives(props.playerLives - 1);
      }
    }
    if (props.seenCardsPile.length === 0) {
      setGuess("");
      props.setGameState(gameStates.endOfGamePhase);
    }
  }
  const suits = ["D", "C", "H", "S"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  return (
    <div>
      <RecallPhaseGuessPrompts guess={guess} />
      <div className="recall-phase-top-menu">
        <button
          className="recall-phase-menu-button"
          onClick={function () {
            handleUserRecallGuess(props.userRecallCard);
          }}
        >
          Submit guess{" "}
        </button>
        <button
          className="recall-phase-menu-button"
          onClick={() => handleSkipCard()}
        >
          Skip Card
        </button>
      </div>
      <div className="recall-phase-cards-section">
        <table className="recall-phase-cards-table">
          <tbody>
            {suits.map((suit) => (
              <tr key={suit}>
                <th className="recall-phase-icon-square">
                  {suit === "D" ? (
                    <GiDiamonds className="recall-phase-cards-icon" />
                  ) : null}
                  {suit === "C" ? (
                    <GiClubs className="recall-phase-cards-icon" />
                  ) : null}
                  {suit === "H" ? (
                    <GiHearts className="recall-phase-cards-icon" />
                  ) : null}
                  {suit === "S" ? (
                    <GiSpades className="recall-phase-cards-icon" />
                  ) : null}
                </th>
                {ranks.map((rank) => (
                  <th
                    key={suit + rank}
                    className={`recall-phase-cards-option ${
                      selectedOption === rank + suit ? "selected" : ""
                    }`}
                    onClick={() => {
                      props.setUserRecallCard(rank + suit);
                      setSelectedOption(rank + suit);
                    }}
                  >
                    {rank}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
