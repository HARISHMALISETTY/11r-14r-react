import React from "react";
import Child1 from "../child1/childOne";
import ConditionalRend from "../conditionalrendering/condRend";
import AdminComp from "../adminComp/adminComp";
import UserComp from "../userComp/userComp";

function Parent(props){
  

    return props.login==="user"?<UserComp/>:<AdminComp/>

}

export default Parent;