import { useEffect, useState } from 'react';

import data from 'data.json';

import { IAirport } from './useAirports';

export interface IFullFlight {
  airline: IAirport;
  arrivalAirport: IAirport;
  currencyCode: string;
  departureAirport: IAirport;
  duration: number;
  flightNumber: string;
  id: string;
  landing: string;
  price: number;
  takeoff: string;
}

type Flight = {
  airline: string;
  arrivalAirport: string;
  currencyCode: string;
  departureAirport: string;
  duration: number;
  flightNumber: string;
  id: string;
  landing: string;
  price: number;
  takeoff: string;
};
/**
 * Custom hook that allows to return flights that match the departure airport and arrival airport
 * Incorporates the name of the airline, city and name of the city
 * @returns loadingFlights: boolean, flights: IFullFlight
 */
const useFlights = (departureAirport: string, arrivalAirport: string) => {
  const [result, setResult] = useState<{ loadingFlights: boolean; flights: IFullFlight[] }>({
    loadingFlights: true,
    flights: [],
  });

  useEffect(() => {
    const flights = data.data
      .filter((flight: Flight) => {
        return flight.departureAirport === departureAirport && flight.arrivalAirport === arrivalAirport;
      })
      .map((flight): IFullFlight => {
        return {
          ...flight,
          arrivalAirport: data.included[flight.arrivalAirport],
          departureAirport: data.included[flight.departureAirport],
          airline: data.included[flight.airline],
        };
      });

    const timeout = setTimeout(() => {
      setResult({
        loadingFlights: false,
        flights,
      });
    }, 1000);
  }, [departureAirport, arrivalAirport]);

  return result;
};

export default useFlights;
