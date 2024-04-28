let RockHere = document.getElementById('Rock');
let PaperHere = document.getElementById('Paper');
let SiccorsHere = document.getElementById('Scissors');
let thebiggamearea = document.getElementById('thebiggamearea');
let TheGameHere = document.getElementById('Rockpaperandscissors');
let ScorePartOfGame = document.getElementById('scorepart');
let AlternativesInGameDiv = document.getElementById('AlternativsForGame');
let headerhere = document.getElementById('Headerhere');
let mainpartHere = document.getElementById('mainPart')
let MyStartButton = document.createElement('button')




let ChoicesHere = ["Rock","Paper","Scissors"];

//ScoreKeeping here
function ScoreKeepingHere(){
    let ComputerScoreHere = 0;
    let PlayersScoreHere = 0;
};


// computer choices
function ComputerGaming() {
    let theComputerNumber = Math.floor(Math.random()*3);
    let RandomChoicesHere = ChoicesHere[theComputerNumber];
    console.log(RandomChoicesHere);
};
ComputerGaming()



//Function to start the game
function playingTheGame() {

    

};



