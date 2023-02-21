import './App.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { GiSpades, GiDiamonds, GiHearts, GiClubs } from 'react-icons/gi'

export function PlayerActionPanel(props: {
    gameState: string;
    seeCardsTimer: number;
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>
    cardsToRecall: number;
    setCardsToRecall: React.Dispatch<React.SetStateAction<number>>
    userRecallCard: string,
    setUserRecallCard: React.Dispatch<React.SetStateAction<string>>
    seenCardsPile: string[]
}) {

    function handleLifeClick() {
        //handleLifeclick should take the e.target of the click on these lives
        //Each life should have a number, 1-4
        //When a life is clicked, that life and all those preceding it should be set to a value 
        //We could also implement this for hover functionality
        console.log("I was clicked")
    }

    function handleUserRecallGuess(userRecallCard:string) {
        if(props.gameState === "recallPhase") {
            if(userRecallCard === props.seenCardsPile[0]) {
                //we shouldn't really just pop out the seenCards - because we'll need them to save games later
                alert("Correct!")
                props.seenCardsPile.shift()
                //run a phase check - if no cards left to guess, move to end-of-game;
                //increment a score for this game

            } else if (userRecallCard === "") {
                alert("Select the card you want to guess from the grid below the playing area")
            } else {
                //alerts will be changed to on-screen text
                alert ("Oops! Wrong guess")
                //subtract a life
                //check if the user has no lives remaining - if so, end the game
                
            }

            }
        }


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
                        value="5"
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
                    <button className="recall-phase-submit-card" onClick={()=> handleUserRecallGuess(props.userRecallCard)}></button>
                    {/* <button className="recall-phase-skip-card"></button> */}
                </div>
                <div className="recall-phase-cards-section">
                    <table className='recall-phase-cards-table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className="recall-phase-icon-square"><GiDiamonds className="recall-phase-cards-icon" /></th>
                                <th onClick={()=> props.setUserRecallCard("AD")}>A</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>J</th>
                                <th>Q</th>
                                <th>K</th>

                                <th></th>
                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiClubs
                                 className="recall-phase-cards-icon" /></th>
                                <th>A</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>J</th>
                                <th>Q</th>
                                <th>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiHearts 
                                className="recall-phase-cards-icon" /></th>
                                <th>A</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>J</th>
                                <th>Q</th>
                                <th>K</th>

                            </tr>
                            <tr>
                                <th className="recall-phase-icon-square"><GiClubs 
                                className="recall-phase-cards-icon" /></th>
                                <th>A</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>J</th>
                                <th>Q</th>
                                <th>K</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* load lives container from above in here, as a separate component, to show lives remaining */}

            </div>

        </div>
    )
}