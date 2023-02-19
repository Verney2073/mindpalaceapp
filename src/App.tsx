import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Navbar'
import { CardAnimationArea } from './CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel'

function App() {
  //https://www.typescriptlang.org/docs/handbook/enums.html

  //use react.context for managing user accounts ?

  enum gameStates { 
    gameNotOn = "gameNotOn",
    seeCardsPhase = "seeCardsPhase",
    recallPhase = "recallPhase"
  }

  const [gameState, setGameState] = useState(gameStates.gameNotOn);
  const [seeCardsTimer, setSeeCardsTimer] = useState(5);



  return (
    <div className="main-container">
      <h1> Card Deck Memoriser </h1>
      <Navbar />
      <CardAnimationArea gameState={gameState}
        setGameState={setGameState} />
      <div className='game-settings-and-player-action-container'>
        <GameLiveScorePanel gameState={gameState}
          setGameState={setGameState}
          seeCardsTimer={seeCardsTimer}
          setSeeCardsTimer={setSeeCardsTimer}
        />
        <PlayerActionPanel gameState={gameState} seeCardsTimer={seeCardsTimer} setSeeCardsTimer={setSeeCardsTimer} />
      </div>
    </div>
  )
}

export default App
