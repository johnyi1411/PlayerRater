import React from 'react';

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: false,
    }
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e) {
    e.preventDefault();
    alert(`${document.getElementById('username').value},
      ${document.getElementById('password').value},
      ${document.getElementById('passwordconfirmation').value}`);
    this.props.toggleRegisterView();
  }

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <label>
          Username:
          <input id="username" type="text" />
        </label>
        <label>
          Password:
          <input id="password" type="password" />
        </label>
        <label>
          Retype Password:
          <input id="passwordconfirmation" type="password" />
        </label>
        <input type="submit" value="Register"/>
      </form>
    );
  }
}

export default Register;
