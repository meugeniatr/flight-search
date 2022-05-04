import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RestaurantIcon, WifiIcon } from 'icons';

import Button from 'components/Button/Button';

import {
  FligthWrapper,
  Itinerary,
  ItineraryTime,
  ItineraryDuration,
  ItineraryLocation,
  Services,
  Actions,
  FlightNumber,
  LabelStyle,
  DetailsWrapper,
} from './FlightCardStyles';
import { useState } from 'react';

interface IFlightsGrid {
  takeoff: string;
  landing: string;
  duration: number;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  airline: string;
  flightNumber: string;
  price: number;
  currencyCode: string;
}

const FlightCard: FC<IFlightsGrid> = ({
  takeoff,
  landing,
  duration,
  departureAirport,
  arrivalAirport,
  departureCity,
  arrivalCity,
  airline,
  flightNumber,
  price,
  currencyCode,
}) => {
  const { t } = useTranslation(['flightCard']);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  return (
    <>
      <FligthWrapper>
        <Itinerary>
          <ItineraryTime>
            <span>
              <time>{takeoff}</time> - <time>{landing}</time>
            </span>
          </ItineraryTime>
          <ItineraryLocation>
            <ol>
              <li>
                <strong>{departureCity}</strong> ({departureAirport})
              </li>
              <li>
                <strong>{arrivalCity}</strong> ({arrivalAirport})
              </li>
            </ol>
          </ItineraryLocation>
          <FlightNumber>
            <LabelStyle>{airline}</LabelStyle>
            {flightNumber}
          </FlightNumber>
          <ItineraryDuration>
            <LabelStyle>{t('duration')}</LabelStyle>
            {duration}
          </ItineraryDuration>
          <Services>
            <LabelStyle>{t('services')}</LabelStyle>
            <div>
              <RestaurantIcon />
              <WifiIcon />
            </div>
          </Services>
        </Itinerary>
        <Actions>
          <Button variant="fill" size="small" onClick={() => setShowPrice(!showPrice)}>
            {/* <Button variant="fill" size="small" onClick={() => console.log(price)}> */}
            {t('details')}
          </Button>
        </Actions>
      </FligthWrapper>
      <DetailsWrapper animated={showPrice}>
        <p>{`${price} ${currencyCode}`}</p>
      </DetailsWrapper>
    </>
  );
};
export default FlightCard;
