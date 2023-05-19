import { gameStates } from "../ApiClient/ApiClient";
import "./PlayerLivesDisplay.css";
import { HeartIcon } from "./HeartIcon";
import { appContext } from "../App";
import { useContext } from "react";

export function PlayerLivesDisplay() {
  const {
    gameState,
    setPlayerLives,
    playerLives
  } = useContext(appContext);

  function handleLifeClick(lifeClicked:number) {
    if (gameState === gameStates.gameNotOn || gameState === gameStates.seeCardsPhase) 
      setPlayerLives(lifeClicked);
  }

  if (gameState === gameStates.recallPhase || gameState === gameStates.endOfGamePhase) {
    return (
      <div className="game-settings-lives-container">
        <div
          className="heart-icon-container"
          onClick={() => handleLifeClick(1)}
        >
          <HeartIcon
            activeHeart={playerLives > 0 ? true : false}
          />
        </div>
        <div
          className="heart-icon-container"
          onClick={() => handleLifeClick(2)}
        >
          <HeartIcon
            activeHeart={playerLives > 1 ? true : false}
          />
        </div>
        <div
          className="heart-icon-container"
          onClick={() => handleLifeClick(3)}
        >
          <HeartIcon
            activeHeart={playerLives > 2 ? true : false}
          />
        </div>
        <div
          className="heart-icon-container"
          onClick={() => handleLifeClick(4)}
        >
          <HeartIcon
            activeHeart={playerLives > 3 ? true : false}
          />
        </div>
      </div>
    );
  }

  return <></>;
}
