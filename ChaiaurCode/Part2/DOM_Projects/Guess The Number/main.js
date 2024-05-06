let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){  
    if(isNaN(guess)){
        alert("Enter a valid number");
    }else if(guess > 100){
        alert("Enter number less than 100");
    }else if(guess < 1){
        alert("Enter a number greater than 0");
    }else{
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Correct! You guessed the number in ${numGuess} guesses`);
        endGame();
    }else if(guess > randomNumber){
        displayMessage("Your Guess is high");
    }else if(guess < randomNumber)
        displayMessage("Your Guess is low");
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        numGuess = 1;
        prevGuess = [];
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

        playGame = true;
    })
}