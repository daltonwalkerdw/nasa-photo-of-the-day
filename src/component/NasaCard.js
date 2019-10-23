import React from "react";


const NasaCard = props => {
  return (
      <div className="card">
           <h2>{props.name}</h2>
           <p>Population: {props.population}</p>
           <p>Climate: {props.climate}</p>
           <p>Diameter: {props.diameter}</p>
           <p>Orbital Period: {props.orbitalPeriod}</p>
           <p>Terrain: {props.terrain}</p>
    </div>
  );
};

export default NasaCard;
