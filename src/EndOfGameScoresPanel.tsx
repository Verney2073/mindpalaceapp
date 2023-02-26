
export function EndOfGameScoresPanel(props: {
    cardsToRecall: number
    gameState: string
}) {
    return (
        <div>
            <div className=
                {props.gameState === "endOfGamePhase" ? "end-of-game-messages-container" : "recall-phase-panel-hidden"}>
                <p>Congrats!</p>
                <p>You correctly recalled {props.cardsToRecall} cards!! </p>
            </div>
        </div>
    )
}