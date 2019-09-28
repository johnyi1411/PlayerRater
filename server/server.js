const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')


const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/players', (req, res) => {
  res.send(require('../database/exampleData'));
});

app.post('/players', (req, res) => {
  console.log(req.body, req.params);
  res.send({status: 200});
})
