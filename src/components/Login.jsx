import React from 'react';
import { FlexColumnForm } from './styles/LoginRegisterStyles';

const Login = (props) => (
  <FlexColumnForm onSubmit={props.handleLogin}>
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
  </FlexColumnForm>
);

export default Login;
