import styled from 'styled-components';
import { COLORS } from '../../constants';

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: none;
  border: 2px solid transparent;
  cursor: pointer;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background: ${COLORS.transparentGray15};

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background-color: ${COLORS.transparentGray75};
    color: ${COLORS.black};
  }
`;

export { ButtonBase, FillButton, GhostButton };
