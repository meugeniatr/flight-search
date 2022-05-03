import styled from 'styled-components';
import { COLORS } from '../../constants';

const StyledSection = styled.section`
  display: block;
  box-shadow: 0 0.1rem 0.4rem 0 ${COLORS.transparentGray75};
  background: rgba(245, 245, 245, 0.8);
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
  margin-top: 24px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FlightTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledSection, StyledContent, SyledSearchWrapper, FooterWrapper, FlightTypeWrapper };
