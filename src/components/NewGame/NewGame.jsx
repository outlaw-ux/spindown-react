import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
        <h1>Start New Game</h1>
        <ol>
          <li>
            <h2>Choose Starting Life</h2>
            <input
              type="number"
              value={startingLife}
              onChange={this.updateStartingLife}
            />
          </li>

          <li>
            <h2>Choose Number of Players</h2>
            <select onChange={this.updatePlayerCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </li>

          <li>
            <Button onClick={this.newGame}>Start Game</Button>
          </li>
        </ol>
      </Modal>
    );
  }
}

const Modal = styled.div`
  width: 80vw;
  position: fixed;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 10;
`;

const Button = styled.button`
  border: 1px solid #000;
  font-size: 18px;
`;

export default NewGame;
