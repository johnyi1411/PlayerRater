import React from 'react';

const Player = ({player}) => {
  return (
    <div>
      <span>{player.name}</span>
      <span>{player.position}</span>
    </div>
  );
};

export default Player;
