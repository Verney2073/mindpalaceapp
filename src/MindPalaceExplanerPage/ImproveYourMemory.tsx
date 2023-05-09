import './ImproveYourMemory.css'

export function MindPalaceExplainer() {
    return (
        <div>
            <h1 >The Mind Palace</h1>
            <section className="improvememory-page-text-section">
                <p className="text-item">The mind palace is a technique used by almost all competitive 'memory athletes'.
                    It allows you to learn impossible memory feats quickly by harnessing the brain's preference for visual and spatial memory.</p>
                <p className="text-item">Ron White, a former USA memory champion, describes how he used the technique as follows: </p>
                <ol className="text-item">
                    <li className="text-item">Visualise walking through 5 of the rooms in your house.</li>
                    <li className="text-item">In each room, visualise 10 items. It could be furniture, utensils, personal items, hanging pictures, or anything else in the room. Picture items as larger than life-size so they're easier to memorise.</li>
                    <li className="text-item">In your final room add two more items, for a total of 52 items in your house, the same as a deck of cards.</li>
                    <li className="text-item">Establish an order of viewing the items as you walk through the house. For example you may start at the front door with the coat rack (item 1) and the shoe rack (item 2), and proceed through the corridor (items 3-10) into room 2, and so on</li>
                    <li className="text-item">When you want to recall the cards, begin the mental walkthrough of your house. As you go, associate each card with the next item in your walkthrough.</li>
                </ol>
                <p className="text-item">Using this technique, competitive memory experts like Ron White are able to perform (seeming) memory miracles. In 2009, for example, Ron was able to memorise an entire deck of cards in just 1min 27 seconds, and 167 digit number in five minutes.</p>
            </section>
        </div>
    )
}
