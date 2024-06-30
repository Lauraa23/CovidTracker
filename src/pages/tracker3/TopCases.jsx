import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";

import React from "react";

const TopCases = () => {
  const topCasesData = useApi(`${API_BASE_URL}/countries?sort=cases`);

  if (!topCasesData) {
    return <p>Cargando ...</p>;
  }
};

export default TopCases;
