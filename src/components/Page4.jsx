import React from "react";

const PageFour= (props) => {

    return (
        <div className='container' style={{color:props.color, backgroundColor:props.background }}>
            <h3>the word is {props.word} </h3>
            <h4>place a word, color, and a background color in URL</h4>
        </div>
    )
}

export default PageFour;
