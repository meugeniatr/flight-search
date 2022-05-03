import React, { FC, useState } from 'react';
import DateInput from '../DateInput/DateInput';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { StyledSection, StyledContent, SyledSearchWrapper, FooterWrapper, FlightTypeWrapper } from './SearchFormStyles';

interface ISearchForm {}

type TPoints = {
  origin: string;
  destination: string;
};

const SearchForm: FC<ISearchForm> = () => {
  // States
  const [points, setPoints] = useState<TPoints>({
    origin: '',
    destination: '',
  });
  const [openGrid, setOpenGrid] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<[null | Date, null | Date]>([null, null]);
  const [startDate, endDate] = dateRange;

  const fakeData = [
    {
      name: 'Aeropuerto de Ezeiza',
      id: '123',
    },
    {
      name: 'Aeropuerto Kennedy',
      id: '456',
    },
  ];

  // Functions
  const handleChange = (event: any, id: string): void => {
    id === 'from'
      ? setPoints((prev) => ({ ...prev, origin: event.target.value }))
      : setPoints((prev) => ({ ...prev, destination: event.target.value }));
  };

  console.log({ points });
  return (
    <StyledSection>
      <StyledContent>
        <h2>Find flights</h2>
        <form>
          <SyledSearchWrapper>
            <FlightTypeWrapper>
              <p>Voyage</p>
              <p>Aller simple</p>
            </FlightTypeWrapper>
            <TextInput
              data={fakeData}
              placeholder="from"
              ariaLabelledby="choose origin"
              handleChange={(e) => handleChange(e, 'from')}
              label="from"
            />
            <span>{'\u2192'}</span>
            <TextInput
              data={fakeData}
              placeholder="to"
              ariaLabelledby="pick destination"
              handleChange={(e) => handleChange(e, 'to')}
              label="to"
            />
          </SyledSearchWrapper>
          {openGrid && (
            <>
              <p>Departure date</p>
              <DateInput
                startDate={startDate}
                endDate={endDate}
                onChange={(update: any) => {
                  setDateRange(update);
                }}
              />
            </>
          )}
          <FooterWrapper>
            <Button variant="fill" size="small" onClick={(): void => setOpenGrid(!openGrid)}>
              {!openGrid ? 'Continue' : 'Search Flights'}
            </Button>
          </FooterWrapper>
        </form>
      </StyledContent>
    </StyledSection>
  );
};

export default SearchForm;
