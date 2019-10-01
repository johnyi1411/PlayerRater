import styled from 'styled-components';
import { FlexSpaceBetweenDiv } from './SharedStyles';

export const PlayerStyle = styled(FlexSpaceBetweenDiv)`
  background-color: ${index % 2 === 0 ? 'rgb(153, 204, 255)' : 'background-color: rgb(204, 255, 255)'};
`

// export const LightPlayer = styled(FlexSpaceBetweenDiv)`
//   background-color: rgb(204, 255, 255);
// `
