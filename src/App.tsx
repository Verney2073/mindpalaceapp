import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Navbar'
import { CardAnimationArea } from './CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel'

function App() {
  //instead of string, use enum;
  //https://www.typescriptlang.org/docs/handbook/enums.html

  //use react.context for managing user accounts ?

  const [gameState, setGameState] = useState("gameNotOn");


  return (
    <div className="main-container">
      <h1> Card Deck Memoriser </h1>
      <Navbar />
      <CardAnimationArea gameState={gameState}
        setGameState={setGameState} />
      <div className='game-settings-and-player-action-container'>
        <GameLiveScorePanel gameState={gameState} />
        <PlayerActionPanel />
      </div>
    </div>
  )
}

export default App
