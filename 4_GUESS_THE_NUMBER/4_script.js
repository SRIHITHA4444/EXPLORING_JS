const submit = document.querySelector('#submit-guess');

let computerGuess = parseInt((Math.random() * 100) + 1);
const userGuess = document.querySelector('#guess');
const guessArr = document.querySelector('.guessed-num');
const guessRem = document.querySelector('.guesses-rem');
const result = document.querySelector('.result');
const startOver = document.querySelector('.guess-description');

const p = document.createElement('p');

let prevGuessList = [];
let numGuesses = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (et) => {
        et.preventDefault();
        const guess = parseInt(userGuess.value);
        
        validateGuess(guess);
    });
};

function validateGuess(guess){
    //check if the number entered is unique or not

    if(isNaN(guess)){
        alert('Please enter a valid number!');
        return;
    }

    else if(guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100.');
        return;
    }

    else{
        //check if the guess is in the list or not
        if(numGuesses >= 10){
                alert('You have used up all your guesses!');
                displayGuess(guess);
                displayMessage(`Game Over! Random Number is ${computerGuess}`);
                endGame();
        }
        else{
            if(prevGuessList.includes(guess)){
                alert('You already guessed this number!');
            }
            else{
                prevGuessList.push(guess);
                displayGuess(guess);
                checkGuess(guess);
            }
        }
    }
}

function checkGuess(guess){
    //
    if(guess === computerGuess){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} guesses!`);
        endGame();
    }
    else if(guess < computerGuess){
        displayMessage('Guessed number too low!');
    }
    else{
        displayMessage('Guessed number too high!');
    }
}

function displayGuess(guess){
    //cleans up previous guess and updates to current value

    userGuess.value = '';
    guessArr.innerHTML += `${guess} `;
    guessArr.style.backgroundColor = 'rgb(23, 175, 225)';
    guessArr.style.padding = '10px 20px';
    numGuesses++;
    guessRem.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message){
    //It directly interacts with DOM

    result.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    p.classList.add('button') //adds a CSS class to an HTML element
    p.innerHTML = `<h2 id = 'newGame'> Start new game</h2>`;
    p.style.backgroundColor = 'rgb(26, 175, 9)';
    p.style.padding = '10px 20px';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //clears the previous guesses

    const newGameBtn = document.querySelector('#newGame');

    newGameBtn.addEventListener('click', (et) => {
        userGuess.value = '';
        computerGuess = parseInt((Math.random() * 100) + 1);
        playGame = true;
        numGuesses = 0;
        prevGuessList = [];
        guessArr.innerHTML = '';
        guessRem.innerHTML = `${10 - numGuesses}`;
        userGuess.removeAttribute('disabled');
        p.classList.remove('button');
        p.innerHTML = '';
        startOver.removeChild(p);
    });
};