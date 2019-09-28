import React from 'react';
import axios from 'axios';

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
    const players = this.state.players.map((player) => <span key={player.id}>{player.name}</span>);
    return (
      <div>
        {players}
      </div>
    );
  }
};

export default App;
