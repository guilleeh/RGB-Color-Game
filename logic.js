// START, MODE BUTTONS
let restart = document.querySelector(".reset");
let easyMode = document.querySelector(".mode-easy");
let hardMode = document.querySelector(".mode-hard");
let rgbColor = document.getElementById("rgb-code");
let result = document.querySelector(".result");
let background = document.querySelector(".background");

// BUTTONS FOR COLORS
let firstButton = document.querySelector(".item-1");
let secondButton = document.querySelector(".item-2");
let thirdButton = document.querySelector(".item-3");
let fourthButton = document.querySelector(".item-4");
let fifthButton = document.querySelector(".item-5");
let sixthButton = document.querySelector(".item-6");

let correctColor = 'RGB(0, 0, 0)';

function changeAllColors() {
	firstButton.style.backgroundColor = correctColor;
	secondButton.style.backgroundColor = correctColor;
	thirdButton.style.backgroundColor = correctColor;
	fourthButton.style.backgroundColor = correctColor;
	fifthButton.style.backgroundColor = correctColor;
	sixthButton.style.backgroundColor = correctColor;
	background.style.backgroundColor = correctColor;
}


// Checks if colors are the same
function compareColors(userColorChoice, setCorrectColor){
	if( userColorChoice == setCorrectColor){
		result.style.color = 'black';
		changeAllColors();
		restart.innerHTML = 'PLAY AGAIN?';
		return true;
	}
	return false;
}

//Picks, at random, one tile to be the correct tile
function pickRightTile(){
	let number = (Math.random() * 120) + 1;
	// let number = 7;
	if ( number > 1 && number <= 20 ) {
		correctColor = String(firstButton.style.backgroundColor);
		rgbColor.innerHTML = String(firstButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	} else if ( number > 20 && number <= 40 ) {
		correctColor = String(secondButton.style.backgroundColor);
		rgbColor.innerHTML = String(secondButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	} else if ( number > 40 && number <= 60 ) {
		correctColor = String(thirdButton.style.backgroundColor);
		rgbColor.innerHTML = String(thirdButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	} else if ( number > 60 && number <= 80 ) {
		correctColor = String(fourthButton.style.backgroundColor);
		rgbColor.innerHTML = String(fourthButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	} else if ( number > 80 && number <= 100 ) {
		correctColor = String(fifthButton.style.backgroundColor);
		rgbColor.innerHTML = String(fifthButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	} else if ( number > 100 && number <= 120 ) {
		correctColor = String(sixthButton.style.backgroundColor);
		rgbColor.innerHTML = String(sixthButton.style.backgroundColor);
		rgbColor.innerHTML = rgbColor.innerHTML.replace('rgb', 'RGB');
	}
}

//Sets random color to each tile
function prepareGame(){
	firstButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	secondButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	thirdButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	fourthButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	fifthButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	sixthButton.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`;
	// rgbColor.innerHTML = String(fourthButton.style.backgroundColor);
	pickRightTile();
}


//Set up Button interaction
firstButton.addEventListener('click', (e) => {
	let userChoice = String(firstButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', firstButton.style.backgroundColor);
	} else {
		firstButton.style.backgroundColor = '#242425';
	}

});

secondButton.addEventListener('click', (e) => {
	let userChoice = String(secondButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', secondButton.style.backgroundColor);
	} else {
		secondButton.style.backgroundColor = '#242425';
	}

});

thirdButton.addEventListener('click', (e) => {
	let userChoice = String(thirdButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', thirdButton.style.backgroundColor);
	} else {
		thirdButton.style.backgroundColor = '#242425';
	}

});

fourthButton.addEventListener('click', (e) => {
	let userChoice = String(fourthButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', fourthButton.style.backgroundColor);
	} else {
		fourthButton.style.backgroundColor = '#242425';
	}

});

fifthButton.addEventListener('click', (e) => {
	let userChoice = String(fifthButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', fifthButton.style.backgroundColor);
	} else {
		fifthButton.style.backgroundColor = '#242425';
	}

});

sixthButton.addEventListener('click', (e) => {
	let userChoice = String(sixthButton.style.backgroundColor);
	if( compareColors(userChoice, correctColor) ){
		console.log(correctColor, '==', sixthButton.style.backgroundColor);
	} else {
		sixthButton.style.backgroundColor = '#242425';
	}

});

restart.addEventListener('click', (e) => {
	prepareGame();
	restart.innerHTML = 'NEW COLORS';
	result.style.color = 'white';
	background.style.backgroundColor = '#4682B4';
})

prepareGame();

