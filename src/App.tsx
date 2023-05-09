import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { CardAnimationArea } from './CardAnimationArea/CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel/GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel/PlayerActionPanel'
import { AboutPage } from './AboutPage/AboutPage'
import { Settings } from './SettingsPage/Settings'
import { gameStates } from './ApiClient/ApiClient'
import { MindPalaceExplainer } from './MindPalaceExplanerPage/ImproveYourMemory'

function App() {
  const [gameState, setGameState] = useState(gameStates.gameNotOn);
  const [seeCardsTimer, setSeeCardsTimer] = useState(-1);
  const [cardsToRecall, setCardsToRecall] = useState(5);
  const [currentCount, setcurrentCount] = useState(5)
  const [seenCardsPile, setSeenCardsPile] = useState<string[]>([]);
  const [userRecallCard, setUserRecallCard] = useState("");
  const [playerLives, setPlayerLives] = useState(4);
  const [skippedCards, setSkippedCards] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  useEffect(() => {
    function handlegameStateChange(currentGameState: gameStates) {
      if (currentGameState === gameStates.gameNotOn) {
        setSeeCardsTimer(seeCardsTimer);
        setcurrentCount(seeCardsTimer === -1 ? 3 : seeCardsTimer);
        setCardsToRecall(cardsToRecall);
        setUserRecallCard("");
        document.getElementById('card-face-up').className = "playing-card-back";
        document.getElementById("card-center-temp").style.display = "none";
        document.getElementById("card-top-left-temp").style.display = "none";
        document.getElementById("card-bottom-right-temp").style.display = "none"
        setSeenCardsPile([]);
        setSkippedCards(0);
      }
      if (currentGameState === gameStates.recallPhase || gameStates.endOfGamePhase) {
        document.getElementById('card-face-up').className = "playing-card-back";
        document.getElementById("card-center-temp").style.display = "none";
        document.getElementById("card-top-left-temp").style.display = "none";
        document.getElementById("card-bottom-right-temp").style.display = "none"
      }
    }
    handlegameStateChange(gameState);
    console.log("gamestate is " + gameState)
    console.log("seenCardsPile is " + seenCardsPile)
  }, [gameState])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={
          <AboutPage />
        } />
        <Route path="/settings" element={
          <Settings />
        } />
        <Route path="/mindpalaceexplainer" element={
          <MindPalaceExplainer />
        } />
        <Route path="*" element={
          <div className="main-container">
            <h1> Deck <span className="primary-color">Memoriser</span> </h1>
            <CardAnimationArea gameState={gameState}
              setGameState={setGameState}
              cardsToRecall={cardsToRecall} setCardsToRecall={setCardsToRecall}
              seenCardsPile={seenCardsPile} setSeenCardsPile={setSeenCardsPile}
              currentCount={currentCount}
              setCurrentCount={setcurrentCount}
              playerLives={playerLives}
              setPlayerLives={setPlayerLives}
              seeCardsTimer={seeCardsTimer}
              skippedCards={skippedCards}
              playerScore={playerScore} />
            <div className='game-settings-and-player-action-container'>
              <GameLiveScorePanel gameState={gameState}
                setGameState={setGameState}
                seeCardsTimer={seeCardsTimer}
                setSeeCardsTimer={setSeeCardsTimer}
                currentCount={currentCount}
                setCurrentCount={setcurrentCount}
                seenCardsPile={seenCardsPile}
                cardsToRecall={cardsToRecall}
                setCardsToRecall={setCardsToRecall}
              />
              <PlayerActionPanel gameState={gameState}
                seeCardsTimer={seeCardsTimer} setSeeCardsTimer={setSeeCardsTimer}
                cardsToRecall={cardsToRecall} setCardsToRecall={setCardsToRecall}
                userRecallCard={userRecallCard}
                setUserRecallCard={setUserRecallCard}
                seenCardsPile={seenCardsPile}
                setGameState={setGameState}
                setcurrentCount={setcurrentCount}
                playerLives={playerLives}
                setPlayerLives={setPlayerLives}
                playerScore={playerScore}
                setPlayerScore={setPlayerScore}
                skippedCards={skippedCards}
                setSkippedCards={setSkippedCards}
              />
            </div>
          </div>}
        />
      </Routes>
    </Router>
  )
}
export default App
