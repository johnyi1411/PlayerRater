import React from 'react';
import Rater from './Rater';
import { FlexColumnDiv } from './styles/SharedStyles';

const SearchedPlayer = ({ player, handlePlayerSelection, selectedPlayerId, clearSelectedPlayer }) => {
  let rater;
  if (selectedPlayerId === player.player_id) {
    rater = <Rater player={player} clearSelectedPlayer={clearSelectedPlayer}/>
  }
  return (
    <FlexColumnDiv>
      <span onClick={() => handlePlayerSelection(player.player_id)}>{player.name}</span>
      {rater}
    </FlexColumnDiv>
  );
};

export default SearchedPlayer;
