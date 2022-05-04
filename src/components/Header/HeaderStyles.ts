import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../constants';

const StyledHeader = styled.header`
  background-color: ${COLORS.primaryLight};
`;

const Container = styled.div`
  max-width: ${BREAKPOINTS.laptopMin}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  height: 40px;
`;

export { StyledHeader, Container };
