import React,{Component}  from "react";


function Dog(props){
return (

    <div style={{width:400, border:"solid"}}>
        
<p>{props.value}</p>
<p>{props.custom}</p>
<p>{props.description}</p>

    </div>
)
}

export default Dog;