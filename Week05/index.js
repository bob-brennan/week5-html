var letter = 'x';
var cell = document.querySelectorAll('.board div');
var board= document.getElementById('board')
var scoreBox = document.getElementById('scoreBox');
var x = 0;
var o = 0;

// WriteLetter Function
function writeLetter(item) {
    if(letter == 'x' && item.textContent == '') {
        item.textContent = letter;
        letter = 'o';
        document.getElementById('info').innerHTML = "Next Turn To Player " + letter ;
        checkWinner();
    } else if(letter == 'o' && item.textContent == '') {
        item.textContent = letter;
        letter = 'x';
        document.getElementById('info').innerHTML = "Next Turn To Player " + letter ;
        checkWinner();
    } 

}

// checkWinner Function
function checkWinner() {
    if(cell[0].textContent == 'x' && cell[1].textContent == 'x' && cell[2].textContent == 'x') {
        win('x', 0, 1, 2);
    } else if(cell[0].textContent == 'o' && cell[1].textContent == 'o' && cell[2].textContent == 'o') {
        win('o', 0, 1, 2);
    } else if(cell[0].textContent == 'x' && cell[3].textContent == 'x' && cell[6].textContent == 'x') {
        win('x', 0, 3, 6);
    } else if(cell[0].textContent == 'o' && cell[3].textContent == 'o' &&  cell[6].textContent == 'o') {
        win('o', 0, 3, 6);
    } else if(cell[2].textContent == 'x' && cell[5].textContent == 'x' && cell[8].textContent == 'x') {
        win('x', 2, 5, 8);
    } else if(cell[2].textContent == 'o' && cell[5].textContent == 'o' && cell[8].textContent == 'o') {
        win('o', 2, 5, 8);
    } else if(cell[6].textContent == 'x' && cell[7].textContent == 'x' && cell[8].textContent == 'x') {
        win('x', 6, 7, 8);
    } else if(cell[6].textContent == 'o' && cell[7].textContent == 'o' && cell[8].textContent == 'o') {
        win('o', 6, 7, 8);
    } else if(cell[1].textContent == 'x' && cell[4].textContent == 'x' && cell[7].textContent == 'x') {
        win('x', 1, 4, 7);
    } else if(cell[1].textContent == 'o' && cell[4].textContent == 'o' && cell[7].textContent == 'o') {
        win('o', 1, 4, 7);
    } else if(cell[3].textContent == 'x' && cell[4].textContent == 'x' && cell[5].textContent == 'x') {
        win('x', 3, 4, 5);
    } else if(cell[3].textContent == 'o' && cell[4].textContent == 'o' && cell[5].textContent == 'o') {
        win('o', 3, 4, 5);
    } else if(cell[2].textContent == 'x' && cell[4].textContent == 'x' && cell[6].textContent == 'x') {
        win('x', 2, 4, 6);
    } else if(cell[2].textContent == 'o' && cell[4].textContent == 'o' && cell[6].textContent == 'o') {
        win('o', 2, 4, 6);
    } else if(cell[0].textContent == 'x' && cell[4].textContent == 'x' && cell[8].textContent == 'x') {
        win('x', 0, 4, 8);
    } else if(cell[0].textContent == 'o' && cell[4].textContent == 'o' && cell[8].textContent == 'o') {
        win('o', 0, 4, 8);
    }
}

// Win function
function win(winner, boxOne, boxTwo, boxThree) {
    console.log(winner + ' has Won The Game');
    
    document.getElementById('info').innerHTML = "Player " + winner + " Has Won!" ;

    if(winner == 'x') {
        x++;
    } else if(winner == 'o') {
        o++;
    }
    scoreBox.textContent = x + " - " + o;
    board.style.pointerEvents = 'none';
    cell[boxOne].classList.add('bg-color');
    cell[boxTwo].classList.add('bg-color');
    cell[boxThree].classList.add('bg-color');
}

// Reset Game Function
function resetGame() {
    var i;
    for(i = 0;i < cell.length; i++) {
        cell[i].textContent = '';
        cell[i].classList.remove('bg-color');
    }
    letter = 'x';
    document.getElementById('info').innerHTML = "Next Turn To Player " + letter ;
    board.style.pointerEvents = 'auto';
}

// New Game Function
function newGame() {
    resetGame();
    x = 0;
    o = 0;
    scoreBox.textContent = x + " - " + o;
}