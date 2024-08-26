function initGame() {
    return {
        board: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ],
        players: {
            A: {
                characters: [
                    { type: 'P', x: 0, y: 0 },
                    { type: 'P', x: 0, y: 1 },
                    { type: 'H1', x: 0, y: 2 },
                    { type: 'H2', x: 0, y: 3 },
                    { type: 'P', x: 0, y: 4 }
                ]
            },
            B: {
                characters: [
                    { type: 'P', x: 4, y: 0 },
                    { type: 'P', x: 4, y: 1 },
                    { type: 'H1', x: 4, y: 2 },
                    { type: 'H2', x: 4, y: 3 },
                    { type: 'P', x: 4, y: 4 }
                ]
            }
        },
        currentPlayer: 'A'
    };
}

function processMove(gameState, playerId, move) {
    const [charName, direction] = move.split(':');
    const player = gameState.players[playerId];
    const charIndex = player.characters.findIndex(c => c.type === charName);
    if (charIndex === -1) return { success: false, message: 'Invalid character.' };

    const character = player.characters[charIndex];
    const { newX, newY } = calculateNewPosition(character, direction);

    if (!isValidMove(newX, newY, gameState, playerId)) {
        return { success: false, message: 'Invalid move.' };
    }

  
    handleCombatAndMovement(gameState, character, newX, newY, playerId, charIndex);

 
    gameState.currentPlayer = gameState.currentPlayer === 'A' ? 'B' : 'A';

    return { success: true, gameState };
}

function calculateNewPosition(character, direction) {
    let { x, y } = character;
    switch (direction) {
        case 'L': x--; break;
        case 'R': x++; break;
        case 'F': y--; break;
        case 'B': y++; break;
        case 'FL': x--; y--; break;
        case 'FR': x++; y--; break;
        case 'BL': x--; y++; break;
        case 'BR': x++; y++; break;
        default: break;
    }
    return { newX: x, newY: y };
}

function isValidMove(x, y, gameState, playerId) {
    return (
        x >= 0 && x < 5 &&
        y >= 0 && y < 5 &&
        !gameState.board[y][x]
    );
}

function handleCombatAndMovement(gameState, character, newX, newY, playerId, charIndex) {
    const opponentId = playerId === 'A' ? 'B' : 'A';
    const opponent = gameState.players[opponentId];

    const opponentIndex = opponent.characters.findIndex(c => c.x === newX && c.y === newY);
    if (opponentIndex !== -1) {
        opponent.characters.splice(opponentIndex, 1); 
    }

    character.x = newX;
    character.y = newY;

    
    gameState.board[newY][newX] = { playerId, type: character.type };
}

function getGameState(gameState) {
    return gameState;
}

module.exports = { initGame, processMove, getGameState };
