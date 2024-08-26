const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { initGame, processMove, getGameState } = require('./gameLogic');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


app.use(express.static('../client'));

let gameState = initGame();

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.send(JSON.stringify({ type: 'gameState', data: getGameState(gameState) }));

    // Handle incoming messages
    ws.on('message', (message) => {
        const msg = JSON.parse(message);
        if (msg.type === 'move') {
            const { playerId, move } = msg.data;
            const result = processMove(gameState, playerId, move);
            if (result.success) {
                gameState = result.gameState;
                broadcastGameState();
            } else {
                ws.send(JSON.stringify({ type: 'invalidMove', data: result.message }));
            }
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});


function broadcastGameState() {
    const state = JSON.stringify({ type: 'gameState', data: getGameState(gameState) });
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(state);
        }
    });
}

server.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});
