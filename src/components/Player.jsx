import React from 'react';
import styled from 'styled-components';
import { FlexAlignCenterDiv } from './styles/SharedStyles';
import { Crest, PlayerName, FixedDiv, RatingSpan } from './styles/PlayerStyles';

const Player = ({player, index}) => {
  const PlayerStyle = styled.div.attrs({
    style: {
      background: index % 2 === 0 ? 'rgb(204, 242, 255)' : 'white'
    }
  })`
  padding: 5px 10px;
  justify-content: space-between;
  display: flex;
  `

  return (
    <PlayerStyle>
      <FlexAlignCenterDiv>
        <FixedDiv>
          <Crest key={player.player_id} src={player.teamCrest} />
        </FixedDiv>
        <PlayerName>{player.name}</PlayerName>
      </FlexAlignCenterDiv>
      <RatingSpan>{player.rating}</RatingSpan>
    </PlayerStyle>
  );
};

export default Player;
