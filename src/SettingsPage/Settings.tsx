import { useEffect, useState } from "react";
import { drawFromDeck, fetchDeckOfCards } from "../ApiClient/ApiClient"

export function Settings() {
     const [DeckId,setDeckId] = useState("");

    useEffect(() => {
        fetchDeckOfCards()
         .then(response => setDeckId(response.deck_id))
        
      },[]);
    
     var ourCard = drawFromDeck(DeckId)

    return (
        <div>
            <div>Page in Progress!</div>
            <div> Testing the DeckOfCards API</div>
        </div>
    )
}