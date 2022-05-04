import data from 'data.json';

type Airport = {
  city: string;
  name: string;
};

type Airports = Record<string, Airport>;

const getAirports = (): Airports => {
  const airports = {};
  for (const [key, value] of Object.entries(data.included)) {
    if (key.includes('airports')) {
      airports[key] = value;
    }
  }
  return airports;
};

const getFlights = (departureAirport: string, arrivalAirport: string) => {
  return data.data
    .filter((flight: any) => {
      return flight.departureAirport === departureAirport && flight.arrivalAirport === arrivalAirport;
    })
    .map(({ ...flight }) => {
      flight.arrivalAirport = data.included[flight.arrivalAirport];
      flight.departureAirport = data.included[flight.departureAirport];
      flight.airline = data.included[flight.airline];
      return flight;
    });
};

export { getAirports, getFlights };
