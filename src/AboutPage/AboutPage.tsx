import {  Link } from 'react-router-dom';
import './AboutPage.css'

export function AboutPage() {
    return (
        <div>
            <section className="about-page-text-section">
            <h1>Welcome to Card Memoriser</h1>
            <br></br>
                <p>
                    Everyone dreams of having a better memory. Fortunately, we can all improve our memories. <br></br><br></br>
                    Card Memoriser allows you to test your memory by recalling cards from a deck. <br></br>
                    Over time, the number of cards you can hold in your mind will increase.<br></br><br></br>
                    However, the real benefit of memorising cards doesn't come from  undirected practice, but from deliberate practie of known memory techniques. 
                </p><br></br>
                <p>One such technique is the <Link to={"/mindpalaceexplainer"} className ="mind-palace-link">Mind Palace</Link>, which has been practised for thousands of years.</p>
            </section>
        </div>
    )
}
