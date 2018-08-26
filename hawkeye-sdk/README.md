# hawkeye-sdk

The client sdk for hawkeye.

# Get started

```html
<script>
tion (window, document, sdkAddress, libName) {
  window[libName] = function (action, args) {
    window.HawkeyeObject = window.HawkeyeObject || [];
    window.HawkeyeObject.push({ action, payload: args });
  };
  var scriptEl = document.createElement('script');
  var firstEl = document.getElementsByTagName('script')[0];
  scriptEl.async = 1;
  scriptEl.src = sdkAddress;
  firstEl.parentNode.insertBefore(scriptEl, firstEl);
})(window, document, 'http://localhost:4123/hawkeye-sdk.js', 'hawkeye');
hawkeye('config', {
  reportUrl: 'http://localhost:4124/collect',
  appId: '123456-1'
});
</script>
```

# Develop

```bash
# Clone project
git clone <project url>

# Install deps
npm i

# Run dev
npm start
# or
npm run dev

# Build
npm run build
```

# Changelog

## 0.0.1 (2018-8-xx)



