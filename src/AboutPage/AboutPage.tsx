import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './AboutPage.css'


export function AboutPage() {
    return (
        <div>
            
            <section className="about-page-text-section">
            <h1>Welcome to Card Memoriser</h1>
            <br></br>
                <p>
                    Everyone dreams of having a better memory. Fortunately, we can all improve our memories. <br></br>
                    Card Memoriser allows you to test your memory by recalling cards from a deck. <br></br>
                    Over time, the number of cards you can hold in your mind will increase.<br></br>
                    However, the real advantage to memorising cards is not in undirected practice. It is in deliberate practie of known memory techniques. 
                </p>

            </section>

            <section className="about-page-text-section">
            <h1>The Mind Palace</h1>
            <br></br>

            <p> 
                The mind palace is a technique used by almost all competitive 'memory athletes'. 
                It allows you to learn impossible memory feats quickly by harnessing the brain's preference for visual and spatial memory.



            </p>

            </section>
        </div>
    )
}
