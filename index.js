const currentPlayer = document.querySelector('#currentPlayer');
const game = {};
game.elements = {};
game.methods = {};
game.elements.targetBox = document.querySelector('#gameField');
game.elements.resetButton = document.querySelector('button');
game.elements.winLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let playerXArr = [];
let playerYArr = [];
currentPlayer.innerHTML = 'X'

game.methods.seizeTerritory = game.elements.targetBox.addEventListener('click', function (e) {
    if (e.target.classList[2] == 'x' || e.target.classList[2] == 'o') {

    } else if (currentPlayer.classList == 'player1') {
        e.target.classList.add('x');
        currentPlayer.classList.remove('player1');
        currentPlayer.classList.add('player2');
        playerXArr.push(e.target.classList[1]);
        whoIsWinner(playerXArr);
        currentPlayer.innerHTML = 'O';
        console.log(playerXArr)

    } else if (currentPlayer.classList == 'player2') {
        e.target.classList.add('o');
        currentPlayer.classList.remove('player2');
        currentPlayer.classList.add('player1');
        playerYArr.push(e.target.classList[1]);
        whoIsWinner(playerYArr);
        currentPlayer.innerHTML = 'X';
    }
});


function whoIsWinner(arr) {
    let score = 0;
    for (let i = 0; i < game.elements.winLines.length; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (game.elements.winLines[i][j] == arr[k]) {
                    score = score + 1;
                }
            }
        }
        if (score < 3) {
            score = 0;
        } else {
            console.log(game.elements.winLines[i])
            document.querySelector('.maybeWinner').innerHTML = `The winner is Player - ${currentPlayer.innerHTML}`
            document.querySelector('.blockAll').style.display = `block`;
            break
        }
    }
    let maybeDraw = playerXArr.length + playerYArr.length;
    if (maybeDraw == 9 && score !== 3) {
        document.querySelector('.blockAll').style.display = `block`;
    }
}

game.elements.resetButton.addEventListener('click', function (e) {
    const items = document.querySelectorAll('.pleaseKillMe')
    Array.from(items).forEach(ourItem => {
        ourItem.classList.remove('x');
        ourItem.classList.remove('o');
    })
    currentPlayer.innerHTML = 'X';
    playerXArr = [];
    playerYArr = [];
    document.querySelector('.blockAll').style.display = `none`;
    document.querySelector('.maybeWinner').innerHTML = 'Tic Tac Toe'
})








