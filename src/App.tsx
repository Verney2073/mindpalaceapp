import { useEffect, useState, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { CardAnimationArea } from './CardAnimationArea/CardAnimationArea'
import { GameLiveScorePanel } from './GameLiveScorePanel/GameLiveScorePanel'
import { PlayerActionPanel } from './PlayerActionPanel/PlayerActionPanel'
import { AboutPage } from './AboutPage/AboutPage'
import { Settings } from './SettingsPage/Settings'
import { IDefaultData, defaultData, gameStates } from './ApiClient/ApiClient'
import { MindPalaceExplainer } from './MindPalaceExplanerPage/ImproveYourMemory'
import { displayCardFaceDown } from './CardCreationInteractions/CardCreationsInteractions'

export const appContext = createContext<IDefaultData>(defaultData)

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
        displayCardFaceDown();
        setSeenCardsPile([]);
        setSkippedCards(0);
      }
      if (currentGameState === gameStates.recallPhase || gameStates.endOfGamePhase) {
        displayCardFaceDown();
      }
    }
    handlegameStateChange(gameState);
  }, [gameState])

  const contextValues = {
    gameState,
    seeCardsTimer,
    cardsToRecall,
    currentCount,
    seenCardsPile,
    userRecallCard,
    playerLives,
    skippedCards,
    playerScore,
    setGameState,
    setCardsToRecall,
    setSeenCardsPile,
    setCurrentCount: setcurrentCount,
    setPlayerLives,
    setPlayerScore,
    setSkippedCards,
    setSeeCardsTimer,
    setUserRecallCard
  };

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
            <appContext.Provider value={contextValues}>
              <CardAnimationArea />
              <div className='game-settings-and-player-action-container'>
                <GameLiveScorePanel />
                <PlayerActionPanel />
              </div>
            </appContext.Provider>
          </div>}
        />
      </Routes>
    </Router>
  )
}
export default App
