import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blue from "../../assets/images/blue.jpg";

function ProfileCard(props) {
    console.log(props)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">{props.data.category}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;
