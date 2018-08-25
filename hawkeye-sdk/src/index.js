import { performance } from './lib/performance';
import { reportHelper, util } from './utils';

const hawkeyeOpt = {};

const performanceData = Object.assign({}, util.getBasicBrowserData(), performance.getTimingPerformanceData());

window['hawkeye'].q.forEach(x => {
  if (x[0] === 'config') {
    Object.assign(hawkeyeOpt, x[1]);
  }
});
reportHelper.doReport(hawkeyeOpt.reportUrl, performanceData);

module.exports = function(action, payload) {};
