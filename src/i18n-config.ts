import type { InitOptions } from 'i18next';

type Language = 'zh';

interface Translation {
  hello: string;
}

type Resources = {
  [key in Language]: {
    translation: Translation;
  };
};

const resources: Resources = {
  zh: {
    translation: {
      hello: '你好'
    }
  }
};

const fallbackLng: Language = 'zh';

const i18nConfig: InitOptions = {
  resources,
  fallbackLng
};

export { i18nConfig };
