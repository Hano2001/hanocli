#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const players = [];

args.map((arg) => {
  const dice = [];

  for (let i = 0; i <= Number(arg); i++) {
    const die = Math.floor(Math.random() * 6 +1);

    dice.push(die);
  }
  players.push({
    Score: dice.reduce((acc, curr) => acc + curr, 0),
    Dice: dice,
  });
});

console.log(players);
