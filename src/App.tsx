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
    recallPhase = "recallPhase",
    endOfGamePhase = "endOfGamePhase"
  }

  const [gameState, setGameState] = useState(gameStates.gameNotOn);
  const [seeCardsTimer, setSeeCardsTimer] = useState(5);
  const [cardsToRecall, setCardsToRecall] = useState(5);
  const [currentCount, setcurrentCount] = useState(5)

  const [seenCardsPile, setSeenCardsPile] = useState([]);

  const [userRecallCard, setUserRecallCard] = useState("");

  return (
    <div className="main-container">
      <h1> Card Deck Memoriser </h1>
      <Navbar />
      <CardAnimationArea gameState={gameState}
        setGameState={setGameState}
        cardsToRecall={cardsToRecall} setCardsToRecall={setCardsToRecall}
        seenCardsPile={seenCardsPile} setSeenCardsPile={setSeenCardsPile} />
      <div className='game-settings-and-player-action-container'>
        <GameLiveScorePanel gameState={gameState}
          setGameState={setGameState}
          seeCardsTimer={seeCardsTimer}
          setSeeCardsTimer={setSeeCardsTimer}
          currentCount={currentCount}
          setCurrentCount={setcurrentCount}
          seenCardsPile={seenCardsPile}
          cardsToRecall={cardsToRecall}

        />
        <PlayerActionPanel gameState={gameState}
          seeCardsTimer={seeCardsTimer} setSeeCardsTimer={setSeeCardsTimer}
          cardsToRecall={cardsToRecall} setCardsToRecall={setCardsToRecall}
          userRecallCard={userRecallCard}
          setUserRecallCArd={setUserRecallCard}
          seenCardsPile={seenCardsPile}
        />
      </div>
    </div>
  )
}

export default App
