class Util {
  constructor() {}

  getBasicBrowserData() {
    return {
      nav: navigator.appVersion,
      nl: navigator.language,
      np: navigator.platform,
      nje: navigator.javaEnabled(),
      nmtp: navigator.maxTouchPoints,
      nce: navigator.cookieEnabled,
      nd: navigator.doNotTrack,
      ndm: navigator.deviceMemory,
      ndc: navigator.hardwareConcurrency,
      sr: `${screen.width}*${screen.height}`,
      scd: screen.colorDepth,
      dc: document.charset || document.characterSet,
      dr: document.referrer,
      t: Date.now()
    };
  }
}

export const util = new Util();
