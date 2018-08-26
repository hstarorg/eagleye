const validConfigKeys = [];

const config = {
  reportUrl: '',
  appId: '',
  setConfig(configObj) {
    const validConfg = {};
    // Only assign valid keys
    Object.keys(configObj)
      .filter(k => validConfigKeys.indexOf(k) >= 0)
      .forEach(k => (validConfg[k] = configObj[k]));
    Object.assign(this, validConfg);
  }
};

validConfigKeys.push(...Object.keys(config).filter(x => x !== 'setConfig'));

export { config };
