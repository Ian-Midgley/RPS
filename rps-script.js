// ask user if they want to play
if (confirm ("Would you like to play a game of Rock, Paper, Scissors?")) {
    alert ("Ok lets play a 5 round game");
}
else {
    alert ("Well that's boring")
}
// ask user for there choice
function playerChoice() {
    let userSelection = prompt ("please enter your choice (Rock, Paper or Scissors)");
    return userSelection.toLowerCase();
}


// create random choice for computer
const element = ["rock" ,"paper","scissors"];

function compChoice() {
    let compSelection = element[Math.floor(Math.random() * element.length)];
    return compSelection;
}

// play a round and give a winner 
function round(playerMove, compMove) {
    let result;

    switch(true) {
        case playerMove===compMove:
            result="tie";
            break;
        case playerMove==="rock" && compMove==="scissors":
            result="you win! rock beats scissors.";
            break;
        case playerMove==="paper" && compMove==="rock":
            result="you win! paper beats rock.";
            break;
        case playerMove==="scissors" && compMove==="paper":
            result="you win! scissors beats paper.";
            break;
        case playerMove==="rock" && compMove==="paper":
            result="you loose! paper beats rock.";
            break;
        case playerMove==="paper" && compMove==="scissors":
            result = "you loose! scissors beats paper";
            break;
        case playerMove==="scissors" && compMove==="rock":
            result="you loose! rock beats scissors";
            break;
        default:
            result="OOPS! did you type the wrong thing?"
    }
    return result;

}

// create a best of five game calling the round function 


// show scores as the game is played then announce win or loss when the game is finished 