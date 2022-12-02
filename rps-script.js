// ask user if they want to play
if (confirm ("Would you like to play a game of Rock, Paper, Scissors?")) {
    alert ("Ok lets play a 5 round game.");
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

function game() {
    let rounds=5;
    let roundResult;
    let winScore=0;
    let looseScore=0;
    let tieScore=0;
    let finalResult;
    let finalMessage;

    for (let i=0; i< rounds; i++) {
        roundResult= (round(playerChoice(), compChoice()));

        if (roundResult=== "tie") {
            tieScore++;
        }
        else if (roundResult.slice(0,7)==="you win") {
            winScore++;
        }
        else if (roundResult.slice(0,9)==="you loose") {
            looseScore++;
        }
        console.log(roundResult)
    }

    if (winScore > looseScore) {
        finalResult="YOU WIN";
    }
    else if (winScore<looseScore) {
        finalResult="YOU LOOSE";
    }
    else {
        finalResult="GAME TIED";
    }
    
    finalMessage=`FINAL SCORE!
    Wins: ${winScore}
    Losses: ${looseScore}
    Ties: ${tieScore}
    ${finalResult}`

    return console.log(finalMessage)
}

// show scores as the game is played then announce win or loss when the game is finished 