const axios = require('axios');
const fs = require('fs');
const { key } = require('../config/fd.config');

const stream = fs.createWriteStream("players.csv", {flags:'a'});

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
    for (let i = 15; i < 20; i++) {
      axios.get(`https://api.football-data.org//v2/teams/${teams[i].id}`,
        {
        'headers': {
          'Access-Control-Allow-Headers': 'X-Auth-Token',
          'X-Auth-Token': key
        }
      })
        .then((result) => {
          const squad = result.data.squad;
          for (let j = 0; j < squad.length; j++) {
            if (squad[j].role !== 'PLAYER') {
              continue;
            }
            const {
              id,
              name,
              position,
              shirtNumber,
            } = squad[j];
            const data = `${id},${name},${position},${shirtNumber},${teams[i].id}`;
            stream.write(data + "\n");
          }
        })
        .then(() => {
          console.log('wrote team', i);
        });
    }
  });

