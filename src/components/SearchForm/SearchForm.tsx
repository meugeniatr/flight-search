import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getAirports, getFlights } from 'helpers/data';

import DateInput from '../DateInput/DateInput';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import FlightCard from '../FlightCard/FlightCard';

import {
  StyledSection,
  StyledContent,
  SyledSearchWrapper,
  FlightTypeWrapper,
  StyledFlightType,
  LabelStyle,
} from './SearchFormStyles';

interface ISearchForm {}

type TPoints = {
  origin: string;
  destination: string;
};

const SearchForm: FC<ISearchForm> = () => {
  const { t } = useTranslation('searchForm');

  // States
  const [points, setPoints] = useState<TPoints>({
    origin: '',
    destination: '',
  });
  const [openGrid, setOpenGrid] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  const airports = getAirports();

  // TODO
  // Be able to remove airport from list depending on to and from since we can land on the same airport
  const selectData = [];
  for (const [key, value] of Object.entries(airports)) {
    selectData.push({ value: key, label: value.name });
  }

  // Functions
  const handleChange = (item: any, id: string): void => {
    setOpenGrid(false);
    if (item) {
      id === 'from'
        ? setPoints((prev) => ({ ...prev, origin: item.value }))
        : setPoints((prev) => ({ ...prev, destination: item.value }));
    }
  };

  const onContinueButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenGrid(true);
  };

  return (
    <>
      <StyledSection>
        <StyledContent>
          <form>
            <SyledSearchWrapper>
              <FlightTypeWrapper>
                <StyledFlightType>
                  <LabelStyle>{t('flightType')}</LabelStyle>
                  <p>{t('type')}</p>
                </StyledFlightType>
              </FlightTypeWrapper>
              <TextInput
                data={selectData}
                ariaLabelledby={t('ariaLabelledbyOrigin')}
                handleChange={(e) => handleChange(e, 'from')}
                label={t('from')}
              />
              <span>{'\u2192'}</span>
              <TextInput
                data={selectData}
                ariaLabelledby={t('ariaLabelledbyDestination')}
                handleChange={(e) => handleChange(e, 'to')}
                label={t('to')}
              />
              <div>
                <LabelStyle>{t('departureDate')}</LabelStyle>
                <DateInput
                  startDate={startDate}
                  onChange={(update: any) => {
                    setOpenGrid(false);
                    setStartDate(update);
                  }}
                />
              </div>
              <div>
                <Button
                  variant={points.destination === '' || points.origin === '' || !startDate ? 'ghost' : 'fill'}
                  size="large"
                  onClick={(e): void => onContinueButton(e)}
                >
                  {t('continue')}
                </Button>
              </div>
            </SyledSearchWrapper>
          </form>
        </StyledContent>
      </StyledSection>
      {openGrid &&
        getFlights(points.origin, points.destination).map((element: any) => (
          <FlightCard
            takeoff={element.takeoff}
            landing={element.landing}
            duration={element.duration}
            departureAirport={element.departureAirport.name}
            arrivalAirport={element.arrivalAirport.name}
            departureCity={element.departureAirport.city}
            arrivalCity={element.arrivalAirport.city}
            airline={element.airline.name}
            flightNumber={element.flightNumber}
            price={element.price}
            key={element.id}
            currencyCode={element.currencyCode}
          />
        ))}
    </>
  );
};

export default SearchForm;
