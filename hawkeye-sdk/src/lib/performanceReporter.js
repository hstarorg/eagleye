import { config } from '../config';
import { util } from '../utils';

class PerformanceReporter {
  constructor() {}

  getPerformanceTimingData() {
    const data = Object.assign({}, this._getPerformanceTimingBasicData(), util.getBasicBrowserData(), {
      tid: util.getTrackId(),
      aid: config.appId
    });
    return data;
  }

  /**
   * Get performance timing basic data
   */
  _getPerformanceTimingBasicData() {
    const perfData = window.performance.timing;
    return {
      p_dl: perfData.domainLookupEnd - perfData.domainLookupStart, // DNS lookup time
      p_tc: perfData.connectEnd - perfData.connectEnd, // TCP connect time
      p_pl: perfData.loadEventEnd - perfData.navigationStart, // Page load time
      p_sr: perfData.responseStart - perfData.requestStart, // Send request time
      p_srp: perfData.responseEnd - perfData.responseStart, // Server reponse time
      p_dr: perfData.domComplete - perfData.domLoading, // DOM Render time
      p_dcl: perfData.domContentLoadedEventEnd - perfData.navigationStart, // DOM content loaded time（DOMCententLoaded）
      p_pdt: perfData.domComplete - perfData.domInteractive, // Prase DOM-Tree time
      p_ws: perfData.domLoading - perfData.navigationStart // White screen time
    };
  }

  /**
   * Get resource timing basic data
   * @param {*} slowTime
   */
  _getSlowResourceTimingBasicData(slowTime = 2000) {
    const resources = window.performance
      .getEntries()
      .filter(x => x.entryType === 'resource' && x.initiatorType !== 'xmlhttprequest');
    return resources
      .map(item => ({
        name: item.name,
        initiatorType: item.initiatorType,
        loadTime: item.responseEnd - item.startTime,
        transferSize: item.transferSize
      }))
      .filter(x => x.loadTime >= slowTime);
  }
}

const performanceReporter = new PerformanceReporter();

export { performanceReporter };
