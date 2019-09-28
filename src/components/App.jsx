import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';

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
        this.setState({ players: response.data.squad });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const players = this.state.players.map((player) => <Player key={player.id} player={player} />);
    return (
      <div>
        <Search />
        {players}
      </div>
    );
  }
};

export default App;
