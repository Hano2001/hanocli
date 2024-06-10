#! /usr/bin/env node
const args = [...process.argv.slice(2, process.argv.length)];
if (args.length === 1) {
  args.push(0);
}
const players = [];

args.map((arg) => {
  const dice = [];
    console.log(arg);
    
  for (let i = 0; i <= Number(arg); i++) {
    console.log(i);
    
    const die = Math.floor(Math.random() * 7);
    console.log(die);

    dice.push(die);
  }
  players.push({
    Score: dice.reduce((acc, curr) => acc + curr, 0),
    Dice: dice,
  });
});

console.log(players);
