const Router = require('koa-router');
const Serializer = require('catalogue.serializer');
const catalogueData = require('data.json');

const router = new Router({
  prefix: '/catalogue',
});

class Catalogue {
  static async getAll(ctx) {
    ctx.body = Serializer.serialize(catalogueData);
  }
}

router.get('/', Catalogue.getAll);

module.exports = router;
