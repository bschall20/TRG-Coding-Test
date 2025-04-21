import {React, useState, useEffect} from "react";
import RowmarkLogo from "./images/Rowmark-Logo.svg"
import { ReactSVG } from 'react-svg'
import NewsCard from './components/NewsCard'
import articles from './js/articles'

function Home() {
    // Error handling if page is loading or fails to load with API call, if one were to be called.
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line
    const [error, setError] = useState(null);

    useEffect(() => {
      // Simulate API call and load page before rendering after .5s
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
  
    if (isLoading) {
        return <div className="loader" aria-label="Loading content">Loading...</div>;
    }
    if (error) {
        return <div className="error">Error: {error.message}</div>
    }



    return(<div id="home">
        <div className="homeContent">
            {/* Left side home section content introducing the page */}
            <section id="homeInfo">
                <p className="homeIntro">You Don't Know <br /> What You Don't Know</p>
                <ReactSVG src={RowmarkLogo} alt="Rowmark Group Logo" className="rowmarkLogo"/>
                <h1>Coding Test <span className="h1Version">v</span>2.0.1</h1>
                <p className="h1Note">The difference is in the details</p>
                <p className="homeInfo">Rowmark always has been and always will be a company build around people. From our highly skilled production, quality and engineering teams to our talented sales, marketing, finance and customer support personnel,
                <p className="homeInfoEnd">Rowmark's people are what make the difference.</p>
             </p>
            </section>

            {/* Right side home section content for News */}
            <section id="homeNews">
                <div className="homeNewsTitle">
                    <h2>LATEST NEWS</h2>
                </div>
                {/* Get all articles from and iterate over JS file to display */}
                {
                    articles.map((dataObj, index) => {
                        return (
                            <NewsCard
                                index={index} 
                                title={dataObj.title}
                                description={dataObj.description}
                                link={dataObj.link}
                            />
                        )
                    })
                }
        </section>
        </div>
    </div>)
}


export default Home;