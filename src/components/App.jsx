import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';
import LoginPage from './LoginPage';
import { FlexDiv, FlexColumnDiv, FlexSpaceBetweenDiv } from './styles/SharedStyles'
import { AppTable } from './styles/AppStyles';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ratings: [],
      userId: null,
      loginView: false,
      registerView: false,
      username: null,
      };
    this.getAverageRatings = this.getAverageRatings.bind(this);
    this.createSession = this.createSession.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
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

  createSession({userId, username}) {
    this.setState({ userId, username }, this.toggleLoginView);
  }

  toggleLoginView() {
    this.setState({ loginView: !this.state.loginView });
  }

  render() {
    const ratings = this.state.ratings.map((player) => <Player key={player.player_id} player={player} />);

    let userView;

    if (this.state.userId) {
      userView = <FlexDiv>
        <span>{this.state.username}</span>
        <button onClick={() => this.setState({
          loginView: false,
          userId: null,
          username: null,
        })}>Logout</button>
      </FlexDiv>
    } else {
      userView = <FlexDiv>
        <button onClick={() => this.setState({ loginView: true })}>Login</button>
    </FlexDiv>
    }

    const loginPage = this.state.loginView ? <LoginPage toggleRegisterView={this.toggleRegisterView}
      createSession={this.createSession} toggleLoginView={this.toggleLoginView}/> : undefined;

    return (
      <AppTable>
        {loginPage}
        <FlexSpaceBetweenDiv>
          <Search getAverageRatings={this.getAverageRatings} userId={this.state.userId}/>
          {userView}
        </FlexSpaceBetweenDiv>
        <FlexColumnDiv>
          {ratings}
        </FlexColumnDiv>
      </AppTable>
    );
  }
};

export default App;
