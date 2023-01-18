const net = require("net");
const connect = require("./client");
// const conn = connect();
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  }
  // console.log(data);

  // your code here
  if (data.includes("w")) {
    console.log("w = Move: up");
    connection.write("Move: up");
  }
  if (data.includes("a")) {
    console.log("a = Move: left");
    connection.write("Move: left");
  }
  if (data.includes("d")) {
    console.log("d = Move: right");
    connection.write("Move: right");
  }
  if (data.includes("s")) {
    console.log("s = Move: down");
    connection.write("Move: down");
  }
  if (data.includes("n")) {
    console.log("n = Message");
    connection.write("Say: Noob alert");
  }
  if (data.includes("m")) {
    console.log("m = Message");
    connection.write("Say: movement bad");
  }

};

module.exports = { setupInput };