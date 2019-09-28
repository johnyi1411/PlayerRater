const axios = require('axios');
const fs = require('fs');
const { key } = require('../config/fd.config');

axios.get('https://api.football-data.org//v2/competitions/PL/teams',
  {
  'headers': {
      'Access-Control-Allow-Headers': 'X-Auth-Token',
      'X-Auth-Token': key
  }
})
  .then((result) => {
    console.log(result.data);
  });