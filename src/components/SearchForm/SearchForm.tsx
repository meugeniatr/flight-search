import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
import useAirports from 'hooks/useAirports';
import useFlights, { IFullFlight } from 'hooks/useFlights';
import Spinner from 'components/Spinner/Spinner';

type TPoints = {
  origin: string;
  destination: string;
};

const SearchForm: FC = () => {
  // States
  const [points, setPoints] = useState<TPoints>({
    origin: '',
    destination: '',
  });
  const [openGrid, setOpenGrid] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Hooks
  const { t } = useTranslation('searchForm');
  const { loadingAirports, airports } = useAirports();
  const { loadingFlights, flights } = useFlights(points.origin, points.destination);

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

  const FlightCards: JSX.Element[] | JSX.Element = loadingFlights ? (
    <Spinner />
  ) : (
    flights.map((element: IFullFlight) => <FlightCard flight={element} key={element.id} />)
  );

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
              {loadingAirports ? (
                <Spinner />
              ) : (
                <TextInput
                  data={selectData}
                  ariaLabelledby={t('ariaLabelledbyOrigin')}
                  handleChange={(e) => handleChange(e, 'from')}
                  label={t('from')}
                />
              )}
              <span>{'\u2192'}</span>
              {loadingAirports ? (
                <Spinner />
              ) : (
                <TextInput
                  data={selectData}
                  ariaLabelledby={t('ariaLabelledbyDestination')}
                  handleChange={(e) => handleChange(e, 'to')}
                  label={t('to')}
                />
              )}
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
      {openGrid && FlightCards}
    </>
  );
};

export default SearchForm;
