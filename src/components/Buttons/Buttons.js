import React from "react";
import "./Buttons.css";
import { Button } from "semantic-ui-react";

class Buttons extends React.Component {
  render() {
    return (
      <div className="container">
        <Button.Group className="buttonGroup" size="massive">
          <Button onClick={() => this.props.handleClick("rent")}>
            Rent a bike
          </Button>
          <Button.Or />
          <Button onClick={() => this.props.handleClick("return")}>
            Return a bike{" "}
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default Buttons;
