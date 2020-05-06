const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  
  

  conn.on('data', message => {
    console.log(message);
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
    console.log(`Name: RAG`);
  });

  return conn;
}

// //connect();

module.exports = {connect};