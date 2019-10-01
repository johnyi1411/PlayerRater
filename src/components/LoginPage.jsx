import React from 'react';
import User from './User';
import { LoginPageStyled, ModalBackground, PageFillDiv } from './styles/LoginPageStyles';

const LoginPage = (props) => {
  return (
    <PageFillDiv>
      <ModalBackground>
      </ModalBackground>
      <LoginPageStyled>
        <User toggleRegisterView={props.toggleRegisterView} createSession={props.createSession} />
      </LoginPageStyled>
    </PageFillDiv>
  );
};

export default LoginPage;
