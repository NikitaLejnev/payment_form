const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');
const paymentModel = require('./payment.model');

mongoose.Promise = global.Promise;
const db = {
  mongoose,
  url: dbConfig.url,
  payments: paymentModel(mongoose),
};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.payments = paymentModel(mongoose);

module.exports = db;
