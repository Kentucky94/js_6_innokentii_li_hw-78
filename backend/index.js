const express = require('express');
const cors = require('cors');

const config = require('./config');
const filedb = require('./filedb');
const messages = require('./app/messages');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static('public'));

app.use('/messages', messages);

const run = async () => {
  await filedb.init();

  app.listen(config.port, () => {
    console.log('Try', config.port)
  });
};

run().catch(e => {
  console.error(e)
});