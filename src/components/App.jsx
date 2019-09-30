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
      ratings: [],
    };
    this.getAverageRatings = this.getAverageRatings.bind(this);
  }

  getAverageRatings() {
    axios.get('/api/ratings')
      .then((response) => {
        this.setState({ ratings: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAverageRatings();
  }

  render() {
    const ratings = this.state.ratings.map((player) => <Player key={player.player_id} player={player} />);
    return (
      <FlexDiv>
        <Search getAverageRatings={this.getAverageRatings}/>
        <RatingTable>
          {ratings}
        </RatingTable>
      </FlexDiv>
    );
  }
};

export default App;
