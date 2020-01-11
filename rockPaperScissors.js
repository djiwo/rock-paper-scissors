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

// Player selection
function playerPlay(){
    let playerInput = prompt('enter \'rock\', \'paper\' or \'scissors\'');
    let playerSelectionLowerCase = playerInput.toLowerCase();
    return playerSelectionLowerCase;
}

// Play one round of RPS
function playRound(player, computer) {
    if (player=='rock'){
        if (computer=='rock'){
            return 'It\'s a tie. Try again!1';
        } else if (computer=='paper'){
            computerScore++;
            return 'You lose! Paper beats Rock';
        } else if (computer=='scissors'){
            playerScore++;
            return 'You win! Rock beats scissors';
        }
    } else if(player=='paper'){
        if (computer=='rock'){
            playerScore++;
            return 'You win! Paper beats Rock';
        } else if (computer=='paper'){
            return 'It\'s a tie. Try again!2';
        } else if (computer=='scissors'){
            computerScore++;
            return 'You lose! Scissors beats Paper';
        }
    } else if(player=='scissors'){
        if (computer=='rock'){
            computerScore++;
            return 'You lose! Rock beats scissors';
        } else if (computer=='paper'){
            playerScore++;
            return 'You win! Scissors beats Paper';
        } else if (computer=='scissors'){
            return 'It\'s a tie. Try again!3';
        }
    } else {
        return 'wrong playerSelection'
    }
}

// keep on playing the game until one player has reached 3 points.
function playGame() {
    let x = 0;
    while (x <5){
        playRound(playerPlay(),computerPlay());
        // This doesn't work with let x = computerScore+playerScore;
        x = computerScore+playerScore;
    }
}



// Play the actual game: 5 rounds
playGame();

// Output the results
function results (){
    if (playerScore > computerScore){
        return 'You beat the computer! With '+playerScore+' rounds to '+(computerScore)+'!';
    } else if (computerScore > playerScore){
     return 'You lost! With '+playerScore+' rounds to '+(computerScore)+'!';
    }
}

// alert(results());

