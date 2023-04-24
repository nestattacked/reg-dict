import type { InitOptions } from 'i18next';

type Language = 'zh';

interface Translation {
  regdict: string;
}

type Resources = {
  [key in Language]: {
    translation: Translation;
  };
};

const resources: Resources = {
  zh: {
    translation: {
      regdict: 'nestattacked | regdict'
    }
  }
};

const fallbackLng: Language = 'zh';

const i18nConfig: InitOptions = {
  resources,
  fallbackLng
};

export { i18nConfig };
