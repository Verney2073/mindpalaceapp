import '../App.css'
import './PlayerActionPanel.css'
import { useEffect, useState } from 'react';
import { gameStates } from '../ApiClient/ApiClient';
import { PlayerLivesDisplay } from '../PlayerLivesDisplay/PlayerLivesDisplay';
import { RecallPhasePanel } from './RecallPhasePanel';

export function PlayerActionPanel(props: {
    gameState: gameStates,
    setGameState: React.Dispatch<React.SetStateAction<gameStates>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    userRecallCard: string,
    setUserRecallCard: React.Dispatch<React.SetStateAction<string>>,
    seenCardsPile: string[]
    setcurrentCount: React.Dispatch<React.SetStateAction<number>>,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
    playerScore: number,
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
    skippedCards: number,
    setSkippedCards: React.Dispatch<React.SetStateAction<number>>
}) {
    const [selectedSeeNextCard, setSelectedSeeNextCard] = useState("On Click");

    function updateTimer(newTime: number) {
        props.setSeeCardsTimer(newTime);
        props.setcurrentCount(newTime);
    }

    useEffect(() => { // ?? What is this doing? Seems to be taking us to the endOfGamePhase but has a parameter to check for endOfGamePhase?
        if (props.seenCardsPile.length === 1 && props.gameState === gameStates.endOfGamePhase) props.setGameState(gameStates.endOfGamePhase);
    }, [props.seenCardsPile])

    return (
        <div className={`player-action-panel-container ${props.gameState != gameStates.recallPhase ? "margin-boost" : "margin-regular"}`}>
            <ul className=
                {props.gameState === gameStates.recallPhase ? "game-settings-panel-hidden" : "game-settings-panel"}>
                <li className='game-settings-item'>
                    <span className="game-settings-title">See Next Card: </span>
                    <span className='game-settings-option-buttons'>
                        <span className={`game-settings-option-button ${selectedSeeNextCard === "On Click" ? "selected" : ""
                            }`}
                            onClick={function () { props.setSeeCardsTimer(-1), setSelectedSeeNextCard("On Click") }}>On Click</span>
                        <span onClick={function () { updateTimer(3), setSelectedSeeNextCard("3s") }}
                            className={`game-settings-option-button ${selectedSeeNextCard === "3s" ? "selected" : ""
                                }`}> 3s</span>
                        <span onClick={function () { updateTimer(5), setSelectedSeeNextCard("5s") }}
                            className={`game-settings-option-button ${selectedSeeNextCard === "5s" ? "selected" : ""
                                }`}> 5s</span>
                        <span onClick={function () { updateTimer(10), setSelectedSeeNextCard("10s") }}
                            className={`game-settings-option-button ${selectedSeeNextCard === "10s" ? "selected" : ""
                                }`}> 10s</span>
                        <span onClick={function () { updateTimer(30), setSelectedSeeNextCard("30s") }}
                            className={`game-settings-option-button ${selectedSeeNextCard === "30s" ? "selected" : ""
                                }`}> 30s</span>
                    </span>
                </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Cards to recall:</label>
                    <input type="number" id="number-to-recall"
                        name="number-to-recall" min="1" max="52"
                        value={props.cardsToRecall > 0 ? props.cardsToRecall : ""}
                        onChange={e =>  {
                            if (parseInt(e.target.value) <= 52) {
                                props.setCardsToRecall(parseInt(e.target.value))
                            } else if (e.target.value === "") {
                                props.setCardsToRecall(0);
                            } else {
                                alert("The maximum number of cards that can be shown is 52")
                            }
                        }}
                    ></input> </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Lives: </label>
                    <div className="game-settings-lives-outer-container">
                        <PlayerLivesDisplay
                            playerLives={props.playerLives}
                            setPlayerLives={props.setPlayerLives}
                            gameState={props.gameState} />
                    </div>
                </li> <br></br>
            </ul>
            <div className=
                {props.gameState === gameStates.recallPhase ? "recall-phase-panel" : "recall-phase-panel-hidden"}>
                <RecallPhasePanel
                    gameState={props.gameState}
                    seeCardsTimer={props.seeCardsTimer} setSeeCardsTimer={props.setSeeCardsTimer}
                    cardsToRecall={props.cardsToRecall} setCardsToRecall={props.setCardsToRecall}
                    userRecallCard={props.userRecallCard}
                    setUserRecallCard={props.setUserRecallCard}
                    seenCardsPile={props.seenCardsPile}
                    setGameState={props.setGameState}
                    setcurrentCount={props.setcurrentCount}
                    playerLives={props.playerLives}
                    setPlayerLives={props.setPlayerLives}
                    playerScore={props.playerScore}
                    setPlayerScore={props.setPlayerScore}
                    skippedCards={props.skippedCards}
                    setSkippedCards={props.setSkippedCards}
                />
            </div>
        </div>
    )
}
