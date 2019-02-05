import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from './logo.svg';

class NewGame extends React.Component {
  state = {
    playerCount: 1,
    startingLife: 20,
  };

  static propTypes = {
    createGame: PropTypes.func,
  };

  static defaultProps = {
    createGame: () => {},
  };

  newGame = () => {
    const { createGame } = this.props;
    const { playerCount, startingLife } = this.state;

    createGame(playerCount, startingLife);
  };

  updateStartingLife = event => {
    const life = Number(event.currentTarget.value);
    this.setState({ startingLife: life });
  };

  updatePlayerCount = event => {
    const count = Number(event.currentTarget.value);
    this.setState({ playerCount: Number(count) });
  };

  render() {
    const { startingLife } = this.state;

    return (
      <Modal>
        <img src={logo} alt="Spindown - a counter app" />

        <SetupSteps>
          <StepItem>
            <StepName>Choose Starting Life</StepName>
            <StartingLifeInput
              type="number"
              value={startingLife}
              onChange={this.updateStartingLife}
            />
          </StepItem>

          <StepItem>
            <StepName>Choose Number of Players</StepName>
            <PlayerCount onChange={this.updatePlayerCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </PlayerCount>
          </StepItem>

          <StepItem>
            <Button onClick={this.newGame}>Start Game</Button>
          </StepItem>
        </SetupSteps>
      </Modal>
    );
  }
}

const Modal = styled.div`
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a0a0a;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`;

const SetupSteps = styled.ol`
  box-sizing: border-box;
  list-style: none;
  margin: 2em 2em 0;
  padding: 2em 2em 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${props => props.theme.colors.primary.b};
`;

const StepItem = styled.li`
  margin: 0 0 0.15em;
  display: flex;
  flex-direction: column;

  &:last-child {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0.5em;
  }
`;

const StepName = styled.h2`
  font-weight: 400;
  font-size: 1.5em;
  margin: 0.25em 0;
  color: ${props => props.theme.colors.secondary.c};
`;

const Button = styled.button`
  border: 1px solid #000;
  font-size: 1.5em;
  width: 100%;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary.a};
  color: ${props => props.theme.colors.secondary.c};
  padding: 0.25em 0;
  box-shadow: 1px 1px 3px ${props => props.theme.colors.tertiary.c};
`;

const StartingLifeInput = styled.input`
  border-radius: 3px;
  background-color: #0a0a0a;
  border: 1px solid ${props => props.theme.colors.tertiary.c};
  color: ${props => props.theme.colors.primary.c};
  font-size: 18px;
`;

const PlayerCount = styled.select`
  border-radius: 3px;
  background-color: #0a0a0a;
  border: 1px solid ${props => props.theme.colors.tertiary.c};
  color: ${props => props.theme.colors.primary.c};
  font-size: 18px;
  position: relative;

  :after {
    content: 'OPEN';
    color: red;
    position: absolute;
    right: 0;
    top: 50%;
  }
`;

export default NewGame;
