const { db } = require('../common');
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

async function saveNavigationTimingAsync(data) {
  try {
    const navCol = await db.collection(db.Collections.NavigationTiming);
    navCol.insertOne(data);
  } catch (e) {
    console.error(e);
  }
}

const processReportByGet = async ctx => {
  const data = ctx.query;
  saveNavigationTimingAsync(data);
  ctx.body = 'ok';
};

const processReportByPost = async ctx => {
  const data = await parseReqAsForm(ctx.req);
  saveNavigationTimingAsync(data);
  ctx.body = 'ok';
};

module.exports = {
  processReportByGet,
  processReportByPost
};
