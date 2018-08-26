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
        this.__processPerformanceReport();
        break;
    }
  },

  /**
   * Process the performance data report.
   */
  __processPerformanceReport() {
    const fn = function() {
      setTimeout(() => {
        reportHelper.doReport(config.reportUrl, performanceReporter.getPerformanceTimingData());
        window.removeEventListener('load', fn);
      });
    };
    if (document.readyState === 'complete') {
      fn();
    } else {
      window.addEventListener('load', fn);
    }
  }
};
