// basic server file to run server

const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// NOTE: Will use MongoDB but can still run in Insomnia

// similar to a 3rd party API except we are building it
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API Server is running. ${PORT}.`);
  });
});