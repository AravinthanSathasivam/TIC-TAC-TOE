console.log('Hello from js file');

let cellsEl = document.querySelectorAll('.cell');

let playerStick = ['X', 'O'];
let playersName = ['Player 1', 'Player 2'];
let playersScore = [0,0];
let currentPlayer = 0;
let msgEl = document.querySelector('#msg');
let end = false;

//Show default player names
let namePlayer1El = document.querySelector("#player1 .name");
let namePlayer2El = document.querySelector("#player2 .name");
namePlayer1El.innerHTML = playersName[0];
namePlayer2El.innerHTML = playersName[1];

//Show default player scores
let scorePlayer1El = document.querySelector("#player1 .score");
let scorePlayer2El = document.querySelector("#player2 .score");
scorePlayer1El.innerHTML = playersScore[0];
scorePlayer2El.innerHTML = playersScore[1];


function showMsg(msg){
    msgEl.innerHTML = msg;
    msgEl.style.display = 'block';
}


// hide the message when its finished
const hideMsg = () => {
    msgEl.innerHTML = '';
    msgEl.style.display = 'none';
}


//

const verify = () => {

    if(
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[1].innerHTML == playerStick[currentPlayer]&&
        cellsEl[2].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[0].style.background = '#2ecc71';
        cellsEl[1].style.background = '#2ecc71';
        cellsEl[2].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");

    }else if(
        cellsEl[3].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[5].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[3].style.background = '#2ecc71';
        cellsEl[4].style.background = '#2ecc71';
        cellsEl[5].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");

    }else if(
        cellsEl[6].innerHTML == playerStick[currentPlayer]&&
        cellsEl[7].innerHTML == playerStick[currentPlayer]&&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[6].style.background = '#2ecc71';
        cellsEl[7].style.background = '#2ecc71';
        cellsEl[8].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");
    }
    else if (
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[0].style.background = '#2ecc71';
        cellsEl[4].style.background = '#2ecc71';
        cellsEl[8].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");

    }else if (
        cellsEl[2].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[6].innerHTML == playerStick[currentPlayer]

    ){
        cellsEl[2].style.background = '#2ecc71';
        cellsEl[4].style.background = '#2ecc71';
        cellsEl[6].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");

    }else if(
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[3].innerHTML == playerStick[currentPlayer]&&
        cellsEl[6].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[0].style.background = '#2ecc71';
        cellsEl[3].style.background = '#2ecc71';
        cellsEl[6].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");

    }else if(
        cellsEl[1].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[7].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[01].style.background = '#2ecc71';
        cellsEl[4].style.background = '#2ecc71';
        cellsEl[7].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");
    }
    else if(
        cellsEl[2].innerHTML == playerStick[currentPlayer]&&
        cellsEl[5].innerHTML == playerStick[currentPlayer]&&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ){
        cellsEl[2].style.background = '#2ecc71';
        cellsEl[5].style.background = '#2ecc71';
        cellsEl[8].style.background = '#2ecc71';
        showMsg('Game Ended!!' + currentPlayer + " win");
    }
    
    cellsEl.forEach(cellsEl => {
        if(cellsEl.innerHTML == ''){
            end = false;
        }

    });
};

cellsEl.forEach(cellsEl => {
    cellsEl.addEventListener('click', function(event){
        hideMsg();
        console.log("click on cell !");
        console.log(event.target.innerHTML);
        if(event.target.innerHTML == ''){
            event.target.innerHTML = playerStick[currentPlayer];


            verify();

            if(!end){
                end = true;
                if(currentPlayer == 0){
                    currentPlayer = 1;
                }else{
                    currentPlayer = 0;
                }

            }else{
                showMsg('Game Ended!!');
            }
            

        }else{
            showMsg('Already played');
        } 
    });
});