import './App.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { GiSpades, GiDiamonds, GiHearts, GiClubs } from 'react-icons/gi'
import { useEffect } from 'react';

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
}) {

    function handleLifeClick() {
        //handleLifeclick should take the e.target of the click on these lives
        //Each life should have a number, 1-4
        //When a life is clicked, that life and all those preceding it should be set to a value 
        //We could also implement this for hover functionality
        console.log("I was clicked")
    }

    function handleUserRecallGuess(userRecallCard: string) {
        if (props.gameState === "recallPhase") {
            if (userRecallCard === props.seenCardsPile[0]) {
                //we shouldn't really just pop out the seenCards - because we'll need them to save games later
                alert("Correct!")
                props.seenCardsPile.shift()
                //run a phase check - if no cards left to guess, move to end-of-game;
                //increment a score for this game

            } else if (userRecallCard === "") {
                alert("Select the card you want to guess from the grid below the playing area")
            } else {
                //alerts will be changed to on-screen text
                alert("Oops! Wrong guess")
                //subtract a life
                //check if the user has no lives remaining - if so, end the game

            }

        }
    }
    useEffect(() => {
        if (props.seenCardsPile.length === 1 && props.gameState === "recallPhase") props.setGameState("endOfGamePhase");
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
                        <span onClick={() => props.setSeeCardsTimer(3)}
                            className="game-settings-option-button"> 3s</span>
                        <span onClick={() => props.setSeeCardsTimer(5)}
                            className="game-settings-option-button"> 5s</span>
                        <span onClick={() => props.setSeeCardsTimer(10)}
                            className="game-settings-option-button"> 10s</span>
                        <span onClick={() => props.setSeeCardsTimer(30)}
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
                            handleUserRecallGuess(props.userRecallCard);
                            console.log(props.seenCardsPile.length);
                            props.seenCardsPile.length === 0 ? props.setGameState("endOfGamePhase") : "";
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
                                <th className="recall-phase-icon-square"><GiDiamonds className="recall-phase-cards-icon" /></th>
                                <th onClick={() => props.setUserRecallCard("AD")}>A</th>
                                <th onClick={() => props.setUserRecallCard("2D")}>2</th>
                                <th onClick={() => props.setUserRecallCard("3D")}>3</th>
                                <th onClick={() => props.setUserRecallCard("4D")}>4</th>
                                <th onClick={() => props.setUserRecallCard("5D")}>5</th>
                                <th onClick={() => props.setUserRecallCard("6D")}>6</th>
                                <th onClick={() => props.setUserRecallCard("7D")}>7</th>
                                <th onClick={() => props.setUserRecallCard("8D")}>8</th>
                                <th onClick={() => props.setUserRecallCard("9D")}>9</th>
                                <th onClick={() => props.setUserRecallCard("10D")}>10</th>
                                <th onClick={() => props.setUserRecallCard("JD")}>J</th>
                                <th onClick={() => props.setUserRecallCard("QD")}>Q</th>
                                <th onClick={() => props.setUserRecallCard("KD")}>K</th>
                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiClubs
                                    className="recall-phase-cards-icon" /></th>
                                <th onClick={() => props.setUserRecallCard("AC")}>A</th>
                                <th onClick={() => props.setUserRecallCard("2C")}>2</th>
                                <th onClick={() => props.setUserRecallCard("3C")}>3</th>
                                <th onClick={() => props.setUserRecallCard("4C")}>4</th>
                                <th onClick={() => props.setUserRecallCard("5C")}>5</th>
                                <th onClick={() => props.setUserRecallCard("6C")}>6</th>
                                <th onClick={() => props.setUserRecallCard("7C")}>7</th>
                                <th onClick={() => props.setUserRecallCard("8C")}>8</th>
                                <th onClick={() => props.setUserRecallCard("9C")}>9</th>
                                <th onClick={() => props.setUserRecallCard("10C")}>10</th>
                                <th onClick={() => props.setUserRecallCard("JC")}>J</th>
                                <th onClick={() => props.setUserRecallCard("QC")}>Q</th>
                                <th onClick={() => props.setUserRecallCard("KC")}>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiHearts
                                    className="recall-phase-cards-icon" /></th>
                                <th onClick={() => props.setUserRecallCard("AH")}>A</th>
                                <th onClick={() => props.setUserRecallCard("2H")}>2</th>
                                <th onClick={() => props.setUserRecallCard("3H")}>3</th>
                                <th onClick={() => props.setUserRecallCard("4H")}>4</th>
                                <th onClick={() => props.setUserRecallCard("5H")}>5</th>
                                <th onClick={() => props.setUserRecallCard("6H")}>6</th>
                                <th onClick={() => props.setUserRecallCard("7H")}>7</th>
                                <th onClick={() => props.setUserRecallCard("8H")}>8</th>
                                <th onClick={() => props.setUserRecallCard("9H")}>9</th>
                                <th onClick={() => props.setUserRecallCard("10H")}>10</th>
                                <th onClick={() => props.setUserRecallCard("JH")}>J</th>
                                <th onClick={() => props.setUserRecallCard("QH")}>Q</th>
                                <th onClick={() => props.setUserRecallCard("KH")}>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiSpades
                                    className="recall-phase-cards-icon" /></th>
                                <th onClick={() => props.setUserRecallCard("AS")}>A</th>
                                <th onClick={() => props.setUserRecallCard("2S")}>2</th>
                                <th onClick={() => props.setUserRecallCard("3S")}>3</th>
                                <th onClick={() => props.setUserRecallCard("4S")}>4</th>
                                <th onClick={() => props.setUserRecallCard("5S")}>5</th>
                                <th onClick={() => props.setUserRecallCard("6S")}>6</th>
                                <th onClick={() => props.setUserRecallCard("7S")}>7</th>
                                <th onClick={() => props.setUserRecallCard("8S")}>8</th>
                                <th onClick={() => props.setUserRecallCard("9S")}>9</th>
                                <th onClick={() => props.setUserRecallCard("10S")}>10</th>
                                <th onClick={() => props.setUserRecallCard("JS")}>J</th>
                                <th onClick={() => props.setUserRecallCard("QS")}>Q</th>
                                <th onClick={() => props.setUserRecallCard("KS")}>K</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* load lives container from above in here, as a separate component, to show lives remaining */}

            </div>

        </div>
    )
}