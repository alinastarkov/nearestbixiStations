import React from "react";
import "./Buttons.css";
import { Button } from "semantic-ui-react";

function Buttons(props) {
  return (
    <div className="container">
      <Button.Group className="buttonGroup" size="massive">
        <Button onClick={() => props.handleClick("rent")}>Rent a bike</Button>
        <Button.Or />
        <Button onClick={() => props.handleClick("return")}>
          Return a bike
        </Button>
      </Button.Group>
    </div>
  );
}

export default Buttons;
