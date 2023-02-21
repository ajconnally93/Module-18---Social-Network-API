
// imports mongoDB
const { connect, connection } = require('mongoose');


// will create db in MongoDB
const conStr =
  process.env.MONGODB_URI || 'mongodb://localhost/studentsDB';




connect(conStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// exports connection
module.exports = connection;