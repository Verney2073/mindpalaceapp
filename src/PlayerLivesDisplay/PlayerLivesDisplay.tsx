import { gameStates } from "../ApiClient/ApiClient";
import "./PlayerLivesDisplay.css"
import { HeartIcon } from "./HeartIcon";

export function PlayerLivesDisplay(props: {
    gameState: gameStates,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
}) {
    function handleLifeClick(lifeClicked: number, gameState: gameStates) {
        if (gameState === (gameStates.gameNotOn || gameStates.seeCardsPhase)) {
            props.setPlayerLives(lifeClicked);
            console.log("I was clicked. Lives are set to: " + props.playerLives)
        }
    }
    if (props.gameState == gameStates.recallPhase || gameStates.endOfGamePhase) 
        return (
            <div className="game-settings-lives-container">
                <div className="heart-icon-container" onClick={() => handleLifeClick(1, props.gameState)}>
                    <HeartIcon activeHeart={props.playerLives > 0 ? true : false}
                        gameState={props.gameState} />
                </div>
                <div className="heart-icon-container" onClick={() => handleLifeClick(2, props.gameState)}>
                    <HeartIcon activeHeart={props.playerLives > 1 ? true : false}
                        gameState={props.gameState} />
                </div>
                <div className="heart-icon-container" onClick={() => handleLifeClick(3, props.gameState)}>
                    <HeartIcon activeHeart={props.playerLives > 2 ? true : false}
                        gameState={props.gameState} />
                </div>
                <div className="heart-icon-container" onClick={() => handleLifeClick(4, props.gameState)}>
                    <HeartIcon activeHeart={props.playerLives > 3 ? true : false}
                        gameState={props.gameState} />
                </div>
            </div >
        )
        return (
            <></>
        )
}
