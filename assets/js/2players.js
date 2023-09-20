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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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
            winnerMessage.textContent = `Player ${playerNumber} wins!`;
            document.querySelector('.popup-container').classList.add('show-popup');
        }, 1500);

        return;
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

        return;
    }

    if(playerNumber === 1) {
        const playerLabel = document.getElementById('player-label');
        playerLabel.textContent = `Player 2`;
    } else {
        const playerLabel = document.getElementById('player-label');
        playerLabel.textContent = `Player 1`;
    }

    return;
}

// GAME

let turn = 0;

// PLAYER

let player = 1;

// GAME

let toggleLinks = document.querySelectorAll('.select-box');

function game() {
    
    let symbol;
    let position;

    if (player === 1) {
        symbol = '.circle-img';
    } else {
        symbol = '.cross-img';
    }

    function linkClickHandler(event) {

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
            
            winChecker(player);

            player = 2;
            
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