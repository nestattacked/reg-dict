const config = require('./config.js');

//create a mysql connection
const mysql = require('promise-mysql');
const pool = mysql.createPool(config.mysql);

//create a koa instance
const Koa = require('koa');
const app = new Koa();

//create router
const Router = require('koa-router');
const router = new Router();

router.get('/regdict/v1/words', async function(ctx){
  //todo: add offset
  const words = await pool.query('select word,us_audio,us_pron,has_audio from words where word like ? order by population desc limit 20', [ctx.query.pattern||'%']);
  ctx.body = JSON.stringify(words);
});

//add router
app.use(router.routes());

app.listen(8000);
