import uuid from 'uuid';

import { storage } from './storage';

const TRACK_ID_KEY = 'hawkeye-track-id';

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

  getTrackId() {
    let trackId = storage.get(TRACK_ID_KEY);
    if (!trackId) {
      trackId = `hawkeye-${uuid.v4()}`;
      storage.set(TRACK_ID_KEY, trackId);
    }
    return trackId;
  }
}

export const util = new Util();
