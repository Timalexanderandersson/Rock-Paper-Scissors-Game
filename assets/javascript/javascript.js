let RockHere = document.getElementById('RockHere');
let PaperHere = document.getElementById('PaperHere');
let SiccorsHere = document.getElementById('ScissorsHere');
let thebiggamearea = document.getElementById('thebiggamearea');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame')


let ComputerScoreHere = 0;
let PlayerScore = 0;


//Function to start the game
function startTheGame() {
    TheGameHere.style.borderStyle = 'none'
    TheGameHere.style.backgroundColor = '#A78387';
    AlternativesInGameDiv.innerHTML = '';
    ScorePartOfGame.innerHTML = '';
    ScorePartOfGame.style.borderStyle = 'none';
    thebiggamearea.style.backgroundColor = '#A78387';
    ScorePartOfGame.style.borderStyle = 'none'
   
    let MyStartButton = document.createElement('button')

    MyStartButton.innerText = 'Start Game!'
    TheGameHere.appendChild(MyStartButton)
    MyStartButton.classList.add('StartButton')

};
startTheGame()