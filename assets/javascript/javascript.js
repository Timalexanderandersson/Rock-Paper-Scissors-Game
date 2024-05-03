let RockHere = document.getElementById('Rock');
let PaperHere = document.getElementById('Paper');
let SiccorsHere = document.getElementById('Scissors');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame');


let PlayAgainHere = document.createElement('button');

//Play Again Button
PlayAgainHere.innerText = 'Play Again!';
PlayAgainHere.classList.add('MynewButton');

//ScoreKeeping numbers
let ComputerScoreHere = 0;
let PlayersScoreHere = 0;

//Score keeping 
let textForThePlayer = document.createElement('p');
textForThePlayer.textContent = 'You win :';
ScorePartOfGame.appendChild(textForThePlayer);
let TextForComputer = document.createElement('p');
TextForComputer.textContent = 'Computer win :';
ScorePartOfGame.appendChild(TextForComputer);


// Game Text 
let GameareaText = document.createElement('h3');
GameareaText.innerText = 'Choose your alternative!';
TheGameHere.appendChild(GameareaText);
GameareaText.classList.add('TextInsideGame');
let bestOFthree = document.createElement('p');
bestOFthree.innerText = 'First To 3 Scores Wins!';
TheGameHere.appendChild(bestOFthree);


// Alternativs For Game
let ChoicesHere = ["Rock", "Paper", "Scissors"];



//Function to start the game
function playingTheGame(AlternativHere) {



    // computer choices

    let theComputerNumber = Math.floor(Math.random() * 3);
    let RandomChoicesHere = ChoicesHere[theComputerNumber];
    console.log(RandomChoicesHere);



    if (AlternativHere === RandomChoicesHere) {
        GameareaText.innerText = 'Same As The Computer!';
    } else if (AlternativHere === "Rock" && RandomChoicesHere === 'Scissors') {

        GameareaText.innerText = 'You Won!';
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :' + PlayersScoreHere;

    } else if (AlternativHere === 'Paper' && RandomChoicesHere === "Rock") {
        GameareaText.innerText = 'You Won!';
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :' + PlayersScoreHere;

    } else if (AlternativHere === "Scissors" && RandomChoicesHere === "Paper") {
        GameareaText.innerText = 'You Won!';
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :' + PlayersScoreHere;
    }

    // Computer Wins
    if (RandomChoicesHere === "Rock" && AlternativHere === "Scissors") {
        GameareaText.innerText = 'You Lose!';
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :' + ComputerScoreHere;

    } else if (RandomChoicesHere === "Paper" && AlternativHere === "Rock") {
        GameareaText.innerText = 'You Lose!';
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :' + ComputerScoreHere;

    } else if (RandomChoicesHere === "Scissors" && AlternativHere === "Paper") {
        GameareaText.innerText = 'You Lose!';
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :' + ComputerScoreHere;
    }
    CountingDownGame();
    console.log('PlayingtheGamehere');
}




//EventListeners for the buttons
RockHere.addEventListener('click', function () {
    playingTheGame("Rock");
});

PaperHere.addEventListener('click', function () {
    playingTheGame("Paper");
});
SiccorsHere.addEventListener('click', function () {
    playingTheGame("Scissors");
});


// function for ending game if its over 3 wins
function CountingDownGame() {
    if (PlayersScoreHere >= 3) {
        GameareaText.innerText = 'congratulations you won!';
        GameareaText.style.color = 'Green';
        GameareaText.style.fontSize = '1.3rem';
        AlternativesInGameDiv.style.display = 'none';
        ScorePartOfGame.style.display = 'none';
        bestOFthree.style.display = 'none';
        GameareaText.appendChild(PlayAgainHere);

    } else if (ComputerScoreHere >= 3) {
        GameareaText.innerText = 'Sorry You lose!';
        GameareaText.style.color = 'Red';
        GameareaText.style.fontSize = '1.5rem';
        AlternativesInGameDiv.style.display = 'none';
        ScorePartOfGame.style.display = 'none';
        bestOFthree.style.display = 'none';
        GameareaText.appendChild(PlayAgainHere);


    }
}



// Restart Game
function StartGameAgain() {
    location.reload();
    console.log('restart');
}

//BUtton for Restart The Game
PlayAgainHere.addEventListener('click', StartGameAgain);