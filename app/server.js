const Koa = require('koa');
const koaLogger = require('koa-logger');
const convert = require('koa-convert');
const mount = require('koa-mount');
const serve = require('koa-static');

const catalogueRouter = require('server/catalogue.router');

const koaBody = require('koa-body')({
  multipart: true,
  jsonLimit: '50mb',
  formLimit: '50mb',
  textLimit: '50mb'
});

const serializeError = (status, message) => ({
  errors: [{
    status,
    detail: message
  }]
});

const app = new Koa();

app.use(convert(koaBody));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    let error = err;
    try {
      error = JSON.parse(err);
    } catch (e) {
      console.error('Error parse');
    }
    ctx.status = error.status || 500;
    console.error(error);
    ctx.body = serializeError(ctx.status, ctx.message);
    if (process.env.NODE_ENV === 'prod' && this.status === 500) {
      ctx.body = 'Unexpected error';
    }
    ctx.response.type = 'application/vnd.api+json';
  }

});

app.use(koaLogger());
app.use(serve(`${__dirname}/public/`));
app.use(mount('/api', catalogueRouter.middleware()));

const server = app.listen(3000, () => {
  console.log('Server running on port 3000!');
});

module.exports = server;
