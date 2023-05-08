import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi";
import { gameStates } from "../ApiClient/ApiClient";
import { useEffect, useState } from 'react';


export function RecallPhasePanel(props: {
    gameState: gameStates,
    setGameState: React.Dispatch<React.SetStateAction<gameStates>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    userRecallCard: string,
    setUserRecallCard: React.Dispatch<React.SetStateAction<string>>,
    seenCardsPile: string[],
    setcurrentCount: React.Dispatch<React.SetStateAction<number>>,
    playerLives: number,
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
    playerScore: number,
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
    skippedCards: number,
    setSkippedCards: React.Dispatch<React.SetStateAction<number>>
}) {
    const [selectedOption, setSelectedOption] = useState("");

    function handleSkipCard() {
        props.seenCardsPile.shift();
        console.log("You have skipped this card");
        props.setSkippedCards(props.skippedCards + 1)
        props.seenCardsPile.length === 0 ? props.setGameState(gameStates.endOfGamePhase) : "";
    }

    function handleUserRecallGuess(userRecallCard: string) {
        if (props.gameState === gameStates.recallPhase) {
            if (userRecallCard === props.seenCardsPile[0]) {
                //we shouldn't really just pop out the seenCards - because we'll need them to save games later
                alert("Correct!")
                props.seenCardsPile.shift()
                //run a phase check - if no cards left to guess, move to end-of-game;
                props.setPlayerScore(props.playerScore + 1)
                console.log("Your score is: " + props.playerScore)

            } else if (userRecallCard === "") {
                alert("Select the card you want to guess from the grid below the playing area")
            } else if (props.playerLives == 1) {
                alert("You're out of lives!")
                props.setPlayerLives(0);
                props.setGameState(gameStates.endOfGamePhase);
            } else {
                alert("Oops! Wrong guess")
                props.setPlayerLives(props.playerLives - 1)
            }
        }
        props.seenCardsPile.length === 0 ? props.setGameState(gameStates.endOfGamePhase) : "";
    }
    return (
        <div>
            <div className="recall-phase-top-menu">
                <button className="recall-phase-menu-button"
                    onClick={function () {
                        handleUserRecallGuess(props.userRecallCard);
                        console.log("length of seenCardsPile is equal to:" + props.seenCardsPile.length);
                        //did I move this out of the handleUserRecallGuess func due to async issues?
                        // props.seenCardsPile.length === 0 ? props.setGameState(gameStates.endOfGamePhase) : "";
                    }}>
                    Submit guess </button>
                <button className="recall-phase-menu-button" onClick={() => handleSkipCard()}>Skip Card</button>
            </div>
            <div className="recall-phase-cards-section">
                <table className='recall-phase-cards-table'>
                    <tbody>
                        <tr>
                            <th className="recall-phase-icon-square"><GiDiamonds className="recall-phase-cards-icon" /></th>
                            <th className={`recall-phase-cards-option ${selectedOption === "AD" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("AD"), setSelectedOption("AD") }}>A</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "2D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("2D"), setSelectedOption("2D") }}>2</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "3D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("3D"), setSelectedOption("3D") }}>3</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "4D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("4D"), setSelectedOption("4D") }}>4</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "5D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("5D"), setSelectedOption("5D") }}>5</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "6D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("6D"), setSelectedOption("6D") }}>6</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "7D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("7D"), setSelectedOption("7D") }}>7</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "8D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("8D"), setSelectedOption("8D") }}>8</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "9D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("9D"), setSelectedOption("9D") }}>9</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "10D" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("10D"), setSelectedOption("10D") }}>10</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "JD" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("JD"), setSelectedOption("JD") }}>J</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "QD" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("QD"), setSelectedOption("QD") }}>Q</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "KD" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("KD"), setSelectedOption("KD") }}>K</th>
                        </tr>
                        <tr>
                            <th className="recall-phase-icon-square"><GiClubs
                                className="recall-phase-cards-icon" /></th>
                            <th className={`recall-phase-cards-option ${selectedOption === "AC" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("AC"), setSelectedOption("AC") }}>A</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "2C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("2C"), setSelectedOption("2C") }}>2</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "3C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("3C"), setSelectedOption("3C") }}>3</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "4C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("4C"), setSelectedOption("4C") }}>4</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "5C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("5C"), setSelectedOption("5C") }}>5</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "6C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("6C"), setSelectedOption("6C") }}>6</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "7C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("7C"), setSelectedOption("7C") }}>7</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "8C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("8C"), setSelectedOption("8C") }}>8</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "9C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("9C"), setSelectedOption("9C") }}>9</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "10C" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("10C"), setSelectedOption("10C") }}>10</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "JC" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("JC"), setSelectedOption("JC") }}>J</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "QC" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("QC"), setSelectedOption("QC") }}>Q</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "KC" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("KC"), setSelectedOption("KC") }}>K</th>

                        </tr>
                        <tr>
                            <th className="recall-phase-icon-square"><GiHearts
                                className="recall-phase-cards-icon" /></th>
                            <th className={`recall-phase-cards-option ${selectedOption === "AH" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("AH"), setSelectedOption("AH") }}>A</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "2H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("2H"), setSelectedOption("2H") }}>2</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "3H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("3H"), setSelectedOption("3H") }}>3</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "4H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("4H"), setSelectedOption("4H") }}>4</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "5H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("5H"), setSelectedOption("5H") }}>5</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "6H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("6H"), setSelectedOption("6H") }}>6</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "7H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("7H"), setSelectedOption("7H") }}>7</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "8H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("8H"), setSelectedOption("8H") }}>8</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "9H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("9H"), setSelectedOption("9H") }}>9</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "10H" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("10H"), setSelectedOption("10H") }}>10</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "JH" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("JH"), setSelectedOption("JH") }}>J</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "QH" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("QH"), setSelectedOption("QH") }}>Q</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "KH" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("KH"), setSelectedOption("KH") }}>K</th>

                        </tr>
                        <tr>
                            <th className="recall-phase-icon-square"><GiSpades
                                className="recall-phase-cards-icon" /></th>
                            <th className={`recall-phase-cards-option ${selectedOption === "AS" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("AS"), setSelectedOption("AS") }}>A</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "2S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("2S"), setSelectedOption("2S") }}>2</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "3S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("3S"), setSelectedOption("3S") }}>3</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "4S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("4S"), setSelectedOption("4S") }}>4</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "5S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("5S"), setSelectedOption("5S") }}>5</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "6S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("6S"), setSelectedOption("6S") }}>6</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "7S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("7S"), setSelectedOption("7S") }}>7</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "8S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("8S"), setSelectedOption("8S") }}>8</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "9S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("9S"), setSelectedOption("9S") }}>9</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "10S" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("10S"), setSelectedOption("10S") }}>10</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "JS" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("JS"), setSelectedOption("JS") }}>J</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "QS" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("QS"), setSelectedOption("QS") }}>Q</th>
                            <th className={`recall-phase-cards-option ${selectedOption === "KS" ? "selected" : ""
                                }`} onClick={function () { props.setUserRecallCard("KS"), setSelectedOption("KS") }}>K</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}