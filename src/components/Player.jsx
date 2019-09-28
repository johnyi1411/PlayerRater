import React from 'react';
import { FlexSpaceBetweenDiv } from './styles/SharedStyles'

const Player = ({player}) => {
  return (
    <FlexSpaceBetweenDiv>
      <span>{player.name}</span>
      <span>{player.position}</span>
    </FlexSpaceBetweenDiv>
  );
};

export default Player;
