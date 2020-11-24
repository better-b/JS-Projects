const playerX = document.querySelector('.scoreX');
const playerO = document.querySelector(".scoreO");
const resetBtn = document.querySelector('.reset');
const cells = document.querySelectorAll('.game-cell');
const status = document.querySelector('.status');
//game variables
let xIsNext = true;
let gameIsLive = true;
let winner = '';
let xScore = 0;
let oScore = 0;

//reset the game 

resetBtn.addEventListener('click', () =>{
    xIsNext = true;
    status.textContent = ``;
    winner = '';
    cells.forEach(cell =>{
        cell.classList.remove('x');
        cell.classList.remove('o');
    })
    gameIsLive = true;
});

// check winner
const checkWinner = () => {
const tLeft = cells[0].classList[1];
const tMiddle = cells[1].classList[1];
const tRight = cells[2].classList[1];
const mLeft = cells[3].classList[1];
const middle = cells[4].classList[1];
const mRight = cells[5].classList[1];
const bLeft = cells[6].classList[1];
const bMiddle = cells[7].classList[1];
const bRight = cells[8].classList[1];
 
if(tLeft && tLeft === tMiddle && tLeft === tRight){
    gameIsLive = false;
    winner = tLeft;
    displayWinner();
    status.textContent = `${tLeft} has won!`;
} else if (tLeft && tLeft === mLeft && tLeft === bLeft) {
    gameIsLive = false;
    winner = tLeft;
    displayWinner();
    status.textContent = `${tLeft} has won!`;
} else if (tLeft && tLeft === middle && tLeft === bRight) {
    gameIsLive = false;
    winner = tLeft;
    displayWinner();
    status.textContent = `${tLeft} has won!`;
} else if (tMiddle && tMiddle === middle && tMiddle === bMiddle) {
    gameIsLive = false;
    winner = tMiddle;
    displayWinner();
    status.textContent = `${tMiddle} has won!`;
} else if (tRight && tRight === middle && tRight === bLeft) {
    gameIsLive = false;
    winner = tRight;
    displayWinner();
    status.textContent = `${tRight} has won!`;
}else if (tRight && tRight === mRight && tRight === bRight) {
    gameIsLive = false;
    winner = tRight;
    displayWinner();
    status.textContent = `${tRight} has won!`;
} else if (mLeft && mLeft === middle && mLeft === mRight) {
    gameIsLive = false;
    winner = mLeft;
    displayWinner();
    status.textContent = `${mLeft} has won!`;
} else if (bLeft && bLeft === bMiddle && bLeft === bRight) {
    gameIsLive = false;
    winner = bLeft;
    displayWinner();
    status.textContent = `${bLeft} has won!`;
} else if (tLeft && tMiddle && tRight && mLeft && middle && mRight && bLeft && bMiddle && bRight) {
    gameIsLive = false;
    status.textContent = "Game is tied";
}
 };

// display winner 

const displayWinner = () =>{
    if ((winner === "x")) {
      xScore++;
      playerX.textContent = xScore;
      
    } else if ((winner === "o")) {
      oScore++;
      playerO.textContent = oScore;
    }
};

// put X and O in each cell as player click
cells.forEach((cell) =>{
    cell.addEventListener('click', (e)  =>{        
        if(!gameIsLive || e.target.classList[1] === 'x' || e.target.classList[1] === 'o'){
            return;
        }
        if(xIsNext){
            e.target.classList.add('x');
            xIsNext = !xIsNext;
            checkWinner();
        } else {
            e.target.classList.add('o');
            xIsNext = !xIsNext;
            checkWinner();
        }
    })
});

 