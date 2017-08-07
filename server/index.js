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
  let pattern = patternValidator(ctx.query.pattern);
  let offset = Number(ctx.query.offset)||0;
  let limit = Number(ctx.query.limit)||20;
  
  let words = await pool.query('select word,us_audio,us_pron,has_audio from words where word like ? order by population desc limit ?,?', [pattern, offset, limit]);
  ctx.body = JSON.stringify(words);
  ctx.set('Access-Control-Allow-Origin', '*');
});

//add router
app.use(router.routes());

app.listen(8000);
