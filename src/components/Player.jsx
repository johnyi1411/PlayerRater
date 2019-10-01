import React from 'react';
import styled from 'styled-components';
import { FlexSpaceBetweenDiv } from './styles/SharedStyles'

const Player = ({player, index}) => {
  const PlayerStyle = styled(FlexSpaceBetweenDiv)`
    background-color: ${index % 2 === 0 ? 'rgb(153, 204, 255)' : 'background-color: rgb(204, 255, 255)'};
  `
  return (
    <PlayerStyle>
      <span>{player.name}</span>
      <span>{player.rating}</span>
    </PlayerStyle>
  );
};

export default Player;
