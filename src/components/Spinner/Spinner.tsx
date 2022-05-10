import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 0.2em solid ${COLORS.primary};
  border-top: 0.2em solid ${COLORS.transparentGray15};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
