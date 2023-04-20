import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './i18n-config';
import LanguageDetector from 'i18next-browser-languagedetector';

const prepareI18N = async (): Promise<void> => {
  await i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);
};

export { prepareI18N };
