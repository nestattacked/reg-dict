import express from 'express';
import { config } from './config.mjs';
import { load } from './load.mjs';
import { TrieNodeData, search } from './trie.mjs';

const { alphabetRoot, phonogramRoot } = await load();

const server = express();

server.get('/search', (req, res) => {
  const pattern = (req.query.pattern ?? '') as string;
  const skip = isNaN(Number(req.query.skip))
    ? 0
    : Math.max(Math.floor(Number(req.query.skip)), 0);
  const isAlphabet = req.query.type !== 'phonogram';

  const root = isAlphabet ? alphabetRoot : phonogramRoot;
  const keys =
    pattern
      .toLocaleLowerCase()
      .match(/\([^.*+?()]+\)\??|[^.*+?()]\??|[.*+]/g) ?? [];
  const take = skip + 11;

  const datas: TrieNodeData[] = [];
  search(root, keys, datas, take);

  const result = {
    more: datas.length >= take,
    datas: datas.slice(skip, take - 1).map((data) => ({
      ...data,
      examples: data.examples.slice(0, 4)
    }))
  };
  res.header('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(result));
});

server.listen(config.port);
