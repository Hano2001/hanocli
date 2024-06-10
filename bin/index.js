#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const scores = [];
const playerNames = [...args];
const players = {};
function Player(name, score, place) {
  this.index = name;
  this.score = score;
  this.place = "";
}
playerNames.map((player) => {
  let score = 0;
  for (let i = 1; i <= 5; i++) {
    const die = Math.floor(Math.random() * 6 + 1);
    score += die;
    scores.push(score);
  }
  players[player] = new Player(player, score);
});
const highScore = Math.max(...scores);

Object.values(players).map((player) => {
  player.place = player.score === highScore ? "Winner!" : "Loser :(";
});

console.table(players);
