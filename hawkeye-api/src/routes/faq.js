const Router = require('koa-router');

const router = new Router({
  prefix: ``
});

router.get('/faq', ctx => (ctx.body = 'ok'));

module.exports = {
  router
};
