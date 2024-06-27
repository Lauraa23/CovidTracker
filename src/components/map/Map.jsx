import * as React from "react";
import WorldMap from "react-svg-worldmap";
import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls";
import "./map.css";

export default function Map() {
  const data = useApi(`${API_BASE_URL}/countries`);

  if (!data) {
    return <p>Cargando ...</p>;
  }
  const filterCountries = data.filter((country) => {
    return country.countryInfo.iso2;
  });

  const countries = filterCountries.map((country) => ({
    country: country.countryInfo.iso2,
    countryName: country.country,
  }));

  return (
    <div className="map" id="map">
      <WorldMap
        className="fill-primary country opacity-100"
        color="lightBlue"
        size="lg"
        data={countries}
      />
    </div>
  );
}