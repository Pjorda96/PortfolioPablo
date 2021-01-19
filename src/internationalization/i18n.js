import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

import { getLocalLang } from './utils';

const resources = {
  en: { translation: en },
  es: { translation: es }
}

const localLang = getLocalLang();
const lng = localLang || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'es',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
