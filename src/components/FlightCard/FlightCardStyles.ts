import styled from 'styled-components';
import { BREAKPOINTS, COLORS, FONTSIZE } from '../../constants';

const FligthWrapper = styled.div`
  box-shadow: 0 0.1rem 0.4rem 0 ${COLORS.transparentGray75};
  background: ${COLORS.white};
  display: grid;
  grid-template-columns: 4fr 1fr;
  max-width: ${BREAKPOINTS.laptopMin}px;
  margin: 0 auto;
`;

const Itinerary = styled.div`
  display: grid;
  grid-template-columns: minmax(20%, 1.7fr) 1fr 1fr 1fr;
  padding: 20px 0 20px 40px;
`;

const ItineraryTime = styled.div`
  grid-column: 1;
  grid-row: 1;

  time {
    font-weight: bold;
    font-size: ${FONTSIZE.small};
  }
`;

const ItineraryLocation = styled.div`
  grid-column: 1;
  grid-row: 2;

  ol {
    position: relative;
    list-style: none;
    padding: 0;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 15px;
      bottom: 30px;
      left: 8px;
      border-left: 2px solid;
      border-left-color: currentcolor;
      border-color: ${COLORS.primary};
    }
  }

  li {
    padding-bottom: 12px;
    position: relative;
    padding-left: 18px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: 10;
      top: 5px;
      left: 3px;
      box-sizing: content-box;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid ${COLORS.primary};
    }
  }
`;

const FlightNumber = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;

const ItineraryDuration = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;

const Services = styled.div`
  grid-column: 4;
  grid-row: 2;

  div {
    display: flex;
  }

  svg {
    width: 16px;
    margin: 8px 4px;
  }
`;

const Actions = styled.div`
  grid-column: 2;
  align-self: center;
  justify-self: flex-start;
`;

const LabelStyle = styled.span`
  font-size: ${FONTSIZE.small};
  font-weight: normal;
  color: ${COLORS.transparentGray75};
`;

export {
  FligthWrapper,
  Itinerary,
  ItineraryTime,
  ItineraryDuration,
  ItineraryLocation,
  Services,
  Actions,
  FlightNumber,
  LabelStyle,
};
