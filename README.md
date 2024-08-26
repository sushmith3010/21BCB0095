# KOTAGIRI SUSHMITH-21BCB0095
Turn-Based chess-like Game with WebSocket Communication . This project is a real-time, turn-based game inspired by chess, developed with a server-client architecture using WebSocket for communication.


## Prerequisites
- **Node.js**: Ensure that Node.js is installed on your system.
- **Web Browser**: Any modern web browser to run the client.

## <b>Setup Instructions</b>
<b>1. Clone the Repository</b>
Clone this repository to your local machine using:
                
    git clone https://github.com/sushmith3010/21BCB0095.git

cd project

<b><h3>1) Server Setup:</h3></b>

Navigate to the server directory and install the necessary dependencies:
    </br>
    
    cd server
    npm install


Start the Server:

Start the WebSocket server:
</br>

    node server.js


The server will run on ws://localhost:8080.


<b><h3>2) Client Setup</h3></b>

Navigate to the client directory:
    
    cd ../client

Open the index.html file in your browser:

Alternatively, you can open index.html directly from your file explorer.


<b>Playing the Game

Player Setup:
</b>

The game is played between two players. Each player controls five characters, which can include Pawns, Hero1, and Hero2.
Players take turns to make moves according to the game rules described below.
<b>
Game Flow:

</b>
On their turn, a player clicks on one of their characters and selects a valid move.
The game state updates in real time, displaying the new positions of the characters.
The game ends when one player eliminates all of the opponent's characters.

</br>
<b>
<b>
Game Rules
  <br>
Game Setup
</b>
</br>
- The game is played on a 5x5 grid by two players.
- Each player controls 5 characters: a mix of Pawns, Hero1, and Hero2.
- Players arrange their characters on their respective starting rows.

### Characters and Movement
1. *Pawn*:
   - Moves one block in any direction (Left, Right, Forward, Backward).
   - Example command: P1:L (Pawn 1 moves Left).

2. *Hero1*:
   - Moves two blocks straight in any direction.
   - Eliminates any opponent's character in its path.
   - Example command: H1:F (Hero1 moves Forward).

3. *Hero2*:
   - Moves two blocks diagonally in any direction.
   - Eliminates any opponent's character in its path.
   - Example command: H2:BR (Hero2 moves Backward-Right).

### Game Flow

- Players alternate turns, making one move per turn.
- If a character lands on an opponent's character, the opponent's character is removed.
- Invalid moves are not allowed, and players must retry their turn if an invalid move is made.
- The game ends when one player eliminates all of the opponent’s characters.

</br>
</br>
<b>
Contact
</b>                    
</br>
    For any questions or issues, please contact sushmithkotagiri@gmail.com 
