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

app.get('/players', (req, res) => {
  postgres.getPlayers((result) => {
    res.send(result);
  });
});

app.post('/players', (req, res) => {
  console.log(req.body, req.params);
  res.send({status: 200});
})
