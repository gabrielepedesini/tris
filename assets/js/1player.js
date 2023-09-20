// MATRIX

function createMatrix(rows, columns, initialValue = 'N') {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(initialValue);
        }
        matrix.push(row);
    }
    return matrix;
}

// Example usage
const rows = 3;
const columns = 3;
  
let matrix = createMatrix(rows, columns);

// CHANGE MATRIX

function changeMatrix(symbolChange, position) {

    if (position == 1) {
        matrix[0][0] = symbolChange;
    }

    if (position == 2) {
        matrix[1][0] = symbolChange;
    }

    if (position == 3) {
        matrix[2][0] = symbolChange;
    }

    if (position == 4) {
        matrix[0][1] = symbolChange;
    }

    if (position == 5) {
        matrix[1][1] = symbolChange;
    }

    if (position == 6) {
        matrix[2][1] = symbolChange;
    }

    if (position == 7) {
        matrix[0][2] = symbolChange;
    }

    if (position == 8) {
        matrix[1][2] = symbolChange;
    }

    if (position == 9) {
        matrix[2][2] = symbolChange;
    }

    console.log(matrix);
    return matrix;
}

// WIN CHECK

function winChecker(playerNumber) {

    // ROWS

    if(matrix[0][0] === matrix[0][1] &&  matrix[0][1] === matrix[0][2] && matrix[0][0] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="1"]').classList.add('bounce');
            document.querySelector('[data-number="4"]').classList.add('bounce');
            document.querySelector('[data-number="7"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(matrix[1][0] === matrix[1][1] &&  matrix[1][1] === matrix[1][2] && matrix[1][0] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="2"]').classList.add('bounce');
            document.querySelector('[data-number="5"]').classList.add('bounce');
            document.querySelector('[data-number="8"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(matrix[2][0] === matrix[2][1] &&  matrix[2][1] === matrix[2][2] && matrix[2][0] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="3"]').classList.add('bounce');
            document.querySelector('[data-number="6"]').classList.add('bounce');
            document.querySelector('[data-number="9"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    // COLUMNS

    if(matrix[0][0] === matrix[1][0] &&  matrix[1][0] === matrix[2][0] && matrix[0][0] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="1"]').classList.add('bounce');
            document.querySelector('[data-number="2"]').classList.add('bounce');
            document.querySelector('[data-number="3"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(matrix[0][1] === matrix[1][1] &&  matrix[1][1] === matrix[2][1] && matrix[0][1] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="4"]').classList.add('bounce');
            document.querySelector('[data-number="5"]').classList.add('bounce');
            document.querySelector('[data-number="6"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(matrix[0][2] === matrix[1][2] &&  matrix[1][2] === matrix[2][2] && matrix[0][2] !== 'N') {
        
        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="7"]').classList.add('bounce');
            document.querySelector('[data-number="8"]').classList.add('bounce');
            document.querySelector('[data-number="9"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    // DIAGONALS

    if(matrix[0][0] === matrix[1][1] &&  matrix[1][1] === matrix[2][2] && matrix[0][0] !== 'N') {

        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="1"]').classList.add('bounce');
            document.querySelector('[data-number="5"]').classList.add('bounce');
            document.querySelector('[data-number="9"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(matrix[0][2] === matrix[1][1] &&  matrix[1][1] === matrix[2][0] && matrix[0][2] !== 'N') {

        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="7"]').classList.add('bounce');
            document.querySelector('[data-number="5"]').classList.add('bounce');
            document.querySelector('[data-number="3"]').classList.add('bounce');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            if(playerNumber === 1) {
                winnerMessage.textContent = `Player wins!`;
            } else {
                winnerMessage.textContent = `AI wins!`;
            }
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    // DRAW

    if(turn === 9) {

        document.querySelector('.block-cont').classList.add('block-click');

        setTimeout(() => {
            document.querySelector('[data-number="1"]').classList.add('shake');
            document.querySelector('[data-number="2"]').classList.add('shake');
            document.querySelector('[data-number="3"]').classList.add('shake');
            document.querySelector('[data-number="4"]').classList.add('shake');
            document.querySelector('[data-number="5"]').classList.add('shake');
            document.querySelector('[data-number="6"]').classList.add('shake');
            document.querySelector('[data-number="7"]').classList.add('shake');
            document.querySelector('[data-number="8"]').classList.add('shake');
            document.querySelector('[data-number="9"]').classList.add('shake');
        }, 200);

        setTimeout(() => {
            const winnerMessage = document.getElementById('popup-message');
            winnerMessage.textContent = `Draw!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return 1;
    }

    if(playerNumber === 1) {
        const playerLabel = document.getElementById('player-label');
        playerLabel.textContent = `AI`;
    } else {
        const playerLabel = document.getElementById('player-label');
        playerLabel.textContent = `Player`;
    }

    return 0;
}

// GAME

let turn = 0;

// PLAYER

let player = 1;

// GAME

let toggleLinks = document.querySelectorAll('.select-box');

const element = document.querySelector('[data-number="9"]');

function game() {
    
    let symbol;
    let position;

    if (player === 1) {
        symbol = '.circle-img';
    } else {
        console.log(4);
        symbol = '.cross-img';
    }

    function linkClickHandler(event) {

        document.querySelector('.block-cont').classList.add('block-click');

        turn++;

        const link = event.currentTarget; // The clicked link
        // Remove the click event listener for this link
        link.style.pointerEvents = 'none';

        position = link.dataset.number;
        
        const circleIcon = link.querySelector('.circle-img');
        const crossIcon = link.querySelector('.cross-img');
    
        // Remove "show" class from both icons
        circleIcon.classList.remove('show');
        crossIcon.classList.remove('show');

        if (player === 1) {
            circleIcon.classList.add('show');
        
            matrix = changeMatrix('O', position);  // Update the matrix with the result from changeMatrix
            
            let win = winChecker(player);

            player = 2;

            if(win !== 1) {

                setTimeout(() => {
                    aiClick();
                }, 1000);
            } 
            
        } else {
            crossIcon.classList.add('show');
            
            matrix = changeMatrix('X', position);  // Update the matrix with the result from changeMatrix

            winChecker(player);

            player = 1;
        }
    }

    toggleLinks.forEach(link => {
        link.addEventListener('click', linkClickHandler);
    });
}

game();

// IA

function aiClick() {

    if(turn === 1) {
        if(matrix[1][1] === 'O'){
            
            const min = 1;
            const max = 4;
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

            if(randomNum === 1) {
                document.querySelector('[data-number="1"]').click();
            }
            if(randomNum === 2) {
                document.querySelector('[data-number="3"]').click();
            }
            if(randomNum === 3) {
                document.querySelector('[data-number="7"]').click();
            }
            if(randomNum === 4) {
                document.querySelector('[data-number="9"]').click();
            }
        } else {
            document.querySelector('[data-number="5"]').click();
        }
    } else {

        // WIN CONDITIONS

        let blockOpponent = 0;

        if(matrix[0][0] === 'X' && matrix[0][1] === 'X' && matrix[0][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="7"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'N' && matrix[0][1] === 'X' && matrix[0][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'X' && matrix[0][1] === 'N' && matrix[0][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="4"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'N' && matrix[1][1] === 'X' && matrix[1][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="2"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'X' && matrix[1][1] === 'N' && matrix[1][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'X' && matrix[1][1] === 'X' && matrix[1][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="8"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'X' && matrix[2][1] === 'X' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'X' && matrix[2][1] === 'N' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="6"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'N' && matrix[2][1] === 'X' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }



        if(matrix[0][0] === 'X' && matrix[1][0] === 'X' && matrix[2][0] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'X' && matrix[1][0] === 'N' && matrix[2][0] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="2"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'N' && matrix[1][0] === 'X' && matrix[2][0] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'N' && matrix[1][1] === 'X' && matrix[2][1] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="4"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'X' && matrix[1][1] === 'N' && matrix[2][1] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'X' && matrix[1][1] === 'X' && matrix[2][1] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="6"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'X' && matrix[1][2] === 'X' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'X' && matrix[1][2] === 'N' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="8"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'N' && matrix[1][2] === 'X' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="7"]').click();
            blockOpponent = 1;
        }



        if(matrix[0][0] === 'N' && matrix[1][1] === 'X' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'X' && matrix[1][1] === 'N' && matrix[2][2] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }


        if(matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'X' && matrix[1][1] === 'N' && matrix[2][0] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'N' && matrix[1][1] === 'X' && matrix[2][0] === 'X' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }


        // DEFENCE CONDITIONS

        if(matrix[0][0] === 'O' && matrix[0][1] === 'O' && matrix[0][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="7"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'N' && matrix[0][1] === 'O' && matrix[0][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'O' && matrix[0][1] === 'N' && matrix[0][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="4"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'N' && matrix[1][1] === 'O' && matrix[1][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="2"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'O' && matrix[1][1] === 'N' && matrix[1][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[1][0] === 'O' && matrix[1][1] === 'O' && matrix[1][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="8"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'O' && matrix[2][1] === 'O' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'O' && matrix[2][1] === 'N' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="6"]').click();
            blockOpponent = 1;
        }

        if(matrix[2][0] === 'N' && matrix[2][1] === 'O' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }



        if(matrix[0][0] === 'O' && matrix[1][0] === 'O' && matrix[2][0] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'O' && matrix[1][0] === 'N' && matrix[2][0] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="2"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'N' && matrix[1][0] === 'O' && matrix[2][0] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'N' && matrix[1][1] === 'O' && matrix[2][1] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="4"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'O' && matrix[1][1] === 'N' && matrix[2][1] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][1] === 'O' && matrix[1][1] === 'O' && matrix[2][1] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="6"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'O' && matrix[1][2] === 'O' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'O' && matrix[1][2] === 'N' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="8"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'N' && matrix[1][2] === 'O' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="7"]').click();
            blockOpponent = 1;
        }



        if(matrix[0][0] === 'N' && matrix[1][1] === 'O' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="1"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'O' && matrix[1][1] === 'N' && matrix[2][2] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="9"]').click();
            blockOpponent = 1;
        }


        if(matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === 'N' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'O' && matrix[1][1] === 'N' && matrix[2][0] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="5"]').click();
            blockOpponent = 1;
        }

        if(matrix[0][2] === 'N' && matrix[1][1] === 'O' && matrix[2][0] === 'O' && blockOpponent === 0) {
            document.querySelector('[data-number="3"]').click();
            blockOpponent = 1;
        }
        


        function rand() {

            const min = 1;
            const max = 9;
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
            if(randomNum === 1 && matrix[0][0] === 'N') {
                document.querySelector('[data-number="1"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 2 && matrix[1][0] === 'N') {
                document.querySelector('[data-number="2"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 3 && matrix[2][0] === 'N') {
                document.querySelector('[data-number="3"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 4 && matrix[0][1] === 'N') {
                document.querySelector('[data-number="4"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 5 && matrix[1][1] === 'N') {
                document.querySelector('[data-number="5"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 6 && matrix[2][1] === 'N') {
                document.querySelector('[data-number="6"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 7 && matrix[0][2] === 'N') {
                document.querySelector('[data-number="7"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 8 && matrix[1][2] === 'N') {
                document.querySelector('[data-number="8"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            if(randomNum === 9 && matrix[2][2] === 'N') {
                document.querySelector('[data-number="9"]').click();
                document.querySelector('.block-cont').classList.remove('block-click');
                return 1;
            }
            
            return 0;
        }
        
        // Call rand recursively until it returns 1 or all boxes are used
        function callRand(attempt) {
            if (attempt === 25) {
                console.log('All boxes used. Stopping.');
                return;
            }

            const response = rand();
            if (response === 0) {
                callRand(attempt + 1);
            }
        }

        if(blockOpponent !== 1) {
            callRand(1); // Start the recursion from attempt 1
        }
    }

    const aiWins = winChecker(2);
    if (aiWins === 1) {
        // If AI wins, block the grid from further clicks
        document.querySelector('.block-cont').classList.add('block-click');
    } else {
        document.querySelector('.block-cont').classList.remove('block-click');
    }

    return;
}

// RESET 

function resetGame() {
    // Reset the game state
    player = 1;
    turn = 0;

    // Hide the icons
    const icons = document.querySelectorAll('.circle-img, .cross-img');
    icons.forEach(icon => {
        icon.classList.remove('show');
    });

    // Enable click events on the links
    toggleLinks.forEach(link => {
        link.style.pointerEvents = 'auto';
        link.classList.remove('bounce');
        link.classList.remove('shake');
    });

    document.querySelector('.block-cont').classList.remove('block-click');

    matrix = [
        ['N', 'N', 'N'],
        ['N', 'N', 'N'],
        ['N', 'N', 'N']
    ];

    document.querySelector('.popup-container').classList.remove('show-popup');

    const playerLabel = document.getElementById('player-label');
    playerLabel.textContent = `Player 1`;

    console.log('Game reset');
    console.log(matrix);

    return;
}

const btnRestart = document.querySelector('.btn-restart');
const btnEnd = document.querySelector('.btn-end');

btnRestart.addEventListener('click', resetGame);
btnEnd.addEventListener('click', resetGame);