import React from 'react';
import axios from 'axios';
import Player from './Player';
import Search from './Search';
import LoginPage from './LoginPage';
import { FlexColumnDiv, FlexAlignCenterDiv } from './styles/SharedStyles'
import { AppTable, TopBar, LoginButton, Username } from './styles/AppStyles';
import User from './User';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ratings: [],
      userId: null,
      loginView: false,
      registerView: false,
      username: null,
      teams: {},
      };
    this.getAverageRatings = this.getAverageRatings.bind(this);
    this.createSession = this.createSession.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
  }

  getAverageRatings() {
    axios.get('/api/ratings')
      .then((response) => {
        response.data.forEach((rating) => rating.teamCrest = this.state.teams[rating.team_id]);
        this.setState({ ratings: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    axios.get('/api/teams')
      .then((result) => {
        const teams = {};
        result.data.forEach((team) => {
          teams[team.team_id] = team.crest_url;
        });
        this.setState({ teams });
      })
      .then(() => {
        this.getAverageRatings();
      })
      .catch((e) => console.log(e));
  }

  createSession({userId, username}) {
    this.setState({ userId, username }, this.toggleLoginView);
  }

  toggleLoginView() {
    this.setState({ loginView: !this.state.loginView });
  }

  render() {
    const ratings = this.state.ratings.map((player, index) => <Player index={index} key={player.player_id} player={player} />);

    let userView;

    if (this.state.userId) {
      userView = <FlexAlignCenterDiv>
        <Username>{this.state.username}</Username>
        <LoginButton onClick={() => this.setState({
          loginView: false,
          userId: null,
          username: null,
        })}>Logout</LoginButton>
      </FlexAlignCenterDiv>
    } else {
      userView = <LoginButton onClick={() => this.setState({ loginView: true })}>Login</LoginButton>
    }

    const loginPage = this.state.loginView ? <LoginPage toggleRegisterView={this.toggleRegisterView}
      createSession={this.createSession} toggleLoginView={this.toggleLoginView}/> : undefined;

    return (
      <AppTable>
        {loginPage}
        <TopBar>
          <Search getAverageRatings={this.getAverageRatings} userId={this.state.userId}/>
          {userView}
        </TopBar>
        <FlexColumnDiv>
          {ratings}
        </FlexColumnDiv>
      </AppTable>
    );
  }
};

export default App;
