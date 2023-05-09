import '../App.js'

const icons = [
    {
        suit: "D",
        icon: "♦",
        color: "red"
    },
    {
        suit: "H",
        icon: "♥",
        color: "red"
    },
    {
        suit: "C",
        icon: "♣",
        color: "black"
    },
    {
        suit: "S",
        icon: "♠",
        color: "black"
    },
]

export function createDeck() {
    const suits = ["H", "D", "S", "C"];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push(ranks[j] + suits[i]);
        }
    }
    return deck
}
export function shuffleDeck(deck: string[]) {
    for (let i = 0; i < deck.length; i++) {
        let tempCard = deck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
    return deck;
}

export function flipCard(deck: string[], seenCards: string[], cardsToRecall: number = 5) {
    if (seenCards.length === cardsToRecall) return console.log("All cards seen!");
    console.log("The card is: " + deck[0])
    let cardSuit = icons.find(obj => obj.suit === deck[0][deck[0].length - 1]);
    let suitIcon = cardSuit?.icon;
    let iconColor = cardSuit?.color;
    let cardRanks = deck[0].split("");
    let cardRank = cardRanks.splice(0, cardRanks.length - 1).join(""); //e.g. deck =['10H'] captures '10' here
    seenCards.push(deck[0])
    deck.shift();
    console.log("You have seen the following cards: " + seenCards);
    console.log("seen careds pile is equal to:" + seenCards)
    const ourCard = { suitIcon, cardRank, iconColor }
    return ourCard;
}
