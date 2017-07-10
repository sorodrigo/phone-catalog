const Router = require('koa-router');
const Serializer = require('phones.serializer');
const phonesData = require('data.json');

const router = new Router({
  prefix: '/phones',
});

class Phones {
  static async getAll(ctx) {
    ctx.body = Serializer.serialize(phonesData);
  }
}

router.get('/', Phones.getAll);

module.exports = router;
