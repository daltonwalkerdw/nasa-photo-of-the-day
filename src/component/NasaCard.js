import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap'

const NasaCard = props => {
  return (
      // <Card>
        <CardBody body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
           <CardTitle>{props.name}</CardTitle>
           <CardText>Population: {props.population}</CardText>
           <CardText>Climate: {props.climate}</CardText>
           <CardText>Diameter: {props.diameter}</CardText>
           <CardText>Orbital Period: {props.orbitalPeriod}</CardText>
           <CardText>Terrain: {props.terrain}</CardText>
        </CardBody>
    // {/* </Card> */}
  );
};

export default NasaCard;
