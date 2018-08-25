const path = require('path');

module.exports = {
  port: 4124,
  routesPath: path.join(__dirname, '..', 'routes'),
  mongoAddress: 'mongodb://192.168.1.200:27017/hawkeye',
  mongoDbName: 'hawkeye'
};
