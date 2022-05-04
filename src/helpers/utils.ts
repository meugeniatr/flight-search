import { IFlightCard } from 'components/FlightCard/FlightCard';
import data from 'data.json';

type Airport = {
  city: string;
  name: string;
};

export type Airports = Record<string, Airport>;

export type Flight = {
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

const getAirports = (): Airports => {
  const airports = {};
  for (const [key, value] of Object.entries(data.included)) {
    if (key.includes('airports')) {
      airports[key] = value;
    }
  }
  return airports;
};

const getFlights = (departureAirport: string, arrivalAirport: string): Flight[] => {
  return data.data
    .filter((flight: Flight) => {
      return flight.departureAirport === departureAirport && flight.arrivalAirport === arrivalAirport;
    })
    .map(({ ...flight }) => {
      flight.arrivalAirport = data.included[flight.arrivalAirport];
      flight.departureAirport = data.included[flight.departureAirport];
      flight.airline = data.included[flight.airline];
      return flight;
    });
};

const splitTime = (numberOfMinutes: number): { Days: number; Hours: number; Minutes: number } => {
  const minutesInDay = 24 * 60;
  const minutesInHour = 60;
  const days = Math.floor(numberOfMinutes / minutesInDay);
  const remainingMinutes = numberOfMinutes % minutesInDay;
  const hours = Math.floor(remainingMinutes / minutesInHour);
  const minutes = remainingMinutes % minutesInHour;

  return { Days: days, Hours: hours, Minutes: minutes };
};

export { getAirports, getFlights, splitTime };
