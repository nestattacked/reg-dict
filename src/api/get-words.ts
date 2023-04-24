import { get } from '../util/api';

interface Word {
  definition: string;
  has_audio: number;
  us_audio: string;
  us_pron: string;
  word: string;
}

interface Response {
  more: boolean;
  words: Word[];
}

const getWords = async (pattern: string) => {
  return get<Response>('words', { pattern });
};

const getMoreWords = async (pattern: string, limit: number, offset: number) => {
  return get<Response>('words', { pattern, limit, offset });
};

export { getWords, getMoreWords };
export type { Word };
