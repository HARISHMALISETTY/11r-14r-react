import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from 'react-bootstrap/Image';

function Accordian(props) {
  return (
    <div>
     <Accordion>
      <Accordion.Item >
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
         {props.info}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  );
}

export default Accordian;
