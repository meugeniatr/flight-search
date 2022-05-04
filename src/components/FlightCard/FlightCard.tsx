import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RestaurantIcon, WifiIcon } from 'icons';

import Button from 'components/Button/Button';

import { splitTime } from 'helpers/utils';

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

export interface IFlightCard {
  airline: string;
  arrivalAirport: string;
  arrivalCity: string;
  currencyCode: string;
  departureAirport: string;
  departureCity: string;
  duration: number;
  flightNumber: string;
  landing: string;
  price: number;
  takeoff: string;
}

const FlightCard: FC<IFlightCard> = ({
  airline,
  arrivalAirport,
  arrivalCity,
  currencyCode,
  departureAirport,
  departureCity,
  duration,
  flightNumber,
  landing,
  price,
  takeoff,
}) => {
  // Hooks
  const { t } = useTranslation(['flightCard']);

  // States
  const [showPrice, setShowPrice] = useState<boolean>(false);

  // Functions
  const getFormattedDuration = (): string => {
    const formattedDuration: { Days: number; Hours: number; Minutes: number } = splitTime(duration);
    const dDisplay: string = formattedDuration.Days > 0 ? `${formattedDuration.Days}d` : '';
    const hDisplay: string = formattedDuration.Hours > 0 ? `${formattedDuration.Hours}h` : '';
    const mDisplay: string = formattedDuration.Minutes > 0 ? `${formattedDuration.Minutes}m` : '';
    return dDisplay + hDisplay + mDisplay;
  };

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
            {getFormattedDuration()}
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
