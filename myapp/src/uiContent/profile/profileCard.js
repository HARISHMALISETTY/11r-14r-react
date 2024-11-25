import React from "react";

function ProfileCard(props){


    return(<div>
        <h1>hello {props.name} from {props.city} - {props.role}</h1>

    </div>)

}

export default ProfileCard;