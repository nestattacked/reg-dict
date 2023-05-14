import type { InitOptions } from 'i18next';

type Language = 'zh';

interface Translation {
  regdict: string;
  alphabet: string;
  phonogram: string;
  placeholder: string;
  pronunciation: string;
  translation: string;
  variant: string;
  example: string;
  external: string;
  emptyTranslation: string;
  emptyPhonogram: string;
  emptyVariants: string;
  emptyWords: string;
  emptyExamples: string;
  searchMore: string;
  youglish: string;
  baidu: string;
  google: string;
  simpleWiki: string;
  skell: string;
  iciba: string;
  guide1Title: string;
  guide1Description: string;
  guide2Title: string;
  guide2Description1: string;
  guide2Description1Link: string;
  guide2Description2: string;
  guide2Description2Link: string;
  guide3Title: string;
  guide3Description1: string;
  guide3Description2: string;
  guide3Description3: string;
  guide3Description4: string;
  guide3Description5: string;
  guide4Title: string;
  guide4Pattern: string;
  guide4Description: string;
  guide5Title: string;
  guide5Pattern: string;
  guide5Description: string;
  guide6Title: string;
  guide6Pattern: string;
  guide6Description: string;
  guide7Title: string;
  guide7Pattern: string;
  guide7Description: string;
  guide8Title: string;
  guide8Pattern: string;
  guide8Description: string;
}

type Resources = {
  [key in Language]: {
    translation: Translation;
  };
};

const resources: Resources = {
  zh: {
    translation: {
      regdict: 'regdict',
      alphabet: '字母',
      phonogram: '音标',
      placeholder: '输入查询表达式，按回车查询',
      pronunciation: '发音',
      translation: '含义',
      variant: '变形',
      example: '例句',
      external: '外链',
      emptyTranslation: '暂无含义',
      emptyPhonogram: '暂无音标',
      emptyVariants: '暂无变形',
      emptyWords: '未搜索到任何结果',
      emptyExamples: '暂无例句',
      searchMore: '查看更多',
      youglish: 'youglish',
      baidu: '百度',
      google: '谷歌',
      simpleWiki: '简易维基',
      skell: 'skell',
      iciba: '金山词霸',
      guide1Title: 'regdict 简介',
      guide1Description:
        'regdict来源于一个简单的想法，正则查单词。支持字母和音标两种查询，点击查询框左侧切换。音标可以使用软键盘输入。',
      guide2Title: '链接',
      guide2Description1: '如果你有什么问题或建议，可以在 github 提出issue',
      guide2Description1Link: '前往',
      guide2Description2: '语链是一个英语学习APP，如果你有兴趣，可以了解一下',
      guide2Description2Link: '查看',
      guide3Title: '基本规则',
      guide3Description1: '. 匹配任意一个字母/音标',
      guide3Description2: '+ 匹配一个或多个字母/音标',
      guide3Description3: '* 匹配零个或多个字母/音标',
      guide3Description4: '? 匹配一个可选项',
      guide3Description5: '(abc) 匹配一个括号内的字母/音标',
      guide4Title: '精确查询',
      guide4Pattern: 'fantasy',
      guide4Description: '查询单词 fantasy',
      guide5Title: '前缀查询',
      guide5Pattern: 'pro+',
      guide5Description: '查询前缀为 pro 的单词',
      guide6Title: '后缀查询',
      guide6Pattern: '+i?ed',
      guide6Description: '查询后缀为 ed 或 ied 的单词',
      guide7Title: '长度查询',
      guide7Pattern: '...s',
      guide7Description: '查询长度为 4 且以 s 结尾的单词',
      guide8Title: '或查询',
      guide8Pattern: '+(eo)r',
      guide8Description: '查询后缀为 er 或 or 单词'
    }
  }
};

const fallbackLng: Language = 'zh';

const i18nConfig: InitOptions = {
  resources,
  fallbackLng
};

export { i18nConfig };
