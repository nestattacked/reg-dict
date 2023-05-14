import axios from 'axios';
import { apiHost } from '../config';

interface Example {
  words: string[];
  video: string;
}

interface Word {
  word: string;
  translation: Record<string, string>;
  audio: string;
  phonogram: string;
  variants: string[];
  examples: Example[];
}

interface Response {
  more: boolean;
  datas: Word[];
}

const search = async (
  type: string,
  pattern: string,
  skip: number
): Promise<Response> => {
  const { data } = await axios.get<Response>(apiHost, {
    params: { type, pattern, skip }
  });
  return data;
};

export { search, Word };
