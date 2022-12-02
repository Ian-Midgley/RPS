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
const element = ["rock" ,"paper","Scissors "];

function compChoice() {
    let compSelection = element[Math.floor(Math.random() * element.length)];
    return compSelection;
    console.log(compSelection);
}

// play a round and give a winner 
function round(playerMove, compMove) {
    let result;

    switch(true) {
        case playerMove===compMove:
            result="tie";
            break;
        case playerMove==="rock" && compMove==="scissors":
        case playerMove==="paper" && compMove==="rock":
        case playerMove==="scissors" && compMove==="paper":
            result="win";
            break;
        case playerMove==="rock" && compMove==="paper":
        case playerMove==="paper" && compMove==="scissors":
        case playerMove==="scissors" && compMove==="rock":
            result="loose";
            break;
        // default:
        //     result="OOPS"
    }
    return result;

}

// create a best of five game calling the round function 

// show scores as the game is played then announce win or loss when the game is finished 