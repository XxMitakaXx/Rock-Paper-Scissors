let endGameMessage = document.getElementById('endGameMessage');
let scoreTable = document.getElementById('scoreTable');
let userScore = document.getElementById('userScore');
let botScore = document.getElementById('botScore');
let roundInfo = document.getElementById('roundInfo');
let userPaper = document.getElementById('userPaper');
let userRock = document.getElementById('userRock');
let userScissors = document.getElementById('userScissors');
let botPaper = document.getElementById('botPaper');
let botRock = document.getElementById('botRock');
let botScissors = document.getElementById('botScissors');
let botCardBack1 = document.getElementById('botCardBack1');
let botCardBack2 = document.getElementById('botCardBack2');
let botCardBack3 = document.getElementById('botCardBack3');
let isWin = false;
let isUserWinTheGame = false;
let isbotWinTheGame = false;
let whichCard = '';
let whichCardBack = 0;
let endGameMessageText = '';
let playAgain = document.getElementById('playAgain');

playAgain.addEventListener('click', () => {
	userScore.innerHTML = '0';
	botScore.innerHTML = '0';
	endGameMessage.innerHTML = '';
})