import React from 'react';
import { FlexForm } from './styles/LoginRegisterStyles';

const Login = (props) => (
  <FlexForm onSubmit={props.handleLogin}>
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
  </FlexForm>
);

export default Login;
