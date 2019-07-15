import React from "react";
import { Container, Header, Card } from "semantic-ui-react";

export default function DisplayCard(props) {
  return (
    <Container>
      <Card>
        <Card.Content>
          <Card.Content header={props.nearestStation.name} />
          <Card.Content
            description={
              "Number of bikes: " + props.nearestStation.num_bikes_available
            }
          />
          <Card.Content
            description={
              "Number of docks: " + props.nearestStation.num_docks_available
            }
          />
        </Card.Content>
      </Card>
    </Container>
  );
}
