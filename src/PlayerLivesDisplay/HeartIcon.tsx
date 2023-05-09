import { gameStates } from '../ApiClient/ApiClient'
import './HeartIcon.css'

export function HeartIcon(props: {
    activeHeart: boolean
    gameState: gameStates
}) {
    return (
        <div className={`heart ${props.activeHeart ? "active-life" : "inactive-life"} 
        ${props.gameState === gameStates.gameNotOn ? "clickable" : ""}`}>
            <div className="heart-shape"></div>
        </div>
    )
}
