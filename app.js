let uScore = 0;
let cScore = 0;
let winNum = 0;
let lossNum = 0;
const startGame = document.querySelector(".play-text");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const scoreBoard = document.getElementById(".score-board");
const result = document.querySelector(".result");
const rockR = document.getElementById("r");
const paperP = document.getElementById("p");
const scissorsS = document.getElementById("s");
const winTrack = document.getElementById("win-tracker");
const lossTrack = document.getElementById("loss-tracker");


function computerChoice(){
    const images = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random()*3);
    return images[randomNum];
}

function converter(letter){
    if (letter === "r"){
        return "Rock"
    }
    if (letter === "p"){
        return "Paper"
    }
    if (letter === "s"){
        return "Scissors"
    }
}

//Hides the three options to prevent the user from clicking and getting a score higher than 2
function disableButtons(){
    document.getElementById("r").style.display = "none";
    document.getElementById("p").style.display = "none";
    document.getElementById("s").style.display = "none";
}

//Re-enables the three options to start again
function enableButtons(){
    document.getElementById("r").style.display = "inline-block";
    document.getElementById("p").style.display = "inline-block";
    document.getElementById("s").style.display = "inline-block";
}

//Checks what the score is. If it is 2, that player has won
function checkScore(){
    if (uScore === 2){
        disableButtons();  
        winNum++;
        winTrack.innerHTML = winNum;
        //timer of 800ms before the game resets
        setTimeout(function(){
            uScore = 0;
            userScore.innerHTML = uScore;
            cScore = 0;
            computerScore.innerHTML = cScore;
            result.innerHTML = "You won! Let's go again!"
            enableButtons();
        },800);
    }
    if (cScore === 2){
        disableButtons();
        lossNum++;
        lossTrack.innerHTML = lossNum;
        setTimeout(function(){
            uScore = 0;
            userScore.innerHTML = uScore;
            cScore = 0;
            computerScore.innerHTML = cScore;
            result.innerHTML = "You lost! Let's go again!"
            enableButtons();
        },800);
    }
}

function userWins(userChoice, computerC){
    uScore++;
    userScore.innerHTML = uScore;
    result.innerHTML = `${converter(userChoice)} beats ${converter(computerC)}. Nice!`
}

function userLoses(userChoice, computerC){
    cScore++;
    computerScore.innerHTML = cScore;
    result.innerHTML = `${converter(userChoice)} loses to ${converter(computerC)}. Boo, do better!`
}

function userDraws(){
    result.innerHTML = `We have a tie, ladies, gentlemen, and the nonbinary.`
}

function play(userChoice){
    const computerC = computerChoice();
    switch(userChoice + computerC){
        case "rs":
        case "pr":
        case "sp":
            userWins(userChoice, computerC);
            checkScore();
            break;
        case "rp":
        case "ps":
        case "sr":
            userLoses(userChoice, computerC);
            checkScore();
            break;
        case "rr":
        case "pp":
        case "ss":
            userDraws();
            checkScore();
            break;
    }
}


function game(){
    rockR.addEventListener('click', function(){
        play("r");
        
    })
    paperP.addEventListener('click', function(){
        play("p");
        
    })
    scissorsS.addEventListener('click', function(){
        play("s");
    })
}

function letsPlay(){
    //The game can only start when the user clicks on play
    startGame.addEventListener('click', function(){
        startGame.innerHTML = "Go!";
        game();
    })
}

letsPlay();