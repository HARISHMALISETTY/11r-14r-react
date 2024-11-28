import React from "react";
import Child2  from "../child2/childTwo";

function Child1(props){

    return(<>
    
    <h1>iam a child one </h1>

    <h1>{props.c1}</h1>
    <Child2 harish={props.c2}/>
    </>)


}

 export default Child1;