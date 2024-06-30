import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";

const Tracker3 = () => {
  const data = useApi(`${API_BASE_URL}/countries`);

  if (!data) {
    return <p>Cargando ...</p>;
  }

  const topCases = [...data].sort((a, b) => b.cases - a.cases).slice(0, 10);
  const topTodayCases = [...data]
    .sort((a, b) => b.todayCases - a.todayCases)
    .slice(0, 10);
  const topDeaths = [...data].sort((a, b) => b.deaths - a.deaths).slice(0, 10);
  const topTodayDeaths = [...data]
    .sort((a, b) => b.todayDeaths - a.todayDeaths)
    .slice(0, 10);
  const topActive = [...data].sort((a, b) => b.active - a.active).slice(0, 10);
  const topRecovered = [...data]
    .sort((a, b) => b.recovered - a.recovered)
    .slice(0, 10);

  const renderColumn = (countries, type) => (
    <td className="pl-2 pb-3">
      {countries.map((country, index) => (
        <div
          key={`${type}-${index}`}
          className="w-[190px] h-12 transform transition-transform hover:scale-110 flex flex-row justify-around p-1 w-200 shadow-lg rounded bg-white mb-2"
        >
          <div className="self-center">
            {country.countryInfo && country.countryInfo.iso2 ? (
              <img
                src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                className="w-[40px] h-[40px] rounded-full"
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col items-left text-left">
            <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
              {country.country}
            </div>
            <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
              {country[type]}
            </div>
          </div>
        </div>
      ))}
    </td>
  );

  return (
    <div>
      <div className="font-poppins text-[#2b2a69] text-2xl font-bold text-left mb-[10px] pb-[10px] pl-[15px] mt-[15px]">
        <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      </div>

      <table className="font-poppins w-[100%] bg-light">
        <thead>
          <tr>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[10px] pl-[10px] mt-[15px] mb-[15px]">
              <h4>Top Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[10px] pl-[10px] mt-[15px] mb-[15px]">
              <h4>Today Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[10px] pl-[10px] mt-[15px] mb-[15px]">
              <h4>Top Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[10px] pl-[10px] mt-[15px] mb-[15px]">
              <h4>Today Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[10px] pb-[10px] pl-[15px] mt-[15px]">
              <h4>Top Active</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[10px] pb-[10px] pl-[15px] mt-[15px]">
              <h4>Top Recovered</h4>
            </th>
          </tr>
        </thead>
        <tbody className="text-textBlue">
          <tr>
            {renderColumn(topCases, "cases")}
            {renderColumn(topTodayCases, "todayCases")}
            {renderColumn(topDeaths, "deaths")}
            {renderColumn(topTodayDeaths, "todayDeaths")}
            {renderColumn(topActive, "active")}
            {renderColumn(topRecovered, "recovered")}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tracker3;
