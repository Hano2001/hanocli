#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const playerNames = [...args];
const players = {};
let highScore = 0;
function Player(name, score, place) {
  this.index = name;
  this.score = score;
  this.place = place;
}
playerNames.map((player) => {
  for (let i = 1; i <= 5; i++) {
    const die = Math.floor(Math.random() * 6 + 1);
    score += die;
  }
  players[player] = new Player(player, score, "lost");
});

console.table(players);
