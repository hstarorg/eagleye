# hawkeye-sdk

The client sdk for hawkeye.

# Get started

```html
<script>
(function (window, document, tagName, sdkAddress, globalName, scriptEl, firstEl) {
  window['HawkeyeObject'] = globalName; window[globalName] = window[globalName] || function () {
    (window[globalName].q = window[globalName].q || []).push(arguments)
  }, window[globalName].l = 1 * new Date(); scriptEl = document.createElement(tagName),
    firstEl = document.getElementsByTagName(tagName)[0]; scriptEl.async = 1; scriptEl.src = sdkAddress; firstEl.parentNode.insertBefore(scriptEl, firstEl)
})(window, document, 'script', 'https://xxx.com/hawkeye-sdk.js', 'hawkeye');
hawkeye('create', 'appId', 'auto');
hawkeye('send', 'pageview');
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



