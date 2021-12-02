import React from "react";

function Card(props) {
  const { country } = props;
  // console.log(country.population);

  // Separateur pour les nombres de population
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={country.flags.png} alt="flags" />
      <div className="data-container">
        <ul>
          <li>{country.name.common}</li>
          <li>{country.capital}</li>
          <li>Pop : {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
}

export default Card;
