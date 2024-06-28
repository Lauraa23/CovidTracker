import "./Tracker4.css";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";
import { useEffect, useState } from "react";

const Tracker4 = () => {
  const [countries, setCountries] = useState([]);

  const data = useApi(`${API_BASE_URL}/countries`);

  useEffect(() => {
    if (data) {
      const tagsCountries = data
        .sort((a, b) => b.deaths - a.deaths)
        .slice(0, 10);
      setCountries(tagsCountries);
    }
  }, [data]);

  if (!data) {
    <p>Cargando...</p>;
  }

  return (
    <>
      <div className="flex flex-col font-poppins">
        <h1 className="text-xl border-b border-gray-300 pb-2 mb-8 font-bold text-[#262f5a]">
          Covid-19 Country Wise - Tabs
        </h1>
        <div className="flex flex-wrap">
          {countries.map((country) => (
            <button
              key={country.country}
              className="text-xs py-2.5 px-3 bg-white rounded shadow-lg mr-3.5 mb-3.5 flex items-center font-semibold hover:bg-[#3639AE] hover:text-white transition duration-200"
            >
              <img
                src={country.countryInfo.flag}
                alt={`Flag of ${country.country}`}
                className="w-[1.6vw] h-[1.6vw] rounded-full mr-2"
              />
              {country.country}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tracker4;
