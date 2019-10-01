import React from 'react';
import Rater from './Rater';
import { MarginFlexDiv } from './styles/SearchedPlayerStyle';

const SearchedPlayer = ({ player, handlePlayerSelection, selectedPlayerId, clearSelectedPlayer, getAverageRatings, userId }) => {
  let rater;
  if (selectedPlayerId === player.player_id) {
    rater = <Rater player={player} clearSelectedPlayer={clearSelectedPlayer} getAverageRatings={getAverageRatings} userId={userId}/>
  }
  return (
    <MarginFlexDiv>
      <span onClick={() => handlePlayerSelection(player.player_id)}>{player.name}</span>
      {rater}
    </MarginFlexDiv>
  );
};

export default SearchedPlayer;
