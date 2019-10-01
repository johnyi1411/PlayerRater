import styled from 'styled-components'
import { FlexColumnDiv, FlexSpaceBetweenDiv } from './SharedStyles';

export const AppTable = styled(FlexColumnDiv)`
  width: 600px;
  border: black 1px solid;
  border-radius: 3px;
  padding: 5px;
  font-family: Arial;
`

export const TopBar = styled(FlexSpaceBetweenDiv)`
  margin: 25px 0;
`

export const LoginButton = styled.button.attrs()`
  background: darkslateblue;
  margin-right: 25px;
  border: 1px darkslateblue solid;
  border-radius: 3px;
  height: 35px;
  width: 75px;
  color: white;
  font-weight: 600;
  font-size: 15px;
`

export const Username = styled.span.attrs()`
  font-size: 25px;
  margin-right: 25px;
`
