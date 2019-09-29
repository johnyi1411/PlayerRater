const { Client } = require('pg');
const config = require('./config/pg.config');

const client = new Client(config);
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('pg connected')
  }
});

client
  .query('SELECT * from dishes')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack));
