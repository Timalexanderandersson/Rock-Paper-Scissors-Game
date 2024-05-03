let rockHere = document.getElementById('rock');
let paperHere = document.getElementById('paper');
let siccorsHere = document.getElementById('scissors');
let theGameHere = document.getElementById('rockpaperandscissors');
let scorePartOfGame = document.getElementById('scorepart');
let alternativesInGameDiv = document.getElementById('alternativsforgame');

// play again button that appears after game is finish.
let playAgainHere = document.createElement('button');
playAgainHere.innerText = 'Play Again!';
playAgainHere.classList.add('mynewButton');

// The scorekeeping numbers for computer and the player.
let computerScoreHere = 0;
let playersScoreHere = 0;

//Scorekeeping text for the player and computer.
let textForThePlayer = document.createElement('p');
textForThePlayer.textContent = 'You win: ' + playersScoreHere;
scorePartOfGame.appendChild(textForThePlayer);
let textForComputer = document.createElement('p');
textForComputer.textContent = 'Computer win: ' + computerScoreHere;
scorePartOfGame.appendChild(textForComputer);

//Game area that shows the text choose your alternatives and win and lose.
let gameareaText = document.createElement('h3');
gameareaText.innerText = 'Choose your alternative!';
theGameHere.appendChild(gameareaText);
gameareaText.classList.add('textinsidegame');
let bestOFthree = document.createElement('p');
bestOFthree.innerText = 'First To 3 Scores Wins!';
theGameHere.appendChild(bestOFthree);

// Alternatives array with the text rock, paper and scissors in it.
let choicesHere = ["rock", "paper", "scissors"];
/**
 * This function handles everything around playing the game. It takes the guess from the computer
 * and the player and sorting it if the choice is right or wrong.
 * @param {*} alternativHere 
 */
function playingTheGame(alternativHere) {
    
    // The player winning in this if else statement. inside the playingthegame function.
    let theComputerNumber = Math.floor(Math.random() * 3);
    let randomChoicesHere = choicesHere[theComputerNumber];

    if (alternativHere === randomChoicesHere) {
        gameareaText.innerText = 'Same As The Computer!';
    } else if (alternativHere === "rock" && randomChoicesHere === 'scissors') {

        gameareaText.innerText = 'You Won!';
        ++playersScoreHere;
        textForThePlayer.textContent = 'You win: ' + playersScoreHere;

    } else if (alternativHere === 'paper' && randomChoicesHere === "rock") {
        gameareaText.innerText = 'You Won!';
        ++playersScoreHere;
        textForThePlayer.textContent = 'You win: ' + playersScoreHere;

    } else if (alternativHere === "scissors" && randomChoicesHere === "paper") {
        gameareaText.innerText = 'You Won!';
        ++playersScoreHere;
        textForThePlayer.textContent = 'You win: ' + playersScoreHere;
    }
    
    // The computer winning in this if else statement. inside the playingthegame function.
    if (randomChoicesHere === "rock" && alternativHere === "scissors") {
        gameareaText.innerText = 'You Lose!';
        ++computerScoreHere;
        textForComputer.textContent = 'Computer win: ' + computerScoreHere;

    } else if (randomChoicesHere === "paper" && alternativHere === "rock") {
        gameareaText.innerText = 'You Lose!';
        ++computerScoreHere;
        textForComputer.textContent = 'Computer win: ' + computerScoreHere;

    } else if (randomChoicesHere === "scissors" && alternativHere === "paper") {
        gameareaText.innerText = 'You Lose!';
        ++computerScoreHere;
        textForComputer.textContent = 'Computer win: ' + computerScoreHere;
    }
    countingDownGame();
}
// Eventlisteners for buttons inside playingthegame function. its rock, paper , scissors.
rockHere.addEventListener('click', function () {
    playingTheGame("rock");
});

paperHere.addEventListener('click', function () {
    playingTheGame("paper");
});
siccorsHere.addEventListener('click', function () {
    playingTheGame("scissors");
});
/**
 * function that shows text when you win or lose the game of rock paper and scissors.
 * congratulations if you win. sorry you lose if you lose the game.
 */
function countingDownGame() {
    if (playersScoreHere >= 3) {
        gameareaText.innerText = 'congratulations you won!';
        gameareaText.style.color = 'Green';
        gameareaText.style.fontSize = '1.3rem';
        alternativesInGameDiv.style.display = 'none';
        scorePartOfGame.style.display = 'none';
        bestOFthree.style.display = 'none';
        gameareaText.appendChild(playAgainHere);
    } else if (computerScoreHere >= 3) {
        gameareaText.innerText = 'Sorry You lose!';
        gameareaText.style.color = 'Red';
        gameareaText.style.fontSize = '1.5rem';
        alternativesInGameDiv.style.display = 'none';
        scorePartOfGame.style.display = 'none';
        bestOFthree.style.display = 'none';
        gameareaText.appendChild(playAgainHere);
    }
}
/**
 * This function restarts the game.
 */
function startGameAgain() {
    location.reload();
}
// This Addeventlistener is the restart button after the game is won or lose.
playAgainHere.addEventListener('click', startGameAgain);