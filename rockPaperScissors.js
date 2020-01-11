alert('test');

let playerScore = 0;
let computerScore = 0;

// Randomly choose r/p/s for computer
function computerPlay(){
    let randomNumber = Math.random();
    let randomBetween0And3 = randomNumber * 3; 
    if (randomBetween0And3 < 1) {
        return 'rock';
    } else if (randomBetween0And3 < 2){
        return 'paper';
    } else{
        return 'scissors';
    }
}

