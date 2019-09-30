import React from 'react';

const Login = (props) => (
  <form onSubmit={props.handleLogin}>
    <label>
      Username:
      <input id="username" type="text" />
    </label>
    <label>
      Password:
      <input id="password" type="password" />
    </label>
    <input type="submit" value="Login"/>
    <input type="button" value="Register" onClick={props.toggleRegisterView} />
  </form>
);

export default Login;
