
// imports mongoDB
// const { connect, connection } = require('mongoose');


// // will create db in MongoDB


// // exports connection
// module.exports = connection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
