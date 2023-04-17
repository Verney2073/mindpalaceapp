import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { CardAnimationArea } from './CardAnimationArea/CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel/GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel/PlayerActionPanel'
import { EndOfGameScoresPanel } from './EndOfGameScoresPanel/EndOfGameScoresPanel'
import { CardFlippingTrial } from './CardFlippingTrial/CardFlippingTrial'
import { AboutPage } from './AboutPage/AboutPage'
import { Settings } from './SettingsPage/Settings'
import { gameStates } from './ApiClient/ApiClient'

function App() {
  //https://www.typescriptlang.org/docs/handbook/enums.html

  //use react.context for managing user accounts ?

  //create object or interface for some related states, then use ...*state* to control them 
  //Fore example in the Mars Mission sidebar

  const [gameState, setGameState] = useState(gameStates.gameNotOn);
  const [seeCardsTimer, setSeeCardsTimer] = useState(-1);
  const [cardsToRecall, setCardsToRecall] = useState(5);
  const [currentCount, setcurrentCount] = useState(5)
  const [seenCardsPile, setSeenCardsPile] = useState([]);
  const [userRecallCard, setUserRecallCard] = useState("");

  useEffect(() => {
    //this seems to always believe gameState is set to gameNotOn and therefore always runs
    //e.g. it runs at the beginning of the recall phase, setting the SeenCardsPile back to [] 
    function handlegameStateChange(currentGameState: gameStates) {
      if (currentGameState = gameStates.gameNotOn) {
        setSeeCardsTimer(seeCardsTimer);
        setcurrentCount(seeCardsTimer == -1 ? 3 : seeCardsTimer);
        setCardsToRecall(cardsToRecall);
        // setSeenCardsPile([]); 
        setUserRecallCard("");
        document.getElementById('card-face-up').className = "playing-card-back";
        document.getElementById("card-center-temp").style.display = "none";
        document.getElementById("card-top-left-temp").style.display = "none";
        document.getElementById("card-bottom-right-temp").style.display = "none"
      }
    }
    handlegameStateChange(gameState);
  }, [gameState])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/trial" element={
          <CardFlippingTrial />
        } />
        <Route path="/about" element={
          <AboutPage />
        } />
        <Route path="/settings" element={
          <Settings />
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
                setcurrentCount={setcurrentCount}
              />
            </div>
            <EndOfGameScoresPanel
              cardsToRecall={cardsToRecall}
              gameState={gameState} />
          </div>}
        />
      </Routes>
    </Router>
  )
}
export default App
