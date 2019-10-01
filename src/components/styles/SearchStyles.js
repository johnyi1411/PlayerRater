import styled from 'styled-components';
import { FlexColumnDiv, FlexDiv } from './SharedStyles';

export const SearchedPlayerList = styled(FlexColumnDiv)`
  position: absolute;
  background: lightgray;
  top: 62px;
  width: 600px;
  z-index: 1;
`

export const SearchBox = styled(FlexDiv)`
  border: 1px lightgray solid;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

export const SearchField = styled.input.attrs()`
  border: 0;
`
