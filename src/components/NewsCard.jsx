import React from "react";

function NewsCard(props) {
    return (<div className="newsBlock" key={props.index}>
            <h3 className="newsTitle">{props.title}</h3>
            <p className="newsDescription">{props.description}</p>
            <a href={props.link} target="_blank" rel="noreferrer"><button class="newsBtn">READ MORE</button></a>
         </div>)
}

export default NewsCard;