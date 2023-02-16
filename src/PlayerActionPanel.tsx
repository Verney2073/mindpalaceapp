import './App.css'

export function PlayerActionPanel() {
    return (
        <div className="player-action-panel-container">
            <ul className="game-settings-panel">
                <li className='game-settings-item'>
                    <span className="game-settings-title">See Next Card: </span>
                    <span className='game-settings-option-buttons'>
                        <span >On Click</span>
                        <span> 3s</span>
                        <span> 5s</span>
                        <span> 10s</span>
                        <span> 30s</span>
                    </span>
                </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Cards to recall:</label>
                    <input type="number" id="number-to-recall" name="number-to-recall" min="1" max="52"></input> </li><br></br>
                <li className='game-settings-item'>
                    <label className="game-settings-title">Lives: </label>
                    <input type="number" id="wrong-guesses" className="game-settings-item"></input>
                    </li> <br></br>

            </ul>

        </div>
    )

}