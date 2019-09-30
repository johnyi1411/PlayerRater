import React from 'react';
import axios from 'axios';
import { FlexColumnDiv } from './styles/SharedStyles';
import SearchedPlayer from './SearchedPlayer';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      players: [],
      selectedPlayerId: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
    this.clearSelectedPlayer = this.clearSelectedPlayer.bind(this);
  }

  componentDidMount() {
    axios.get('/api/players')
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({
      searchString: event.target.value.toLowerCase(),
      selectedPlayerId: null
    });
  }

  clearSelectedPlayer() {
    this.setState({ selectedPlayerId: null });
  }

  handlePlayerSelection(selectedPlayerId) {
    if (selectedPlayerId === this.state.selectedPlayerId) {
      this.setState({ selectedPlayerId: null });
    } else {
      this.setState({ selectedPlayerId });
    }
  }

  render() {
    let searchedPlayers = [];
    if (this.state.searchString.length > 0) {
      searchedPlayers = this.state.players.filter((player) => player.name.toLowerCase().includes(this.state.searchString));
    }

    const numberOfPlayers = searchedPlayers.length > 10 ? 10 : searchedPlayers.length;
    const listedSearchedPlayers = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      listedSearchedPlayers.push(
      <SearchedPlayer
        key={searchedPlayers[i].player_id}
        player={searchedPlayers[i]}
        selectedPlayerId={this.state.selectedPlayerId}
        handlePlayerSelection={this.handlePlayerSelection}
        clearSelectedPlayer={this.clearSelectedPlayer}
        getAverageRatings={this.props.getAverageRatings}
      />
      );
    }

    return (
      <FlexColumnDiv>
        <form>
          <label>
            Name:
            <input type="text" value={this.state.searchString} onChange={this.handleChange} />
          </label>
        </form>
        {listedSearchedPlayers}
      </FlexColumnDiv>
    );  
  }
}

export default Search;