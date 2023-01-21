userRock.addEventListener('click', () => {
    let botDecition = Math.round(Math.random() * 3);

    if (botDecition === 1) {
		isWin = true;
		whichCard = 'Scissors';
        whichCardBack = 1;
	} else if (botDecition === 2) {
		isWin = 'draw';
		whichCard = 'Rock';
		whichCardBack = 2;
 	} else {
		isWin = false;
		whichCard = 'Paper';
		whichCardBack = 3;
	}

    let decidedCard = document.getElementById(`bot${whichCard}`);
	let decidedCardBack = document.getElementById(`botCardBack${whichCardBack}`)

	decidedCard.style.transform = 'rotateY(0)';
	decidedCardBack.style.transform = 'rotateY(0)';

	decidedCard.style.zIndex = '1';
	decidedCardBack.style.zIndex = '0';

	let roundInfoText = '';

    if (isWin === true) {
        userScore.innerHTML = Number(userScore.innerHTML) + 1;
		roundInfoText = 'The User win the round';
		roundInfo.style.color = 'lightgreen';
	      
		if (Number(userScore.innerHTML) === 2) {
			isUserWinTheGame = true;
		}
	} else if (isWin === false) {
		botScore.innerHTML = Number(botScore.innerHTML) + 1;
		roundInfoText = 'The Bot win the round';
		roundInfo.style.color = 'red';

		if (Number(botScore.innerHTML) === 2) {
			isbotWinTheGame = true;
		}
	} else {
        roundInfoText = 'Draw';
		roundInfo.style.color = 'black';
	}

	roundInfo.innerHTML = roundInfoText;

	setTimeout(() => {
		decidedCard.style.transform = 'rotateY(180deg)';
	    decidedCardBack.style.transform = 'rotateY(180deg)';
        
	    decidedCard.style.zIndex = '0';
	    decidedCardBack.style.zIndex = '1';
	}, 1000)

	let endGameMessageText = '';

    if (isUserWinTheGame === true) {
	    roundInfo.innerHTML = '';
	    endGameMessageText = 'User win the game 🎉🎉🎉';
	} else if (isbotWinTheGame === true) {
	    roundInfo.innerHTML = '';
	    endGameMessageText = 'Bot win the game 😭😭😭';
	}
	
	endGameMessage.innerHTML = endGameMessageText;
})