import cookie from 'js-cookie';

export const storage = {
  get(key) {
    let strValue;
    if (window.localStorage) {
      strValue = window.localStorage.getItem(key);
    }
    if (!strValue) {
      strValue = cookie.get(key);
    }
    try {
      return JSON.parse(strValue);
    } catch (e) {
      return null;
    }
  },

  set(key, value) {
    var strValue = JSON.stringify(value);
    if (window.localStorage) {
      window.localStorage.setItem(key, strValue);
    }
    cookie.set(key, strValue, { expires: 365 * 100 }); // cache 100 years
  }
};
