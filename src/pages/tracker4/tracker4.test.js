
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Tracker4 from './Tracker4'; 

describe('Tracker4 Component', () => {
  test('renders loading message initially', () => {
    render(<Tracker4 />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  test('renders country buttons after data load', async () => {
    render(<Tracker4 />);
    await waitFor(() => screen.getByText('Country1')); 
    expect(screen.getByText('Country1')).toBeInTheDocument();
    expect(screen.getByText('Country2')).toBeInTheDocument();
  });

  test('displays country data when a country button is clicked', async () => {
    render(<Tracker4 />);
    await waitFor(() => screen.getByText('Country1')); 
    fireEvent.click(screen.getByText('Country1')); 
    await waitFor(() => screen.getByText('1000')); 
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });
});
