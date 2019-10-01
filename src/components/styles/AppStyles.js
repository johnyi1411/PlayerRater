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
