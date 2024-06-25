import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls.js";
import InformationCard from "./InformationCard.jsx";

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
        <InformationCard
          title={"Total Case"}
          cases={data.cases}
          todayCases={data.todayCases}
          textColor="brightRed"
          bgColor="lightRed"
        />

        <InformationCard
          title={"Active Case"}
          cases={data.active}
          textColor="brightOrange"
          bgColor="lightOrange"
        />

        <InformationCard
          title={"Recovered Case"}
          cases={data.recovered}
          todayCases={data.todayRecovered}
          textColor="brightGreen"
          bgColor="lightGreen"
        />

        <InformationCard
          title={"Deaths Case"}
          cases={data.deaths}
          todayCases={data.todayDeaths}
          textColor="primary"
          bgColor="lightBlue"
        />
      </ul>
    </>
  );
};

export default GeneralInformation;
