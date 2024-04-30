let RockHere = document.getElementById('Rock');
let PaperHere = document.getElementById('Paper');
let SiccorsHere = document.getElementById('Scissors');
let thebiggamearea = document.getElementById('thebiggamearea');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame');
let headerhere = document.getElementById('Headerhere');
let mainpartHere = document.getElementById('mainPart');


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
    GameareaText.innerText = 'Choose your alternativ!';
    TheGameHere.appendChild(GameareaText);
    GameareaText.classList.add('TextInsideGame');

// Alternativs For Game
let ChoicesHere = ["Rock","Paper","Scissors"];





//Function to start the game
function playingTheGame(AlternativHere) {
    


// computer choices

    let theComputerNumber = Math.floor(Math.random()*3);
    let RandomChoicesHere = ChoicesHere[theComputerNumber];
    console.log(RandomChoicesHere);



    if(AlternativHere === RandomChoicesHere){
       
    } else if (AlternativHere === "Rock" && RandomChoicesHere === 'Scissors') {
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :' + PlayersScoreHere;
    } else if (AlternativHere === 'Paper' && RandomChoicesHere === "Rock"){
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :' + PlayersScoreHere;
    } else if (AlternativHere === "Scissors" && RandomChoicesHere === "Paper"){
        ++PlayersScoreHere;
        textForThePlayer.textContent = 'You win :'+ PlayersScoreHere;
    };

    // Computer Wins
    if(RandomChoicesHere === "Rock" && AlternativHere === "Scissors"){
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :'+ ComputerScoreHere;
    } else if(RandomChoicesHere === "Paper" && AlternativHere === "Rock"){
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :'+ ComputerScoreHere;
    } else if (RandomChoicesHere === "Scissors" && AlternativHere === "Paper"){
        ++ComputerScoreHere;
        TextForComputer.textContent = 'Computer win :'+ ComputerScoreHere;
    };

    console.log('PlayingtheGamehere');
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

