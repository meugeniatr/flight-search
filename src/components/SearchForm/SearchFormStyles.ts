import styled from 'styled-components';
import { BREAKPOINTS, COLORS, FONTSIZE } from '../../constants';

const StyledSection = styled.section`
  display: block;
  box-shadow: 0 0.1rem 0.4rem 0 ${COLORS.transparentGray75};
  background: ${COLORS.white};
  max-width: ${BREAKPOINTS.laptopMin}px;
  margin: 40px auto;
`;

const StyledFlightType = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 100px;

  p {
    font-size: ${FONTSIZE.normal};
  }
`;

const LabelStyle = styled.h4`
  font-size: ${FONTSIZE.small};
  font-weight: normal;
  color: ${COLORS.transparentGray75};
  margin-bottom: 12px;
`;

const StyledContent = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
`;

const SyledSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const FlightTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledSection, StyledContent, SyledSearchWrapper, FlightTypeWrapper, StyledFlightType, LabelStyle };
