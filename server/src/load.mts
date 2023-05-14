import { readJson } from 'fs-extra/esm';
import { Example, TrieNode, TrieNodeData, insert } from './trie.mjs';
import { config } from './config.mjs';
import { join } from 'path';

const load = async () => {
  const wordsPath = join(config.data, 'words.json');
  const examplesPath = join(config.data, 'examples.json');
  const words = await readJson(wordsPath);
  const examples: Example[] = await readJson(examplesPath);

  const datas: { [key: string]: TrieNodeData } = {};
  for (const key in words) {
    const word = key.toLowerCase();
    const rawData = words[key];
    datas[word] = {
      word,
      translation: rawData.translation,
      audio: rawData.audio,
      phonogram: rawData.phonogram,
      variants: rawData.variants,
      examples: []
    };
  }

  examples.forEach((example) => {
    example.words
      .map((word) => word.toLowerCase())
      .forEach((word) => {
        const data = datas[word];
        if (data === undefined || data.examples.includes(example)) {
          return;
        }
        data.examples.push(example);
      });
  });

  const alphabetRoot: TrieNode = { children: {} };
  const phonogramRoot: TrieNode = { children: {} };
  for (const key in datas) {
    const data = datas[key];
    insert(alphabetRoot, data.word.split(''), data);
    insert(phonogramRoot, data.phonogram.split(''), data);
  }

  return { alphabetRoot, phonogramRoot };
};

export { load };
