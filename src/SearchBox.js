import React,{Component} from "react";


function SearchBox(props){
    return(
        <div>
        <label>value</label>
        <input  onChange={props.handleInput}/>
        <label>other</label>
            <input onChange={props.handleInput} />

        </div>
    )
}

export default SearchBox;