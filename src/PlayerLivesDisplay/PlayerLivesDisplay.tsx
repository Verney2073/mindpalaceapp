import { AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { gameStates } from "../ApiClient/ApiClient";
import "./PlayerLivesDisplay.css"



export function PlayerLivesDisplay(props: {
    gameState: gameStates,
    // setGameState: React.Dispatch<React.SetStateAction<gameStates>>,
    // seeCardsTimer: number,
    // setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    // cardsToRecall: number,
    // setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    // userRecallCard: string,
    // setUserRecallCard: React.Dispatch<React.SetStateAction<string>>,
    // seenCardsPile: string[]
    // setcurrentCount: React.Dispatch<React.SetStateAction<number>>,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
    // playerScore: number,
    // setPlayerScore: React.Dispatch<React.SetStateAction<number>>
}) {
    function handleLifeClick(lifeClicked: number, gameState: gameStates) {
        if (gameState == gameStates.gameNotOn || gameStates.seeCardsPhase) {
            props.setPlayerLives(lifeClicked);
            //When a life is clicked, that life and all those preceding it should be set to a value 
            //We could also implement this for hover functionality
            //n.b. the console log is always one behind the lives set due to asynchronicity
            console.log("I was clicked. Lives are set to: " + props.playerLives)
        }
    }

    const style = { color: "pink" }

    if (props.gameState == gameStates.recallPhase)
        return (
            <IconContext.Provider value={{ color: "pink", className: "active" }}>
                <div className="game-settings-lives-container">

                    <div className="game-settings-lives life-one">
                        <AiOutlineHeart
                            className={`game-settings-lives-icon ${props.playerLives > 0 ? "active" : ""}`} /></div>
                    <div className="game-settings-lives life-two">
                        <AiOutlineHeart
                            className={`game-settings-lives-icon ${props.playerLives > 1 ? "active" : ""}`}
                        /></div>
                    <div className="game-settings-lives life-three">
                        <AiOutlineHeart className={`game-settings-lives-icon ${props.playerLives > 2 ? "active" : ""}`} /></div>
                    <div className="game-settings-lives life-four">
                        <AiOutlineHeart className={`game-settings-lives-icon ${props.playerLives > 3 ? "active" : ""}`} /></div>

                </div>
            </IconContext.Provider>

        )

}