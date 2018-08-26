const { db, util } = require('../common');
const formidable = require('formidable');

function parseReqAsForm(req) {
  const form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, function(err, fields) {
      if (err) {
        return reject(err);
      }
      resolve(fields);
    });
  });
}

async function saveNavigationTimingAsync(data, ctx) {
  Object.assign(data, util.getRequestBasicData(ctx), { type: 'NavigationTiming' });
  db.collection(db.Collections.NavigationTiming)
    .then(navCol => navCol.insertOne(data))
    .catch(e => console.error(e));
}

const processReportByGet = async ctx => {
  const data = ctx.query;
  saveNavigationTimingAsync(data, ctx);
  ctx.type = 'image/gif';
  ctx.body = 'data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==';
};

const processReportByPost = async ctx => {
  const data = await parseReqAsForm(ctx.req);
  saveNavigationTimingAsync(data, ctx);
  ctx.body = 'ok';
};

module.exports = {
  processReportByGet,
  processReportByPost
};
