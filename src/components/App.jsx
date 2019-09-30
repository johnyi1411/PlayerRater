import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';
import { FlexDiv } from './styles/SharedStyles'
import { RatingTable } from './styles/AppStyles';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios.get('/players')
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const players = this.state.players.map((player) => <Player key={player.player_id} player={player} />);
    return (
      <FlexDiv>
        <Search />
        <RatingTable>
          {players}
        </RatingTable>
      </FlexDiv>
    );
  }
};

export default App;
