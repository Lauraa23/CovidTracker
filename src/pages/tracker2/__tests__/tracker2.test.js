import React from "react";
import { render, screen, act } from "@testing-library/react";
import Tracker2 from "../Tracker2";
import useApi from "../../../services/useApi";
import "@testing-library/jest-dom";

jest.mock("../../../services/useApi");

describe("Tracker2", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("maneja el error del servicio de la API", async () => {
    const errorMessage = "Error al cargar datos";

    useApi.mockImplementation(() => {
      return Promise.reject(new Error(errorMessage));
    });

    await act(async () => {
      render(<Tracker2 />);
    });

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
