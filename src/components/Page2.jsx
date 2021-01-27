// import React from "react";
import React, {useEffect} from "react";

const PageTwo= (props) => {

    useEffect(()=> {
        console.log(props)
    })


    return (
        <div>
            <h3>the word is {props.word}</h3>
            <h4>place a word in :word in URL</h4>
            
        </div>
    )
}

export default PageTwo;
