interface Example {
  words: string[];
  video: string;
}

interface Translation {
  [key: string]: string;
}

interface TrieNodeData {
  word: string;
  translation: Translation;
  audio: string;
  phonogram: string;
  variants: string[];
  examples: Example[];
}

interface TrieNode {
  children: {
    [key: string]: TrieNode;
  };
  data?: TrieNodeData;
}

const insert = (root: TrieNode, keys: string[], data: TrieNodeData): void => {
  if (keys.length === 0) {
    root.data = data;
    return;
  }

  const key = keys[0];
  const remainKeys = keys.slice(1);

  if (root.children[key] === undefined) {
    root.children[key] = {
      children: {}
    };
  }
  const nextRoot = root.children[key];

  insert(nextRoot, remainKeys, data);
};

const search = (
  root: TrieNode,
  keys: string[],
  datas: TrieNodeData[],
  take: number
) => {
  if (datas.length >= take) {
    return;
  }

  if (keys.length === 0) {
    if (root.data !== undefined && !datas.includes(root.data)) {
      datas.push(root.data);
    }
    return;
  }

  const key = keys[0];
  const remainKeys = keys.slice(1);

  if (key.endsWith('?')) {
    search(root, [key.slice(0, key.length - 1), ...remainKeys], datas, take);
    search(root, remainKeys, datas, take);
  } else if (key === '*') {
    search(root, remainKeys, datas, take);
    search(root, ['.', ...remainKeys], datas, take);
    search(root, ['.', '+', ...remainKeys], datas, take);
  } else {
    Object.entries(root.children).forEach((entry) => {
      if (
        /^\([^.*+?()]+\)$/.test(key) &&
        key
          .split('')
          .slice(1, key.length - 1)
          .includes(entry[0])
      ) {
        search(entry[1], remainKeys, datas, take);
      } else if (key === '.' || key === entry[0]) {
        search(entry[1], remainKeys, datas, take);
      } else if (key === '+') {
        search(entry[1], remainKeys, datas, take);
        search(entry[1], keys, datas, take);
      }
    });
  }
};

export { insert, search, TrieNode, TrieNodeData, Example };
