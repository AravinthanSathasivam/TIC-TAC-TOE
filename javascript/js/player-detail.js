let player1Name = document.querySelector('#player1Name');
let player2Name = document.querySelector('#player2Name');


function saveData() {

  if(player1Name.value !== '' && player2Name.value !== ''){

    if(player1Name.value.length < 15 && player2Name.value.length < 15){
    console.log(player1Name.value);
    console.log(player2Name.value);
    localStorage.setItem('player1Name', player1Name.value);
    localStorage.setItem('player2Name', player2Name.value);

    console.log(localStorage.getItem('player1Name'));   
    window.location.href = "play.html";
      
    }else{
      alert('length is greater than 15');
    }

  }else{
    alert('Fields are empty');
  }
  
  }
