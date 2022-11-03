import React from "react";

const CountryItem = ({ country }) => {
  return (
    <div className="cardCountries">
      <h1>
        <b>Pais: </b>
        {country.name.common}
      </h1>
      <h3>
        <b>Capital: </b>
        {country.capital}{" "}
      </h3>
      <h3>
        <b>Continente: </b>
        {country.continents}{" "}
      </h3>
      <img src={country.flags.png} alt="" />
      <a href={country.maps.googleMaps} target="_black">
        Mapa
      </a>
    </div>
  );
};

export default CountryItem;
