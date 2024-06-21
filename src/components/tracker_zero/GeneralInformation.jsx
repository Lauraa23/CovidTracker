import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls.js";

const GeneralInformation = () => {
  const data = useApi(`${API_BASE_URL}/all`);

  if (!data) {
    return <p>Cargando ...</p>;
  }

  return (
    <>
      <h2 className="font-bold text-darkBlue text-2xl my-2 leading-tight">
        COVID-19 Tracker
      </h2>
      <ul className="list-none">
        <li className="bg-lightRed p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent hover:border-brightRed hover:scale-105 cursor-pointer">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Total Case
          </h6>
          <p className="text-2xl text-brightRed font-semibold leading-6 float-right">
            {data.cases}
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +{data.todayCases}
          </b>
        </li>
        <li className="bg-lightOrange p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent hover:border-brightOrange hover:scale-105 cursor-pointer">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Active Case
          </h6>
          <p className="text-2xl text-brightOrange font-semibold leading-6 float-right">
            {data.active}
          </p>
        </li>
        <li className="bg-lightGreen p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent hover:border-brightGreen hover:scale-105 cursor-pointer">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Recovered Case
          </h6>
          <p className="text-2xl text-brightGreen font-semibold leading-6 float-right">
            {data.recovered}
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +{data.todayRecovered}
          </b>
        </li>
        <li className="bg-lightBlue p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent hover:border-primary hover:scale-105 cursor-pointer">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Deaths Case
          </h6>
          <p className="text-2xl text-primary font-semibold leading-6 float-right">
            {data.deaths}
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +{data.todayDeaths}
          </b>
        </li>
      </ul>
    </>
  );
};

export default GeneralInformation;
