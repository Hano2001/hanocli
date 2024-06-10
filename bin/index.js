#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const playerNames = [...args];
const players = [];

playerNames.map((player) => {
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const die = Math.floor(Math.random() * 6 + 1);

    score += die;
  }
  players.push({
    Player: player,
    Score: score,
  });
});

console.table(players);
