const net = require("net");
const connect = require("./client")

const conn = net.createConnection({
  host: '165.227.47.243', // IP address here,
  port: 50541, // PORT number here,
});

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // \u0003 maps to ctrl+c input
if (data === '\u0003') {
  process.exit();
}

  // your code here
  if (data.includes("w")){
    conn.write("Move: up");
  }
  if (data.includes("a")){
    conn.write("Move: left");
  }
  if (data.includes("d")){
    conn.write("Move: right");
  }
  if (data.includes("s")){
    conn.write("Move: down");
  }
};


console.log("Connecting ...");
connect();
setupInput();