import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
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
        this.setState({
          login: true,
        }, () => this.props.createSession(result.data.user.userId));
      })
      .catch((err) => {
        console.log(err);
        alert('error logging in');
      })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label>
          Username:
          <input id="username" type="text" />
        </label>
        <label>
          Password:
          <input id="password" type="password" />
        </label>
        <input type="submit" value="Login"/>
        <input type="button" value="Register" onClick={this.props.toggleRegisterView} />
      </form>
    );
  }
}

export default Login;
