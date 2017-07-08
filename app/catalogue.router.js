const Router = require('koa-router');
const catalogueData = require('data.json');

const router = new Router({
  prefix: '/catalogue',
});

class Catalogue {
  static async getAll(ctx, next) {
    ctx.body = catalogueData;
  }
}

router.get('/', Catalogue.getAll);

module.exports = router;
