import '../App.css'
import './PlayerActionPanel.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { GiSpades, GiDiamonds, GiHearts, GiClubs } from 'react-icons/gi'
import { useEffect, useState } from 'react';
import { gameStates } from '../ApiClient/ApiClient';

export function PlayerActionPanel(props: {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>,
    seeCardsTimer: number,
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
    cardsToRecall: number,
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
    userRecallCard: string,
    setUserRecallCard: React.Dispatch<React.SetStateAction<string>>,
    seenCardsPile: string[]
    setcurrentCount: React.Dispatch<React.SetStateAction<number>>
}) {
    const [selectedOption, setSelectedOption] = useState("");


    function updateTimer(newTime: number) {
        props.setSeeCardsTimer(newTime);
        props.setcurrentCount(newTime);
    }

    function handleLifeClick() {
        //handleLifeclick should take the e.target of the click on these lives
        //Each life should have a number, 1-4
        //When a life is clicked, that life and all those preceding it should be set to a value 
        //We could also implement this for hover functionality
        console.log("I was clicked")
    }

    function handleUserRecallGuess(userRecallCard: string) {
        if (props.gameState === gameStates.recallPhase) {
            if (userRecallCard === props.seenCardsPile[0]) {
                //we shouldn't really just pop out the seenCards - because we'll need them to save games later
                alert("Correct!")
                props.seenCardsPile.shift()
                //run a phase check - if no cards left to guess, move to end-of-game;
                //increment a score for this game

            } else if (userRecallCard === "") {
                alert("Select the card you want to guess from the grid below the playing area")
            } else {
                alert("Oops! Wrong guess")
                //subtract a life
                //check if the user has no lives remaining - if so, end the game
            }
        }
    }
    useEffect(() => {
        if (props.seenCardsPile.length === 1 && props.gameState === gameStates.endOfGamePhase) props.setGameState(gameStates.endOfGamePhase);
    }, [props.seenCardsPile])

    return (
        <div className="player-action-panel-container">
            <ul className=
                {props.gameState === "recallPhase" ? "game-settings-panel-hidden" : "game-settings-panel"}>
                <li className='game-settings-item'>
                    <span className="game-settings-title">See Next Card: </span>
                    <span className='game-settings-option-buttons'>
                        <span className="game-settings-option-button"
                            onClick={() => props.setSeeCardsTimer(-1)}>On Click</span>
                        <span onClick={() => updateTimer(3)}
                            className="game-settings-option-button"> 3s</span>
                        <span onClick={() => updateTimer(5)}
                            className="game-settings-option-button"> 5s</span>
                        <span onClick={() => updateTimer(10)}
                            className="game-settings-option-button"> 10s</span>
                        <span onClick={() => updateTimer(30)}
                            className="game-settings-option-button"> 30s</span>
                    </span>
                </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Cards to recall:</label>
                    <input type="number" id="number-to-recall"
                        name="number-to-recall" min="1" max="52"
                        //how do I fix this?
                        value={props.cardsToRecall}
                        onChange={e => props.setCardsToRecall(parseInt(e.target.value))}
                    ></input> </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Lives: </label>
                    <div className="game-settings-lives-container">
                        <div className="game-settings-lives" onClick={() => handleLifeClick()}>
                            <AiOutlineHeart
                                className="game-settings-lives-icon" /></div>
                        <div className="game-settings-lives">
                            <AiOutlineHeart className="game-settings-lives-icon" /></div>
                        <div className="game-settings-lives">
                            <AiOutlineHeart className="game-settings-lives-icon" /></div>
                        <div className="game-settings-lives">
                            <AiOutlineHeart className="game-settings-lives-icon" /></div>
                    </div>
                    {/* <input type="number" id="wrong-guesses" className="game-settings-item"></input> */}
                </li> <br></br>
            </ul>
            <div className=
                {props.gameState === "recallPhase" ? "recall-phase-panel" : "recall-phase-panel-hidden"}>
                <div className="recall-phase-top-menu">
                    <button className="recall-phase-submit-button"
                        onClick={function () {
                            console.log("seencards pile is equal to: " + props.seenCardsPile)
                            handleUserRecallGuess(props.userRecallCard);
                            console.log(props.seenCardsPile.length);
                            props.seenCardsPile.length === 0 ? props.setGameState(gameStates.endOfGamePhase) : "";
                        }
                        }>
                        Submit guess
                    </button>
                    {/* <button className="recall-phase-skip-card"></button> */}
                </div>
                <div className="recall-phase-cards-section">
                    <table className='recall-phase-cards-table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className="recall-phase-icon-square"><GiDiamonds className="recall-phase-cards-icon recall-phase-cards-option" /></th>
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
                                    }`} onClick={function() {props.setUserRecallCard("AC"),setSelectedOption("AC")}}>A</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "2C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("2C"),setSelectedOption("2C")}}>2</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "3C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("3C"),setSelectedOption("3C")}}>3</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "4C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("4C"),setSelectedOption("4C")}}>4</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "5C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("5C"),setSelectedOption("5C")}}>5</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "6C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("6C"),setSelectedOption("6C")}}>6</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "7C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("7C"),setSelectedOption("7C")}}>7</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "8C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("8C"),setSelectedOption("8C")}}>8</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "9C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("9C"),setSelectedOption("9C")}}>9</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "10C" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("10C"),setSelectedOption("10C")}}>10</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "JC" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("JC"),setSelectedOption("JC")}}>J</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "QC" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("QC"),setSelectedOption("QC")}}>Q</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "KC" ? "selected" : ""
                                    }`} onClick={function() {props.setUserRecallCard("KC"),setSelectedOption("KC")}}>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiHearts
                                    className="recall-phase-cards-icon" /></th>
                                <th className={`recall-phase-cards-option ${selectedOption === "AH" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("AH"),setSelectedOption("AH")}}>A</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "2H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("2H"),setSelectedOption("2H")}}>2</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "3H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("3H"),setSelectedOption("3H")}}>3</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "4H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("4H"),setSelectedOption("4H")}}>4</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "5H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("5H"),setSelectedOption("5H")}}>5</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "6H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("6H"),setSelectedOption("6H")}}>6</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "7H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("7H"),setSelectedOption("7H")}}>7</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "8H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("8H"),setSelectedOption("8H")}}>8</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "9H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("9H"),setSelectedOption("9H")}}>9</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "10H" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("10H"),setSelectedOption("10H")}}>10</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "JH" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("JH"),setSelectedOption("JH")}}>J</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "QH" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("QH"),setSelectedOption("QH")}}>Q</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "KH" ? "selected" : ""
                                    }`} onClick={function(){ props.setUserRecallCard("KH"),setSelectedOption("KH")}}>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiSpades
                                    className="recall-phase-cards-icon" /></th>
                                <th className={`recall-phase-cards-option ${selectedOption === "AS" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("AS"),setSelectedOption("AS")}}>A</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "2S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("2S"),setSelectedOption("2S")}}>2</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "3S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("3S"),setSelectedOption("3S")}}>3</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "4S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("4S"),setSelectedOption("4S")}}>4</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "5S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("5S"),setSelectedOption("5S")}}>5</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "6S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("6S"),setSelectedOption("6S")}}>6</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "7S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("7S"),setSelectedOption("7S")}}>7</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "8S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("8S"),setSelectedOption("8S")}}>8</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "9S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("9S"),setSelectedOption("9S")}}>9</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "10S" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("10S"),setSelectedOption("10S")}}>10</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "JS" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("JS"),setSelectedOption("JS")}}>J</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "QS" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("QS"),setSelectedOption("QS")}}>Q</th>
                                <th className={`recall-phase-cards-option ${selectedOption === "KS" ? "selected" : ""
                                    }`} onClick={function() { props.setUserRecallCard("KS"),setSelectedOption("KS")}}>K</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* load lives container from above in here, as a separate component, to show lives remaining */}
            </div>
        </div>
    )
}