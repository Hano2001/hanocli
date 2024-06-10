#! /usr/bin/env node
const args = process.argv;
const secondArg = args.length > 3 ? args[3] : ""
console.table(args[2] + " " + secondArg + " is your message");




