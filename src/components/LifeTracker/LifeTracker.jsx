import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

class LifeTracker extends React.Component {
  state = {
    isEditingName: false,
    editingName: '',
  };

  static propTypes = {
    player: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      currentLife: PropTypes.number,
    }).isRequired,
    onChange: PropTypes.func,
    playerCount: PropTypes.number.isRequired,
  };

  static defaultProps = {
    onChange: () => {},
  };

  updatePlayerLife = change => () => {
    const { onChange, player } = this.props;

    onChange(player.id, {
      ...player,
      currentLife: player.currentLife + change,
    });
  };

  updatePlayerName = event => {
    const { onChange, player } = this.props;
    const newName = event.currentTarget.value;

    this.setState({ editingName: newName });

    if (!newName) {
      onChange(player.id, {
        ...player,
        name: `Player ${player.id}`,
      });
    } else {
      onChange(player.id, {
        ...player,
        name: newName,
      });
    }
  };

  toggleNameEdit = () => {
    const { player } = this.props;
    const { isEditingName } = this.state;

    if (!isEditingName) {
      Mousetrap.bindGlobal('return', () => {
        this.toggleNameEdit();
      });
    } else {
      Mousetrap.unbind('return');
    }

    this.setState({
      isEditingName: !isEditingName,
      editingName: player.name,
    });
  };

  render() {
    const { player, playerCount } = this.props;
    const { editingName, isEditingName } = this.state;

    return (
      <Wrapper playerCount={playerCount}>
        <Clicker onClick={this.updatePlayerLife(1)}>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 8"
            alt="increase life"
            fill="currentColor"
          >
            <path
              d="M4 0l-4 4 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-4-4z"
              transform="translate(0 1)"
            />
          </Icon>
        </Clicker>

        <Center>
          <Tracker>{player.currentLife}</Tracker>
          {isEditingName ? (
            <NameInput
              value={editingName}
              placeholder="Player's Name"
              onChange={this.updatePlayerName}
              autoFocus
            />
          ) : (
            <Name onClick={this.toggleNameEdit}>{player.name}</Name>
          )}
        </Center>

        <Clicker onClick={this.updatePlayerLife(-1)}>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 8"
            alt="decrease life"
            fill="currentColor"
          >
            <path
              d="M1.5 0l-1.5 1.5 4 4 4-4-1.5-1.5-2.5 2.5-2.5-2.5z"
              transform="translate(0 1)"
            />
          </Icon>
        </Clicker>
      </Wrapper>
    );
  }
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tracker = styled.p`
  font-size: 10em;
  color: #39c4c3;
  font-weight: 900;
  text-align: center;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* &--small {
    font-size: 12vw;
  } */
`;

const Clicker = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3f5a89;
`;

const Icon = styled.svg`
  width: 5em;
  display: block;
  color: $secondary;
`;

const Name = styled.p`
  font-weight: bold;
  color: #eee;
  margin: 0;
  transform: translateY(-1.5em);
`;

const NameInput = styled.input`
  transform: translateY(-1.5em);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.playerCount > 2 ? 'row' : 'column')};
  font-size: 16px;
  flex: 1;
  justify-content: space-between;

  :nth-child(odd) {
    margin-right: 1em;
    margin-left: 2em;
  }

  :nth-child(even) {
    margin-right: 2em;
    margin-left: 1em;
  }

  ${props =>
    props.playerCount > 2 &&
    css`
      ${Tracker} {
        font-size: 7.5em;
      }

      ${Icon} {
        width: 3.5em;
      }
    `};
`;

export default LifeTracker;
