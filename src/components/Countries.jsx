import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountryItem from "./CountryItem";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  console.log(countries);

  return (
    <div className="Container">
      {countries.map((country) => (
        <CountryItem country={country} key={country.name.common} />
      ))}
    </div>
  );
};

export default Countries;
