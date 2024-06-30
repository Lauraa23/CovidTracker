import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tracker2 from "../pages/tracker2/Tracker2";
import useApi from "../services/useApi";

jest.mock("../services/useApi");

test("maneja correctamente el error de la llamada a la API", async () => {
  useApi.mockReturnValue({
    data: null,
    error: new Error("Error en la llamada a la API"),
  });

  const { getByText } = render(<Tracker2 />);

  await waitFor(() => {
    expect(
      getByText(
        "Error al cargar los detalles del usuario: Error en la llamada a la API"
      )
    ).toBeInTheDocument();
  });
});

test("renderiza datos correctamente", async () => {
  const mockData = [
    {
      country: "Country A",
      countryInfo: { iso2: "CA" },
      cases: 1000,
      todayCases: 50,
      deaths: 20,
      todayDeaths: 1,
      recovered: 900,
      active: 80,
      critical: 5,
      tests: 5000,
    },
    {
      country: "Country B",
      countryInfo: { iso2: "CB" },
      cases: 2000,
      todayCases: 100,
      deaths: 40,
      todayDeaths: 2,
      recovered: 1800,
      active: 160,
      critical: 10,
      tests: 10000,
    },
  ];

  useApi.mockReturnValue({
    data: mockData,
    error: null,
  });

  const { getByText, getByRole } = render(<Tracker2 />);

  await waitFor(() => {
    expect(getByText("Country A")).toBeInTheDocument();
    expect(getByText("Country B")).toBeInTheDocument();
    expect(getByRole("img", { name: /CA/i })).toBeInTheDocument();
    expect(getByRole("img", { name: /CB/i })).toBeInTheDocument();
  });
});
