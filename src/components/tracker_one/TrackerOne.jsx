import { useEffect, useState } from "react";
import Card, { CardTitle, CardData, CardImage } from "../card/Card";
import { TotalCases } from "./TotalCases";
import { TotalDeaths } from "./TotalDeaths";
// import "./trackerOne.css";
import { NewCases } from "./NewCases";
import { NewDeaths } from "./NewDeaths";
import { TotalRecovered } from "./TotalRecovered";
import { TotalActive } from "./TotalActive";
import Map from "../map/Map";
import { ExtraInformation } from "./ExtraInformation";
import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls";

const TrackerOne = () => {
  const allData = useApi(`${API_BASE_URL}/all`);
  const countriesData = useApi(`${API_BASE_URL}/countries`);
  const [countryInfo, setCountryInfo] = useState(null);
  const [countries, setCountries] = useState([]);
  if (!allData) {
    return <p>Cargando...</p>;
  }
  useEffect(() => {
    setCountryInfo(allData);
  }, []);
  console.log(allData);
  console.log(countryInfo);
  useEffect(() => {
    if (!countriesData) {
      return <p>Cargando...</p>;
    }
    setCountries(countriesData);
  }, [countriesData]);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    const countryData = await useApi(
      `${API_BASE_URL}/countries/${countryCode}`
    );
    if (!countryData) {
      return <p>Cargando...</p>;
    }
    setCountryInfo(countryData);
  };

  const countryList = countries.map((country) => {
    return (
      <option key={country.countryInfo.iso2} value={country.countryInfo.iso2}>
        {country.country}
      </option>
    );
  });

  return (
    <div
      id="rigthContent"
      className="overflow-hidden block absolute w-3/10 bg-[#f7f8fc] left-[480px] p-[30px]
    outline-none h-screen"
    >
      <div
        id="containerSelector"
        className="items-center justify-between flex mb-8 pb-4 border-b border-solid border-[rgba(0,0,0,0.1)]"
      >
        <div className="countrySelectBox text-[16px] h-[50px] py-[8px] px-[25px] text-black font-medium w-[300px] shadow-lg border-0 rounded bg-white">
          <select
            className="countries"
            id="countries-select"
            onChange={onCountryChange}
          >
            {countryList}
          </select>
          {/* <div className="countryPicker">
            <span className="current text-[16px] text-black font-medium"></span>
            <ul className="">{countriesList}</ul>
          </div> */}
        </div>
        <div id="updapteOn" className="text-black font-medium text-base">
          Updated: June 5, 2022
        </div>
      </div>
      <div id="row" className="flex flex-column">
        <div
          id="rightInfo"
          className="flex flex-[50%] flex-wrap -mr-4 -ml-[20px] px-4 gap-[30px]"
        >
          <TotalCases>{countryInfo.cases}</TotalCases>
          <TotalDeaths>{countryInfo.deaths}</TotalDeaths>
          <TotalRecovered>{countryInfo.recovered}</TotalRecovered>
          <TotalActive>{countryInfo.active}</TotalActive>
          <NewCases>{countryInfo.todayCases}</NewCases>
          <NewDeaths>{countryInfo.todayDeaths}</NewDeaths>
        </div>
        <div className="Mapa flex-[40%] ">
          <Map />
        </div>
      </div>
      <ExtraInformation />
    </div>
  );
};

export default TrackerOne;
