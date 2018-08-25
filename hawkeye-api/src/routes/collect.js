const Router = require('koa-router');
const { collectBiz } = require('../bizs');

const router = new Router({
  prefix: `/collect`
});

router.get('/', collectBiz.processReportByGet);
router.post('/', collectBiz.processReportByPost);

module.exports = {
  router
};
