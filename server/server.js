const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const postgres = require('../database/postgres');

const app = express();
const port = 3000;

passport.use(new LocalStrategy(
  (username, password, done) => {
    postgres.login({username}, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.userId);
});

passport.deserializeUser(function(user, done) {
  done(null, user.userId);
});

app.use(passport.initialize());

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/api/players', (req, res) => {
  postgres.getPlayers((err, result) => {
    if (err) {
      console.log(err);
      res.send({status: 500});
    } else {
      res.send(result);
    }
  });
});

app.get('/api/ratings', (req, res) => {
  postgres.getAverageRatings((err, result) => {
    if (err) {
      console.log(err);
      res.send({status: 500});
    } else {
      res.send(result);
    }
  });
});

app.post('/api/ratings', (req, res) => {
  postgres.createRating(req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.send({status: 500});
    } else {
      res.send({status: 200});
    }
  });
});

app.post('/api/users', (req, res) => {
  postgres.createUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.send({status: 500});
    } else {
      res.send({status: 200});
    }
  });
});

app.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    res.send({user: req.user, session: req.session});
  }
);
