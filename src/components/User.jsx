import React from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import { FlexDiv } from './styles/SharedStyles';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      login: false,
      username: null,
      registerView: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleRegisterView = this.toggleRegisterView.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/login',
      data: {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
    })
      .then((result) => {
        this.props.createSession(result.data.user);
      })
      .catch((err) => {
        alert('error logging in');
      })
  }

  toggleRegisterView() {
    this.setState({ registerView: !this.state.registerView });
  }

  handleLogout() {
    this.setState({
      login: false,
      username: null,
    }, () => this.props.createSession(null))
  }

  render() {
    let user = this.state.registerView ? 
      <Register toggleRegisterView={this.toggleRegisterView}/> 
      : <Login toggleRegisterView={this.toggleRegisterView}
      createSession={this.props.createSession}
      handleLogin={this.handleLogin}
      toggleLoginView={this.props.toggleLoginView}/>;
    
    return user;
  }
}

export default User;
