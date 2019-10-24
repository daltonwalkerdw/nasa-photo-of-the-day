import React, { useState, useEffect } from "react";

import axios from "axios";
import NasaCard from "./NasaCard";

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap'

export default function NasaList() {
  const [nasa, setNasa] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/planets/`)
      .then(response => {
        console.log(response);
        
        setNasa(response.data.results);
      })
      .catch(error => {
        console.log(`The error was: ${error}`);
      });

  }, []);

  return (
    <div>
      {nasa.map((planets, id) => {
        return (
          <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <NasaCard
              key={id}
              name={planets.name}
              population={planets.population}
              climate={planets.climate}
              diameter={planets.diameter}
              orbitalPeriod={planets.orbital_period}
              terrain={planets.terrain}
                
            />
          </Card>
        );
      })}
    </div>
  );
}
