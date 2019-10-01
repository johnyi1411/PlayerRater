import React from 'react';
import axios from 'axios';
import SearchedPlayer from './SearchedPlayer';
import { FlexColumnDiv } from './styles/SharedStyles';
import { SearchedPlayerList, SearchBox, SearchField } from './styles/SearchStyles';

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
    this.setState({
      selectedPlayerId: null,
      searchString: '',
    });
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
        userId={this.props.userId}
      />
      );
    }

    let searchList;

    if (listedSearchedPlayers.length > 0) {
      searchList = <SearchedPlayerList>
        {listedSearchedPlayers}
      </SearchedPlayerList>
    }

    return (
      <FlexColumnDiv>
        <SearchBox >
          <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '16px', width: '16px', display: 'block', fill: 'gray'}}><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
          <SearchField type="text" value={this.state.searchString} onChange={this.handleChange} />
        </SearchBox>
        {searchList}
      </FlexColumnDiv>
    );  
  }
}

export default Search;