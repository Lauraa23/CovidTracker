import { useState } from "react";
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

const TrackerOne = () => {
  const [data, setData] = useState({
    totalCases: 31415926,
    totalDeaths: 31415927,
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
        <div className="countrySelectBox text-base h-12 py-2 px-6 text-black font-medium w-72 shadow-lg border-0 rounded-lg flex items-center bg-white">
          <select>
            <option value="AL">Albania</option>
            <option value="AL">Albania</option>
          </select>
          <div className="countryPicker"></div>
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
          <TotalCases>{data.totalCases}</TotalCases>
          <TotalDeaths>{data.totalDeaths}</TotalDeaths>
          <TotalRecovered>{data.totalRecovered}</TotalRecovered>
          <TotalActive>{data.totalActive}</TotalActive>
          <NewCases>{data.newCases}</NewCases>
          <NewDeaths>{data.NewDeaths}</NewDeaths>
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
