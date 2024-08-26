const WebSocket = require('ws');
const { Game } = require('./gameLogic');

const server = new WebSocket.Server({ port: 8080 });
let game = new Game();

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'move') {
      const result = game.makeMove(data.player, data.move);
      
      if (result.valid) {
        broadcast(JSON.stringify({ type: 'update', gameState: game.getState() }));
      } else {
        socket.send(JSON.stringify({ type: 'invalid', message: result.reason }));
      }
    }
  });

  socket.send(JSON.stringify({ type: 'init', gameState: game.getState() }));
});

function broadcast(message) {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
