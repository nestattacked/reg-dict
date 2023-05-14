const singlePunctuation = /[.,;¿¡!?:%]/;
const multipunctuation = /\.+/;
const biQuote = /['"`]/;
const openQuote = /[([{]/;
const closeQuote = /[)\]}]/;

const join = (tokens: string[]): string => {
  if (tokens.length === 0) {
    return '';
  }

  const punctuationRegex = new RegExp(
    `^${singlePunctuation.source}$|^${multipunctuation.source}$`,
    'i'
  );
  const openQuoteRegex = new RegExp(
    `^${biQuote.source}$|^${openQuote.source}$`,
    'i'
  );
  const closeQuoteRegex = new RegExp(
    `^${biQuote.source}$|^${closeQuote.source}$`,
    'i'
  );

  const quoteStack = [];
  let stickNext = false;

  const firstToken = tokens[0];
  let text = firstToken;
  if (openQuoteRegex.test(firstToken)) {
    quoteStack.push(firstToken);
    stickNext = true;
  }

  for (let i = 1; i < tokens.length; i++) {
    const token = tokens[i];

    const isPunctuation = punctuationRegex.test(token);
    const recentQuote =
      quoteStack.length === 0 ? '' : quoteStack[quoteStack.length - 1];
    const haveQuotePair = isQuotePair(recentQuote, token);
    const isOpenQuote = openQuoteRegex.test(token) && !haveQuotePair;
    const isCloseQuote = closeQuoteRegex.test(token) && haveQuotePair;

    const seperator = isPunctuation || isCloseQuote || stickNext ? '' : ' ';
    text = `${text}${seperator}${token}`;
    stickNext = false;

    if (isOpenQuote) {
      quoteStack.push(token);
      stickNext = true;
    }
    if (isCloseQuote) {
      quoteStack.pop();
    }
  }

  return text;
};

const isQuotePair = (tokenA: string, tokenB: string): boolean => {
  const biQuoteRegex = new RegExp(`^${biQuote.source}$`, 'i');
  if (tokenA === tokenB && biQuoteRegex.test(tokenA)) {
    return true;
  }
  if (tokenA === '(' && tokenB === ')') {
    return true;
  }
  if (tokenA === '[' && tokenB === ']') {
    return true;
  }
  if (tokenA === '{' && tokenB === '}') {
    return true;
  }
  return false;
};

export { join };
