import { useContext } from 'react'
import { gameStates } from '../ApiClient/ApiClient'
import './HeartIcon.css'
import { appContext } from '../App'

export function HeartIcon(props: {
    activeHeart: boolean
}) {
    const {gameState}  = useContext(appContext);
    
    return (
        <div className={`heart ${props.activeHeart ? "active-life" : "inactive-life"} 
        ${gameState === gameStates.gameNotOn ? "clickable" : ""}`}>
            <div className="heart-shape"></div>
        </div>
    )
}
