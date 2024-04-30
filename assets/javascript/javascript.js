let RockHere = document.getElementById('Rock');
let PaperHere = document.getElementById('Paper');
let SiccorsHere = document.getElementById('Scissors');
let thebiggamearea = document.getElementById('thebiggamearea');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame');
let headerhere = document.getElementById('Headerhere');
let mainpartHere = document.getElementById('mainPart');


//Score keeping 
let TextForComputer = document.createElement('p');
TextForComputer.textContent = 'Computer win :';
ScorePartOfGame.appendChild(TextForComputer);
let textForThePlayer = document.createElement('p');
textForThePlayer.textContent = 'You win :';
ScorePartOfGame.appendChild(textForThePlayer);


// Game Text 
let GameareaText = document.createElement('h3');
    GameareaText.innerText = 'Choose your alternativ!';
    TheGameHere.appendChild(GameareaText);
    GameareaText.classList.add('TextInsideGame');

// Alternativs For Game
let ChoicesHere = ["Rock","Paper","Scissors"];



//ScoreKeeping here
function ScoreKeepingHere(){
    let ComputerScoreHere = 0;
    let PlayersScoreHere = 0;
};




//Function to start the game
function playingTheGame(AlternativHere) {



// computer choices

    let theComputerNumber = Math.floor(Math.random()*3);
    let RandomChoicesHere = ChoicesHere[theComputerNumber];
    console.log(RandomChoicesHere);



    if(AlternativHere === RandomChoicesHere){
       
    } else if (AlternativHere === "Rock" && RandomChoicesHere === 'Scissors') {

    } else if (AlternativHere === 'Paper' && RandomChoicesHere === "Rock"){
        
    } else if (AlternativHere === "Scissors" && RandomChoicesHere === "Paper"){
        
    };

    // Computer Wins
    if(RandomChoicesHere === "Rock" && AlternativHere === "Scissors"){

    } else if(RandomChoicesHere === "Paper" && AlternativHere === "Rock"){
        
    } else if (RandomChoicesHere === "Scissors" && AlternativHere === "Paper"){
        
    }

    console.log('PlayingtheGame');
};




//EventListeners for the buttons
RockHere.addEventListener('click', function (){
    playingTheGame("Rock")
});

PaperHere.addEventListener('click', function (){
    playingTheGame("Paper")
});
SiccorsHere.addEventListener('click', function (){
    playingTheGame("Scissors")
});

