#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const players = [...args];

players.map((player) => {
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const die = Math.floor(Math.random() * 6 +1);
    console.log(die);
    
    score += die
  }
  players.push({
    Player: player,
    Score: score,
  });
});

console.log(players);
