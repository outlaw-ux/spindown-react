import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LifeTracker from 'components/LifeTracker';

class Players extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        currentLife: PropTypes.number,
      }),
    ).isRequired,
    updatePlayer: PropTypes.func,
  };

  static defaultProps = {
    updatePlayer: () => {},
  };

  render() {
    const { players, updatePlayer } = this.props;

    return (
      <Wrapper playerCount={players.length}>
        {players.map(player => (
          <LifeTracker
            key={player.id}
            player={player}
            onChange={updatePlayer}
            playerCount={players.length}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export default Players;
