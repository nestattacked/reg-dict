const decodeUnicode = (str: string) => {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/, ''), 16));
  });
};

export { decodeUnicode };
