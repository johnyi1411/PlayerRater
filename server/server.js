const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postgres = require('../database/postgres');

const app = express();
const port = 3000;

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
})
