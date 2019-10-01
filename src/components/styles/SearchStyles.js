import styled from 'styled-components';
import { FlexColumnDiv, FlexDiv } from './SharedStyles';

export const SearchedPlayerList = styled(FlexColumnDiv)`
  position: absolute;
  background: lightgray;
  top: 75px;
  width: 600px;
  z-index: 1;
  border: 1px solid black;
  border-bottom: none;
`

export const SearchBox = styled(FlexDiv)`
  border: 1px lightgray solid;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

export const SearchField = styled.input.attrs()`
  border: 0;
  width: 200px;
  height: 25px;
  font-size: 20px;
  margin-left: 5px;
`
