import { useState } from 'react'
import './RecallPhaseGuessPrompts.css'

export function RecallPhaseGuessPrompts(props: {
    guess: string
}) {
    switch (props.guess) {
        case "correct":
            return (
                <div className="user-guess-prompt-container">
                    <p className="user-guess-prompt">Correct!</p>
                </div>
            )
        case "incorrect":
            return (
                <div className="user-guess-prompt-container">
                    <p className="user-guess-prompt">Oops, try again!</p>
                </div>
            )
        case "skipped":
            return (
                <div className="user-guess-prompt-container">
                    <p className="user-guess-prompt">On to the next card...</p>
                </div>
            )
        default:
            return <div className="user-guess-prompt-container"></div >
    }
}
