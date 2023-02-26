import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { CardAnimationArea } from './CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel'
import { EndOfGameScoresPanel } from './EndOfGameScoresPanel'
import { CardFlippingTrial } from './CardFlippingTrial'

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
  const [seeCardsTimer, setSeeCardsTimer] = useState(-1);
  const [cardsToRecall, setCardsToRecall] = useState(5);
  const [currentCount, setcurrentCount] = useState(5)

  const [seenCardsPile, setSeenCardsPile] = useState([]);

  const [userRecallCard, setUserRecallCard] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/trial" element={
        <CardFlippingTrial />
      } />
      <Route path="/about" element={
        <div>Page in Progress!</div>
      } />
      <Route path="/settings" element={
        <div>Page in Progress!</div>
      } />
      <Route path="*" element={
        <div className="main-container">
          <h1> Card Deck Memoriser </h1>

          <CardAnimationArea gameState={gameState}
            setGameState={setGameState}
            cardsToRecall={cardsToRecall} setCardsToRecall={setCardsToRecall}
            seenCardsPile={seenCardsPile} setSeenCardsPile={setSeenCardsPile}
            currentCount={currentCount}
            setCurrentCount={setcurrentCount} />
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
              setUserRecallCard={setUserRecallCard}
              seenCardsPile={seenCardsPile}
              setGameState={setGameState}
            />
          </div>
          <EndOfGameScoresPanel
            cardsToRecall={cardsToRecall}
            gameState={gameState} />
        </div> }
        />
        </Routes>

    </Router>
  )
}
export default App
