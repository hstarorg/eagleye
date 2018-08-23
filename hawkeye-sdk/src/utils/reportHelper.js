import { stringify } from 'query-string';

class ReportHelper {
  constructor() {}

  /**
   * Report data to url.
   * @param {string} url The report url
   * @param {object} data The report data
   */
  doReport(url, data) {
    // 优先使用sendBeacon
    if (window.navigator.sendBeacon) {
      this._doReportBySendBeacon(url, data);
    } else {
      this._doReportByImg(url, data);
    }
  }

  _doReportByImg(url, data) {
    const imgUrl = `${url}?${stringify(data)}`;
    const rndKey = `hawkeye_report_${Math.floor(2147483648 * Math.random())}`;
    // Why set to global window object? When GC start, the request will be destroy.
    const img = (window[rndKey] = new Image());
    img.onload = img.onerror = img.onabort = function() {
      img.onload = img.onerror = img.onabort = null;
      window[rndKey] = null; // Clean the variable.
    };
    img.src = imgUrl;
  }

  _doReportBySendBeacon(url, data) {
    window.navigator.sendBeacon(url, new FormData(data));
  }
}

export const reportHelper = new ReportHelper();
