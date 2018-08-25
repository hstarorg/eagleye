const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const config = require('../config');
let clientCache;

class MongoDbHelper {
  /**
   *
   * @param {object} options
   * @param {string} options.mongoAddress
   * @param {string} options.dbName
   */
  constructor(options) {
    this.options = options;
    this.Collections = {
      NavigationTiming: 'navigationTiming',
      ResourceTiming: 'resourceTiming'
    };
  }

  /**
   *
   * @param {*} name
   * @returns {Promise<mongo.Collection>}
   */
  collection(name) {
    return this._getDb().then(db => db.collection(name));
  }

  _getDb() {
    return this._getClient().then(client => client.db(this.options.dbName));
  }

  _getClient() {
    return new Promise((resolve, reject) => {
      // Find connected clinet, direct return.
      if (clientCache && clientCache.isConnected()) {
        return clientCache;
      }
      MongoClient.connect(
        this.options.mongoAddress,
        (err, client) => {
          if (err) {
            return reject(err);
          }
          clientCache = client;
          resolve(clientCache);
        }
      );
    });
  }
}

const mongoOpt = { mongoAddress: config.mongoAddress, dbName: config.mongoDbName };
module.exports = new MongoDbHelper(mongoOpt);
