import React from 'react';
import axios from 'axios';
import { FlexColumnForm } from './styles/LoginRegisterStyles';

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
    if (document.getElementById('username').value.length === 0) {
      alert('please choose a username');
      return;
    }

    if (document.getElementById('password').value.length === 0) {
      alert('please choose a username');
      return;
    }

    if (document.getElementById('password').value === document.getElementById('passwordconfirmation').value) {
      axios({
        method: 'post',
        url: '/api/users',
        data: {
          username: document.getElementById('username').value,
          password: document.getElementById('password').value
        }
      })
        .then((res) => {
          alert('user created');
          this.props.toggleRegisterView();
        })
        .catch((err) => {
          alert('error creating user');
        })
    } else {
      alert('passwords do not match');
    }
  }

  render() {
    return (
      <FlexColumnForm onSubmit={this.handleRegister}>
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
        <input type="button" value="Login" onClick={this.props.toggleRegisterView} />
      </FlexColumnForm>
    );
  }
}

export default Register;
