import './HeartIcon.css'

export function HeartIcon(props: {
    activeHeart: boolean}) {

    return (
            
            <div className={`heart ${props.activeHeart ? "active-life" : "inactive-life"}`}>
                <div className="heart-shape"></div>
        </div>
    )
}