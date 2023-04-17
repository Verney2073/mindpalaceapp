export enum gameStates {
    gameNotOn = "gameNotOn",
    seeCardsPhase = "seeCardsPhase",
    recallPhase = "recallPhase",
    endOfGamePhase = "endOfGamePhase"
  }

export async function fetchDeckOfCards () {
    var response = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => console.log(data))
    
    return await response;
}

export async function drawFromDeck(deckId:string){
    var response = fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(data => console.log(data))

    return await response;
}
