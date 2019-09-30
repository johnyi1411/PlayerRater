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

module.exports = {
  getPlayers: (callback) => {
    client
      .query('SELECT * from players')
      .then((res) => callback(null, res.rows))
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },
  createRating: ({playerId, rating}, callback) => {
    const text = 'INSERT INTO ratings VALUES($1, $2, $3)';
    client
      .query(text, [1, playerId, rating])
      .then((res) => callback(null, res))
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
    },
};
