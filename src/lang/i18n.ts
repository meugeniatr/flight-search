import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import fr from './fr.json';
import en from './en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fr,
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    react: {
      nsMode: 'default',
    },
  });

export default i18n;
