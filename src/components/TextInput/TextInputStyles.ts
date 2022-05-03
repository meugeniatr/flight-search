import styled from 'styled-components';
import { COLORS, FONTSIZE } from '../../constants';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${FONTSIZE.small};
  color: ${COLORS.transparentGray75};
`;

export { StyledLabel };
