import { config } from './config';
import { performanceReporter } from './lib/performanceReporter';
import { reportHelper } from './utils';

export const actionProcessor = {
  processAction(action) {
    const { type, payload } = action;
    switch (type) {
      case 'config':
        this._setConfig(payload);
        break;
      case 'send':
        this._processReport(payload);
        break;
    }
  },
  /**
   * Set config
   * @param {*} configObj
   */
  _setConfig(configObj) {
    config.setConfig(configObj);
  },
  _processReport(payload) {
    switch (payload.event) {
      case 'pageview':
        break;
      case 'performance':
        reportHelper.doReport(config.reportUrl, performanceReporter.getPerformanceTimingData());
        break;
    }
  }
};
