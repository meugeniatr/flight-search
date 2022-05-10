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

const LangOption = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;

  margin: 0 4px;
  svg {
    width: 24px;
    pointer-events: none;
  }
`;

export { StyledHeader, Container, LangOption };
