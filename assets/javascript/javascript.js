let RockHere = document.getElementById('RockHere');
let PaperHere = document.getElementById('PaperHere');
let SiccorsHere = document.getElementById('ScissorsHere');
let thebiggamearea = document.getElementById('thebiggamearea');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame');
let headerhere = document.getElementById('Headerhere');
let mainpartHere = document.getElementById('mainPart')


let ComputerScoreHere = 0;
let PlayerScore = 0;


//Function to start the game
function startTheGame() {
    TheGameHere.style.borderStyle = 'none'
    TheGameHere.style.backgroundColor = '#A78387';
    AlternativesInGameDiv.innerHTML = '';
    ScorePartOfGame.innerHTML = '';
    ScorePartOfGame.style.borderStyle = 'none'
    headerhere.innerText = '';
    thebiggamearea.style.backgroundColor = '#A78387';
    thebiggamearea.style.borderColor = '#dbccce';
    thebiggamearea.style.borderStyle = 'solid';

    let MyNewHeader = document.createElement('h1')
    MyNewHeader.innerText = 'You ready to Play Rock Paper and Sicssors?'
    let MyStartButton = document.createElement('button')
    TheGameHere.appendChild(MyNewHeader)
    MyStartButton.innerText = 'Start Game!'
    TheGameHere.appendChild(MyStartButton)
    MyStartButton.classList.add('StartButton')
    MyNewHeader.classList.add('TheNewHeader')

};
startTheGame()