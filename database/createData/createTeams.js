const axios = require('axios');
const fs = require('fs');
const { key } = require('../config/fd.config');

const stream = fs.createWriteStream('teams.csv', {flags:'a'});

axios.get('https://api.football-data.org//v2/competitions/PL/teams',
  {
  'headers': {
    'Access-Control-Allow-Headers': 'X-Auth-Token',
    'X-Auth-Token': key
  }
})
  .then((result) => {
    const teams = result.data.teams.map((team) => {
      return {
        id: team.id,
        name: team.name,
        crestUrl: team.crestUrl
      };
    });
    return teams;
  })
  .then((teams) => {
    teams.forEach(({ id, name, crestUrl}) => {
      const data = `${id},${name},${crestUrl}`
      stream.write(data + '\n');
    });
  });

