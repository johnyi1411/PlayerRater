import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';
import Login from './Login';
import Register from './Register';
import { FlexDiv, FlexColumnDiv } from './styles/SharedStyles'
import { RatingTable } from './styles/AppStyles';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ratings: [],
      registerView: false,
    };
    this.getAverageRatings = this.getAverageRatings.bind(this);
    this.toggleRegisterView = this.toggleRegisterView.bind(this);
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

  toggleRegisterView() {
    this.setState({ registerView: !this.state.registerView });
  }

  render() {
    const ratings = this.state.ratings.map((player) => <Player key={player.player_id} player={player} />);
    const login = this.state.registerView ? <Register toggleRegisterView={this.toggleRegisterView}/> : <Login toggleRegisterView={this.toggleRegisterView}/>;

    return (
      <FlexDiv>
        <FlexColumnDiv>
          {login}
          <Search getAverageRatings={this.getAverageRatings}/>
        </FlexColumnDiv>
        <RatingTable>
          {ratings}
        </RatingTable>
      </FlexDiv>
    );
  }
};

export default App;
