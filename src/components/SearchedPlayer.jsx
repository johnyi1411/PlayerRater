import React from 'react';
import Rater from './Rater';
import { FlexColumnDiv } from './styles/SharedStyles';

const SearchedPlayer = ({ player, handlePlayerSelection, selectedPlayerId }) => {
  let rater;
  if (selectedPlayerId === player.id) {
    rater = <Rater player={player}/>
  }
  return (
    <FlexColumnDiv>
      <span onClick={() => handlePlayerSelection(player.id)}>{player.name}</span>
      {rater}
    </FlexColumnDiv>
  );
};

export default SearchedPlayer;
