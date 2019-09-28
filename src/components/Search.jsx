import React from 'react';
import axios from 'axios';
import { FlexColumnDiv } from './styles/SharedStyles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      players: [],
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({searchString: event.target.value.toLowerCase()});
  }

  render() {
    let searchedPlayers = [];
    if (this.state.searchString.length > 0) {
      searchedPlayers = this.state.players.filter((player) => player.name.toLowerCase().includes(this.state.searchString));
    }

    const numberOfPlayers = searchedPlayers.length > 10 ? 10 : searchedPlayers.length;
    const listedSearchedPlayers = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      listedSearchedPlayers.push(<span>{searchedPlayers[i].name}</span>)
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