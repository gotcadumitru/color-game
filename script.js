"use strict"
let newColors = document.querySelector("#newColors");
let colorCels = document.querySelectorAll(".col-4");
let color = document.querySelector("#rgb-color");
let hard = document.querySelector(".hard");
let easy = document.querySelector(".easy");
let rowHard = document.querySelector(".row-hard");
let gameStatus = document.querySelector(".game-status");
let scoreColor = document.querySelector(".score");
let numbOfColor = 6;
let gameWin = false;

resetColors(numbOfColor);

newColors.addEventListener("click",function(){
	resetColors(numbOfColor);
});

hard.addEventListener("click",function(){
	if(this.classList.contains('active')){
		resetColors(numbOfColor);
	}else{
		this.classList.add("active");
		easy.classList.remove("active");
		numbOfColor = 6;
		resetColors(numbOfColor);
		rowHard.style.display = "flex";
	}
});

easy.addEventListener("click",function(){
	if(this.classList.contains('active')){
		resetColors(numbOfColor);
	}else{
		this.classList.add("active");
		hard.classList.remove("active");
		numbOfColor = 3;
		resetColors(numbOfColor);
		rowHard.style.display = "none";
	}
});
for(let i = 0; i<numbOfColor; i++){
	colorCels[i].addEventListener("click", function(){
		if(!gameWin){
			if(this.style.backgroundColor == color.textContent){
				gameStatus.textContent = 'Yeah WIIN';
				changeColorWin(color.textContent);
				gameWin = true;
			}else{
				gameStatus.textContent = 'Try again';
				this.style.backgroundColor = "#201f20";
				this.style.cursor = 'default';
			}
		}
	});
}
function getRaNum(num){
	return 	Math.floor(Math.random() * num);
}
function getRgbCol(){
	let num = Math.floor(Math.random() * 3)
	if(num === 0)
	return "rgb("+getRaNum(30)+", "+getRaNum(256)+ ", "+getRaNum(256)+ ")";
	if(num === 1)
	return "rgb("+getRaNum(256)+", "+getRaNum(30)+ ", "+getRaNum(256)+ ")";
	if(num === 2)
	return "rgb("+getRaNum(256)+", "+getRaNum(256)+ ", "+getRaNum(30)+ ")";
}
function changeColorWin(color){
	for(let i = 0; i< numbOfColor; i++){
		colorCels[i].style.backgroundColor = color;
		if(colorCels[i].style.cursor === 'default'){
			colorCels[i].style.cursor = 'pointer';
		}
	}
	scoreColor.style.backgroundColor = color;
}
function resetColors(numbOfColor){
	showColors();
	gameStatus.textContent = 'New Game';
	color.textContent = colorCels[Math.floor(Math.random() * numbOfColor)].style.backgroundColor;
	gameWin = false;
}
function showColors(){
	for(let i=0; i < numbOfColor; i++){
		colorCels[i].style.backgroundColor = getRgbCol();
		if(colorCels[i].classList.contains("lose")){
			colorCels[i].classList.remove("lose");
		}
		if(colorCels[i].style.cursor === 'default'){
			colorCels[i].style.cursor = 'pointer';
		}
	}
}