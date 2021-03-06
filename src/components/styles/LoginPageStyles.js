import styled from 'styled-components';
import { FlexDiv, FlexColumnDiv } from './SharedStyles';

export const LoginPageStyled = styled(FlexColumnDiv)`
  width: 300px;
  height: 300px;
  z-index: 10;
  border: black solid 1px;
  border-radius: 3px;
  background: white;
  padding: 15px;
  justify-content: space-evenly;
`

export const PageFillDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%
  width: 100%
`

export const ModalBackground = styled(FlexDiv)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%
  width: 100%
  background-color: gray;
  opacity: 0.4;
  z-index:1
`
