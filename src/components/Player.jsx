import React from 'react';
import styled from 'styled-components';
import { FlexSpaceBetweenDiv, FlexAlignCenterDiv } from './styles/SharedStyles';
import { Crest, PlayerName, FixedDiv, RatingSpan } from './styles/PlayerStyles';

const Player = ({player, index}) => {
  const PlayerStyle = styled(FlexSpaceBetweenDiv)`
    background-color: ${index % 2 === 0 ? 'rgb(204, 242, 255)' : 'white'};
    padding: 5px 10px;
  `
  return (
    <PlayerStyle>
      <FlexAlignCenterDiv>
        <FixedDiv>
          <Crest src={player.teamCrest} />
        </FixedDiv>
        <PlayerName>{player.name}</PlayerName>
      </FlexAlignCenterDiv>
      <RatingSpan>{player.rating}</RatingSpan>
    </PlayerStyle>
  );
};

export default Player;
