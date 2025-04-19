import RowmarkLogo from "./images/Rowmark-Logo.svg"
import { ReactSVG } from 'react-svg'

function Home() {

    return(<div id="home">
        <div className="homeContent">
            {/* Left side home section content introducing the page */}
            <section id="homeInfo">
                <p className="homeIntro">You Don't Know <br /> What You Don't Know</p>
                <ReactSVG src={RowmarkLogo} alt="Rowmark Group Logo" className="rowmarkLogo"/>
                <h1>Coding Test <span className="h1Version">v</span>2.0.1</h1>
                <p className="h1Note">The difference is in the details</p>
                <p className="homeInfo">Rowmark always has been and always will be a company build around people. From our highly skilled production, quality and engineering teams to our talented sales, marketing, finance and customer support personnel,
                    <div className="homeInfoEnd">Rowmark's people are what make the difference.</div>
             </p>
            </section>

            {/* Right side home section content for News */}
            <section id="homeNews">
                <div className="homeNewsTitle">
                    <h2>LATEST NEWS</h2>
                </div>
                <div className="newsBlock">
                    <h3 className="newsTitle">News Title</h3>
                    <p className="newsDescription">Rowmark LLC introduces The Naturals product line, an authentic, nature-inspired, textured engravable sheet product. The Naturals not only look like they came right from the outdoors, but they feel like it too. And just like their real-life counterparts,…</p>
                    <button className="newsBtn">READ MORE</button>
                </div>
                <div className="newsBlock">
                    <h3 className="newsTitle">News Title</h3>
                    <p className="newsDescription">Rowmark LLC introduces The Naturals product line, an authentic, nature-inspired, textured engravable sheet product. The Naturals not only look like they came right from the outdoors, but they feel like it too. And just like their real-life counterparts,…</p>
                    <button className="newsBtn">READ MORE</button>
                </div>
                <div className="newsBlock">
                    <h3 className="newsTitle">News Title</h3>
                    <p className="newsDescription">Rowmark LLC introduces The Naturals product line, an authentic, nature-inspired, textured engravable sheet product. The Naturals not only look like they came right from the outdoors, but they feel like it too. And just like their real-life counterparts,…</p>
                    <button className="newsBtn">READ MORE</button>
                </div>
                <div className="newsBlock">
                    <h3 className="newsTitle">News Title</h3>
                    <p className="newsDescription">Rowmark LLC introduces The Naturals product line, an authentic, nature-inspired, textured engravable sheet product. The Naturals not only look like they came right from the outdoors, but they feel like it too. And just like their real-life counterparts,…</p>
                    <button className="newsBtn">READ MORE</button>
                </div>
            </section>
        </div>
    </div>)
}


export default Home;