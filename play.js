const net = require("net");

const  {connect}  = require("./client");
const  {setupInput}  = require("./input");

console.log("Connecting ...");
// console.log(connect);
// console.log(setupInput);
// connect();

setupInput(connect());

// setup interface to handle user input from stdin
