import React,{ Component } from "react";
import Dog from "./Dog";

function TableEntries(props){
    const dogs =props.filteredDogs.map((dog,i) => {
        return <Dog key={i} value={dog.value} custom={dog.custom} description={dog.description}/>
    })
    
return (
    <div>
    {dogs}

    </div>
)
}

export default TableEntries;