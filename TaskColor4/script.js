const board = document.getElementById("game-board");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset-btn");

let currentPlayer = "red";
let gameState = Array.from({ length: 6 }, () => Array(7).fill(null));

// Create the game grid
function createBoard() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener("click", handleClick);
            board.appendChild(cell);
        }
    }
}

// Handle cell click
function handleClick(event) {
    const col = parseInt(event.target.dataset.col);

    // Place the disc in the lowest available row
    for (let row = 5; row >= 0; row--) {
        if (!gameState[row][col]) {
            gameState[row][col] = currentPlayer;
            const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);
            cell.classList.add("taken", currentPlayer);

            if (checkWin(row, col)) {
                statusText.textContent = `${currentPlayer.toUpperCase()} Wins!`;
                board.classList.add("disabled");
                return;
            }

            currentPlayer = currentPlayer === "red" ? "yellow" : "red";
            statusText.textContent = `Current Turn: ${currentPlayer.toUpperCase()}`;
            return;
        }
    }
}

// Check win condition
function checkWin(row, col) {
    const directions = [
        [[0, 1], [0, -1]], // Horizontal
        [[1, 0], [-1, 0]], // Vertical
        [[1, 1], [-1, -1]], // Diagonal /
        [[1, -1], [-1, 1]], // Diagonal \
    ];

    for (const direction of directions) {
        let count = 1;
        for (const [dx, dy] of direction) {
            let r = row + dx;
            let c = col + dy;

            while (r >= 0 && r < 6 && c >= 0 && c < 7 && gameState[r][c] === currentPlayer) {
                count++;
                r += dx;
                c += dy;
            }
        }

        if (count >= 4) return true;
    }
    return false;
}

// Reset the game
resetBtn.addEventListener("click", () => {
    board.innerHTML = "";
    gameState = Array.from({ length: 6 }, () => Array(7).fill(null));
    currentPlayer = "red";
    statusText.textContent = "Current Turn: RED";
    createBoard();
});

createBoard();
statusText.textContent = "Current Turn: RED";
