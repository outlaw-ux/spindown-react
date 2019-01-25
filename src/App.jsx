import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import NewGame from 'components/NewGame';
import Players from 'components/Players';
import theme from 'theme';

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
      <ThemeProvider theme={theme}>
        <AppWrap>
          {startingLife > 0 && (
            <ResetButton onClick={this.resetGame}>Reset</ResetButton>
          )}
          {startingLife === 0 && <NewGame createGame={this.createGame} />}
          <Players players={players} updatePlayer={this.updatePlayer} />
        </AppWrap>
      </ThemeProvider>
    );
  }
}

const AppWrap = styled.div`
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    html {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`;

const ResetButton = styled.button`
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  color: ${props => props.theme.colors.tertiary.f};
`;

export default App;
