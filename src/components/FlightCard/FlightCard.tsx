import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RestaurantIcon, WifiIcon } from 'icons';

import Button from 'components/Button/Button';

import { FullFlight, splitTime } from 'helpers/utils';

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
  flight: FullFlight;
}

const FlightCard: FC<IFlightCard> = ({ flight }) => {
  // Hooks
  const { t } = useTranslation(['flightCard']);

  // States
  const [showPrice, setShowPrice] = useState<boolean>(false);

  // Functions
  const getFormattedDuration = (): string => {
    const formattedDuration: { Days: number; Hours: number; Minutes: number } = splitTime(flight.duration);
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
              <time>{flight.takeoff}</time> - <time>{flight.landing}</time>
            </span>
          </ItineraryTime>
          <ItineraryLocation>
            <ol>
              <li>
                <>
                  <strong>{flight.departureAirport.city}</strong> ({flight.departureAirport.name})
                </>
              </li>
              <li>
                <>
                  <strong>{flight.arrivalAirport.city}</strong> ({flight.arrivalAirport.name})
                </>
              </li>
            </ol>
          </ItineraryLocation>
          <FlightNumber>
            <LabelStyle>{flight.airline.name}</LabelStyle>
            {flight.flightNumber}
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
        <p>{`${flight.price} ${flight.currencyCode}`}</p>
      </DetailsWrapper>
    </>
  );
};
export default FlightCard;
