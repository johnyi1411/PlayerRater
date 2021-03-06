const { Client } = require('pg');
const config = require('./config/pg.config');
const bcrypt = require('bcrypt');
const axios = require('axios');

const saltRounds = 10;

const client = new Client(config);
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('pg connected')
  }
});

class User {
  constructor(userId, username, password) {
    this.userId = userId;
    this.username = username;
    this.password = password;
  }

  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

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

  getAverageRatings: (callback) => {
    const text = "select name, players.player_id, rating, players.team_id FROM players LEFT OUTER JOIN (select player_id, AVG(rating) as rating from ratings group by player_id) average_ratings ON players.player_id = average_ratings.player_id WHERE rating is not null ORDER BY rating DESC LIMIT 25;";
    client
      .query(text)
      .then((res) => {
        const results = res.rows.map((player) => {
          player.rating = Number(player.rating).toFixed(2);
          return player;
        });
        callback(null, results);
      })
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },

  createRating: ({userId, playerId, rating}, callback) => {
    const text = 'INSERT INTO ratings VALUES($1, $2, $3)';
    client
      .query(text, [userId, playerId, rating])
      .then((res) => callback(null, res))
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },

  createUser: ({username, password}, callback) => {
    const text = 'INSERT INTO users (username, password, salt) VALUES($1, $2, $3)';
    const salt = bcrypt.genSaltSync(saltRounds);
    client
      .query(text, [username, bcrypt.hashSync(password, salt), salt])
      .then((res) => callback(null, res))
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },

  login: ({username}, callback) => {
    const text = 'SELECT * FROM users WHERE username = $1';
    client
      .query(text, [username])
      .then((res) => {
        if (res.rows[0]) {
          const user = new User (res.rows[0].user_id, res.rows[0].username, res.rows[0].password);
          callback(null, user);
        } else {
          callback('no user found');
        }
      })
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },

  getAllTeams: (callback) => {
    client
      .query('SELECT * from teams')
      .then((res) => callback(null, res.rows))
      .catch(e => {
        console.error(e.stack);
        callback(e);
      });
  },
  
};
