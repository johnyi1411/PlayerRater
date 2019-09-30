import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';
import User from './User';
import { FlexDiv, FlexColumnDiv } from './styles/SharedStyles'
import { RatingTable } from './styles/AppStyles';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ratings: [],
      userId: null,
    };
    this.getAverageRatings = this.getAverageRatings.bind(this);
    this.createSession = this.createSession.bind(this);
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

  

  createSession(userId) {
    this.setState({ userId });
  }

  render() {
    const ratings = this.state.ratings.map((player) => <Player key={player.player_id} player={player} />);

    return (
      <FlexDiv>
        <FlexColumnDiv>
          <User toggleRegisterView={this.toggleRegisterView} createSession={this.createSession}/>
          <Search getAverageRatings={this.getAverageRatings} userId={this.state.userId}/>
        </FlexColumnDiv>
        <RatingTable>
          {ratings}
        </RatingTable>
      </FlexDiv>
    );
  }
};

export default App;
