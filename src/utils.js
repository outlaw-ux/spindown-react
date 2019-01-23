export function updateArrayAt(array, index, cb) {
  const first = array.slice(0, index);
  const last = array.slice(index + 1);
  const element = array[index];

  return [...first, cb(element), ...last];
}

export function generatePlayers(count, startingLife) {
  const players = [];

  for (let playerId = 1; playerId <= count; playerId++) {
    players.push({
      id: playerId,
      name: `Player ${playerId}`,
      currentLife: startingLife,
      additionalCounters: {
        poison: 0,
        commander: [],
      },
    });
  }

  return players;
}
