import './App.css'
import { AiOutlineHeart } from 'react-icons/ai';

export function PlayerActionPanel(props: {
    gameState: string
    seeCardsTimer: number;
    setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>
}) {

    return (
        <div className="player-action-panel-container">
            <ul className="game-settings-panel">
                <li className='game-settings-item'>
                    <span className="game-settings-title">See Next Card: </span>
                    <span className='game-settings-option-buttons'>
                        <span className="game-settings-option-button">On Click</span>
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
                    <input type="number" id="number-to-recall" name="number-to-recall" min="1" max="52"></input> </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Lives: </label>
                    <div className="game-settings-lives-container">
                        <div className="game-settings-lives"><AiOutlineHeart /></div>
                        <div className="game-settings-lives"><AiOutlineHeart /></div>
                        <div className="game-settings-lives"><AiOutlineHeart /></div>
                        <div className="game-settings-lives"><AiOutlineHeart /></div>
                    </div>
                    {/* <input type="number" id="wrong-guesses" className="game-settings-item"></input> */}
                </li> <br></br>

            </ul>

        </div>
    )
}