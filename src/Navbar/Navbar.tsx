import './Navbar.css'
import { Link } from 'react-router-dom'


export function Navbar() {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/about"}><li >About</li></Link>
                <Link to={"/settings"}><li >Settings</li></Link>
            </ul>
        </div>
    )
}