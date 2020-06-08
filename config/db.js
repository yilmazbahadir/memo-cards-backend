var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1', {
  dbName: 'memocards',
  autoCreate: true,
  user: 'root',
  pass: 'example',
});

module.exports = mongoose;
