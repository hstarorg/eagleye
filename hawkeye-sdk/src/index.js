import { actionProcessor } from './actionProcessor';

window['HawkeyeObject'].forEach(action => {
  action.type && actionProcessor.processAction(action);
});
delete window['HawkeyeObject'];

function hawkeye(type, payload) {
  actionProcessor.processAction({ type, payload });
}

hawkeye.config = function(configObj) {
  this('config', configObj);
};

hawkeye.trackPageView = function() {
  this('send', { event: 'pageview' });
};

hawkeye.trackPerformance = function() {
  this('send', { event: 'performance' });
};

export default hawkeye;
