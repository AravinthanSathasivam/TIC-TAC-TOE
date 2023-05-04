console.log('Hello world from js file');

let cellsEl = document.querySelectorAll('.cell');

let playerStick = ['X', 'O']
let currentPlayer = 0;
let msgEl = document.querySelector('#msg');
let end = false;

function showMsg(msg){
    msgEl.innerHTML = msg;
    msgEl.style.display = 'block';
}

const hideMsg = () => {
    msgEl.innerHTML = '';
    msgEl.style.display = 'none';
}


const clearAll = () =>{
    cellsEl[0].innerHTML == ' ';
    cellsEl[1].innerHTML == ' ';
    cellsEl[2].innerHTML == ' ';
    cellsEl[3].innerHTML == ' ';
    cellsEl[4].innerHTML == ' ';
    cellsEl[5].innerHTML == ' ';
    cellsEl[6].innerHTML == ' ';
    cellsEl[7].innerHTML == ' ';
    cellsEl[8].innerHTML == ' ';

}

const verify = () => {

    if(
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[1].innerHTML == playerStick[currentPlayer]&&
        cellsEl[2].innerHTML == playerStick[currentPlayer]
    ){
        alert(currentPlayer + " win");
        clearAll();

    }else if(
        cellsEl[3].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[5].innerHTML == playerStick[currentPlayer]
    ){
        alert(currentPlayer + " win");
        clearAll();

    }else if(
        cellsEl[6].innerHTML == playerStick[currentPlayer]&&
        cellsEl[7].innerHTML == playerStick[currentPlayer]&&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ){
        alert(currentPlayer + " win");
        clearAll();
    }
    else if (
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ){
        alert(currentPlayer + " win");
        clearAll();

    }else if (
        cellsEl[2].innerHTML == playerStick[currentPlayer]&&
        cellsEl[4].innerHTML == playerStick[currentPlayer]&&
        cellsEl[6].innerHTML == playerStick[currentPlayer]

    ){
        alert(currentPlayer + " win");
        clearAll();

    }else if(
        cellsEl[0].innerHTML == playerStick[currentPlayer]&&
        cellsEl[3].innerHTML == playerStick[currentPlayer]&&
        cellsEl[6].innerHTML == playerStick[currentPlayer]
    ){
        alert(currentPlayer + " win");
        clearAll();

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