import React from 'react';
import User from './User';
import { LoginPageStyled, ModalBackground, PageFillDiv } from './styles/LoginPageStyles';

const LoginPage = (props) => {
  return (
    <PageFillDiv>
      <ModalBackground />
      <LoginPageStyled>
        <User toggleRegisterView={props.toggleRegisterView}
          createSession={props.createSession}
          toggleLoginView={props.toggleLoginView}/>
        <button onClick={props.toggleLoginView}>X</button>
      </LoginPageStyled>
    </PageFillDiv>
  );
};

export default LoginPage;
