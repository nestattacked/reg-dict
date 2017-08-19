const config = require('./config.js');
const patternValidator = require('./patternValidator.js');

//create a mysql connection
const mysql = require('promise-mysql');
const pool = mysql.createPool(config.mysql);

//create a koa instance
const Koa = require('koa');
const app = new Koa();

//create router
const Router = require('koa-router');
const router = new Router();

router.get('/regdict/v1/words', async function(ctx) {
  let pattern = patternValidator(ctx.query.pattern||'');
  let offset = Number(ctx.query.offset||0);
  let limit = Number(ctx.query.limit||20) + 1;//plus 1 to check if more words available
  let words = await pool.query('select word,definition,us_audio,us_pron,has_audio from words where word like ? order by population desc limit ?,?', [pattern, offset, limit]);

  let results = {};
  if (words.length === limit) {
    results.words = words.slice(0,-1);
    results.more = true;
  } else {
    results.words = words;
    results.more = false;
  }

  ctx.body = JSON.stringify(results);
  ctx.set('Access-Control-Allow-Origin', '*');
});

//add router
app.use(router.routes());

app.listen(8000);
