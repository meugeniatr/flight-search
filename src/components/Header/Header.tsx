import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FranceIcon, UkIcon } from 'icons';

import { StyledHeader, Container, LangOption } from './HeaderStyles';

const Header: FC = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <StyledHeader>
      <Container>
        <LangOption onClick={changeLanguage} value="en">
          <UkIcon />
        </LangOption>
        <LangOption onClick={changeLanguage} value="fr">
          <FranceIcon />
        </LangOption>
      </Container>
    </StyledHeader>
  );
};

export default Header;
