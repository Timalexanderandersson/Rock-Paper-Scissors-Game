// Get elements by their IDs
const rockHere = document.getElementById('rock');
const paperHere = document.getElementById('paper');
const scissorsHere = document.getElementById('scissors');
const theGameHere = document.getElementById('rockpaperandscissors');
const scorePartOfGame = document.getElementById('scorepart');
const alternativesInGameDiv = document.getElementById('alternativsforgame');
const rulesButton = document.getElementById('rulesButton');

// Play again button that appears after game is finish.
const playAgainHere = document.createElement('button');
playAgainHere.innerText = 'Play Again!';
playAgainHere.classList.add('mynewButton');

// The scorekeeping numbers for computer and the player.
let computerScoreHere = 0;
let playersScoreHere = 0;

//Scorekeeping text for the player and computer.
const textForThePlayer = document.createElement('p');
textForThePlayer.textContent = `You win: ${playersScoreHere}`;
scorePartOfGame.appendChild(textForThePlayer);
const textForComputer = document.createElement('p');
textForComputer.textContent = `Computer win: ${computerScoreHere}`;
scorePartOfGame.appendChild(textForComputer);

//Game area that shows the text choose your alternatives and win and lose.
const gameareaText = document.createElement('h3');
gameareaText.innerText = 'Choose your alternative!';
theGameHere.appendChild(gameareaText);
gameareaText.classList.add('textinsidegame');
const bestOFthree = document.createElement('p');
bestOFthree.innerText = 'First To 3 Scores Wins!';
theGameHere.appendChild(bestOFthree);

// Alternatives array with the text rock, paper and scissors in it.
const choicesHere = ["rock", "paper", "scissors"];
/**
 * This function handles everything around playing the game. It takes the guess from the computer
 * and the player and sorting it if the choice is right or wrong.
 * @param {*} alternativHere 
 */
function playingTheGame(alternativHere) {
    const theComputerNumber = Math.floor(Math.random() * 3);
    const randomChoicesHere = choicesHere[theComputerNumber];
    // Determine game result and update the scores
    if (alternativHere === randomChoicesHere) {
        gameareaText.innerText = 'Same As The Computer!';
    } else if (
        (alternativHere === "rock" && randomChoicesHere === 'scissors') ||
        (alternativHere === 'paper' && randomChoicesHere === "rock") ||
        (alternativHere === "scissors" && randomChoicesHere === "paper")
    ) {
        gameareaText.innerText = 'You Won!';
        playersScoreHere++;
        textForThePlayer.textContent = `You win: ${playersScoreHere}`;
    } else {
        gameareaText.innerText = 'You Lose!';
        computerScoreHere++;
        textForComputer.textContent = `Computer win: ${computerScoreHere}`;
    }
    
    // Check if game has ended
    countingDownGame();
}
// Event listeners for the buttons
const buttons = [rockHere, paperHere, scissorsHere];
const choices = ["rock", "paper", "scissors"];
// a for loop
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => playingTheGame(choices[i]));
}
/**
 * function that shows text when you win or lose the game of rock paper and scissors.
 * congratulations if you win. sorry you lose if you lose the game.
 */
function countingDownGame() {
    if (playersScoreHere >= 3) {
        endGame('Congratulations, you won!', 'Green');
    } else if (computerScoreHere >= 3) {
        endGame('Sorry, you lose!', 'Red');
    }
}
/**
 * Function handles the end of the game by showing a message to player
 * whether the player won or lost, and the styling of the button if win or loose.
 * Hides game options and the score part.
 * "Play Again" button to restart the game appears.
 * @param {*} message showing outcome of the game.
 * @param {*} color used for message text.
 */
function endGame(message, color) {
    gameareaText.innerText = message;
    gameareaText.style.color = color;
    gameareaText.style.fontSize = '1.5rem';
    alternativesInGameDiv.style.display = 'none';
    scorePartOfGame.style.display = 'none';
    bestOFthree.style.display = 'none';
    gameareaText.appendChild(playAgainHere);
}
/**
 * This function restarts the game.
 */
function startGameAgain() {
    location.reload();
}
// Event listener for the Play Again button
playAgainHere.addEventListener('click', startGameAgain);
// Create modal for rules
const modal = document.createElement('div');
modal.id = 'rulesModal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.margin = '15% auto';
modalContent.style.padding = '20px';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '80%';
const closeModal = document.createElement('span');
closeModal.innerHTML = '&times;';
closeModal.style.color = '#aaa';
closeModal.style.float = 'right';
closeModal.style.fontSize = '28px';
closeModal.style.fontWeight = 'bold';
closeModal.style.cursor = 'pointer';
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
const modalText = document.createElement('p');
modalText.innerText = 'Rules For Game: \n\n1. Rock beats Scissors. \n2. Paper beats Rock. \n3. Scissors beat Paper.';
modalContent.appendChild(closeModal);
modalContent.appendChild(modalText);
modal.appendChild(modalContent);
document.body.appendChild(modal);
// Event listener for rules button
rulesButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});
