import { useEffect, useState } from 'react';
import data from 'data.json';

export interface IAirport {
  city: string;
  name: string;
}

type Airports = Record<string, IAirport>;

const useAirports = () => {
  const [result, setResult] = useState<{ loadingAirports: boolean; airports: Airports }>({
    loadingAirports: true,
    airports: {},
  });

  useEffect(() => {
    const airports = Object.entries(data.included).reduce((currentAirports, [key, value]) => {
      if (key.includes('airports')) {
        currentAirports[key] = value;
      }
      return currentAirports;
    }, {});

    const timeout = setTimeout(() => {
      setResult({
        loadingAirports: false,
        airports,
      });
    }, 1000);
  }, []);

  return result;
};

export default useAirports;
