
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
// winning possibilities (rows, columns, diagonals)
const winning_chance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



// Set the first player to 'X'
let currentPlayer = 'X';

let gameActive = true;

// Function to check winner
function checkWinner() {

    // Checking all winning possibilities
    for (let option of winning_chance) {
        const [a, b, c] = option;
        // If all three cells in a combination are the same and not empty, the player wins
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    // If no winner, return false
    return false;
}


function handleClick(event) {

    const cell = event.target;
    console.log(event.target);

    // printing current player on board
    if (gameActive && !cell.textContent) {
        cell.textContent = currentPlayer;


        // WINNER
        if (checkWinner()) {
            document.getElementById('msg').textContent = `Player ${currentPlayer === 'X' ? '1' : '2'} wins!`;
            gameActive = false;
        }

        // DRAW
        else {

            let allFilled = true;

            for (let i = 0; i < cells.length; i++) {
                if (!cells[i].textContent) {
                    allFilled = false;
                    break;
                }
            }

            if (allFilled) {
                document.getElementById('msg').textContent = "Draw"
                gameActive = false;
            }

        }
        // Switch player
        if (gameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('msg').textContent = `Player ${currentPlayer === 'X' ? '1' : '2'}'s turn`;
        }

    }
}

function resetGame() {

    // Reset
    currentPlayer = 'X';
    gameActive = true;

    // Clear the board
    cells.forEach(cell => {
        cell.textContent = '';
    });

    // clear the msg
    document.getElementById('msg').textContent = ""
}



resetButton.addEventListener('click', resetGame);
// adding eventlistener when click the cell
cells.forEach((cell) => cell.addEventListener('click', handleClick));
