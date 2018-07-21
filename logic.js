let firstButton = document.querySelector(".item-1");
let sencondButton = document.querySelector(".item-2");
let thirdButton = document.querySelector(".item-3");
let fourthButton = document.querySelector(".item-4");
let fifthButton = document.querySelector(".item-5");
let sixthButton = document.querySelector(".item-6");

firstButton.addEventListener('click', (e) => {
	console.log(e);
	let red = (Math.random() * 255) + 1;
	let green = (Math.random() * 255) + 1;
	let blue = (Math.random() * 255) + 1;
	firstButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});