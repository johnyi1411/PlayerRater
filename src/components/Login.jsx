import React from 'react';

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
    alert(`${document.getElementById('username').value}, ${document.getElementById('password').value}`);
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
