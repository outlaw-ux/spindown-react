import React, { Component } from 'react';
import styled from 'styled-components';

import NewGame from 'components/NewGame';
import Players from 'components/Players';

import { generatePlayers, updateArrayAt } from './utils';

class App extends Component {
  state = {
    startingLife: 0,
    players: [],
  };

  createGame = (playerCount, startingLife) => {
    const players = generatePlayers(playerCount, startingLife);
    console.log('players', playerCount, startingLife, players);

    this.setState({ startingLife, players });
  };

  resetGame = () => {
    this.setState({ startingLife: 0 });
  };

  updatePlayer = (id, updatedStats) => {
    const { players } = this.state;
    const playerIndex = players.findIndex(player => player.id === id);
    const updatedPlayers = updateArrayAt(players, playerIndex, player => ({
      ...player,
      ...updatedStats,
    }));

    this.setState({ players: updatedPlayers });
  };

  render() {
    const { players, startingLife } = this.state;

    return (
      <AppWrap>
        {startingLife > 0 && (
          <ResetButton onClick={this.resetGame}>Reset</ResetButton>
        )}
        {startingLife === 0 && <NewGame createGame={this.createGame} />}
        <Players players={players} updatePlayer={this.updatePlayer} />
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  display: flex;
`;

const ResetButton = styled.button`
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  color: #fff;
`;

export default App;
