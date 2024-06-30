import React from "react";
import { render, screen, act } from "@testing-library/react"; // Importamos render y act de testing-library
import Tracker2 from "../Tracker2";
import useApi from "../../../services/useApi";

jest.mock("../../../services/useApi");

describe("Tracker2", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("destruye la tabla al desmontar el componente", async () => {
    const mockData = [
      {
        country: "Spain",
        cases: 1000,
        todayCases: 100,
        deaths: 50,
        todayDeaths: 5,
        recovered: 900,
        active: 50,
        critical: 10,
        tests: 5000,
        countryInfo: { iso2: "ES" },
      },
    ];

    useApi.mockReturnValue(mockData); // Mock de la función useApi

    let component;

    // Renderizamos el componente Tracker2
    act(() => {
      component = render(<Tracker2 />);
    });

    // Verificamos que la tabla esté presente
    let dataTable = component.getByTestId("CountryStatsDataTable");
    expect(dataTable).toBeTruthy();

    // Desmontamos el componente
    act(() => {
      component.unmount();
    });

    // Verificamos que la tabla se haya destruido correctamente
    dataTable = component.queryByTestId("CountryStatsDataTable");
    expect(dataTable).toBeNull();
  });
});
