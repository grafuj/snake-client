const net = require("net");
const connections = [];

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write('Name: boi');

  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('server data:', data);
  });

  return conn;
};
module.exports = {connect};