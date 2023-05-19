export interface IDefaultData {
  gameState: gameStates,
  seeCardsTimer: number,
  cardsToRecall: number,
  currentCount: number,
  seenCardsPile: string[],
  userRecallCard: string,
  playerLives: number,
  skippedCards: number,
  playerScore: number,
  setGameState: React.Dispatch<React.SetStateAction<gameStates>>
  setCardsToRecall: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCount: React.Dispatch<React.SetStateAction<number>>,
  setSeenCardsPile: React.Dispatch<React.SetStateAction<string[]>>,
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>
  setPlayerLives: React.Dispatch<React.SetStateAction<number>>,
  setSeeCardsTimer: React.Dispatch<React.SetStateAction<number>>,
  setUserRecallCard: React.Dispatch<React.SetStateAction<string>>
  setSkippedCards: React.Dispatch<React.SetStateAction<number>>
}

export enum gameStates {
  gameNotOn = "gameNotOn",
  seeCardsPhase = "seeCardsPhase",
  recallPhase = "recallPhase",
  endOfGamePhase = "endOfGamePhase"
}

export const defaultData: IDefaultData = {
  gameState: gameStates.gameNotOn,
  seeCardsTimer: -1,
  cardsToRecall: 5,
  currentCount: 5,
  seenCardsPile: [],
  userRecallCard: "",
  playerLives: 4,
  skippedCards: 0,
  playerScore: 0,
  setGameState: () => null,
  setCardsToRecall: () => null,
  setCurrentCount: () => null,
  setSeenCardsPile: () => null,
  setPlayerScore: () => null,
  setPlayerLives: () => null,
  setSeeCardsTimer: () => null,
  setUserRecallCard: () => null,
  setSkippedCards: () => null
}

export async function fetchDeckOfCards() {
  var response = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => console.log(data))

  return await response;
}

export async function drawFromDeck(deckId: string) {
  var response = fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(data => console.log(data))

  return await response;
}
