import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledHeader, Container } from './HeaderStyles';

const Header: FC = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <StyledHeader>
      <Container>
        <button onClick={changeLanguage} value="en">
          English
        </button>
        <button onClick={changeLanguage} value="fr">
          Français
        </button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
