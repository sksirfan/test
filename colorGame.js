
var numSquares = 6;
var colors = generateRandomColors(numSquares);
/*[
	"rgb(255, 222, 200)",
	"rgb(25, 123, 2)",
	"rgb(228, 122, 26)",
	"rgb(55, 255, 20)",
	"rgb(234, 234, 255)",
	"rgb(255, 255, 255)"
]**/
var squares = document.querySelectorAll(".square");
//var pickedColor = colors[1];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

for(var i=0 ; i < modeButtons.length ; i++){
	modeButtons[i].addEventListener("click" , function (){
		modeButtons[0].classList.remove ("selected");
		modeButtons[1].classList.remove ("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6 ;
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	//change display color to math picked color
	colorDisplay.textContent = pickedColor;
	
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0;i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor= colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue" ;
}


//code refactoring

/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click" , function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3 ;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];			
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click" , function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6 ;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	
})

***/

resetButton.addEventListener("click" , function(){
	reset();
	/****
	//generate all new colors
	numSquares = 6 ;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	//change display color to math picked color
	colorDisplay.textContent = pickedColor;
	this.textContent ="New Colors";
	
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0;i< squares.length; i++){
	
	squares[i].style.backgroundColor= colors[i];
	}
	
	h1.style.backgroundColor = "steelblue" ; 
	*****/
})

colorDisplay.textContent= pickedColor;
for(var i=0;i< squares.length; i++){
	
	squares[i].style.backgroundColor= colors[i];
	
		squares[i].addEventListener("click",function(){
			var	clickedColor = this.style.backgroundColor;
			//alert(this.style.backgroundColor);
			//alert(clickedColor);
			//alert(pickedColor);
			if(clickedColor === pickedColor){
				//alert("Correct");	
				messageDisplay.textContent = "CORRECT";
				resetButton.textContent = "PLAY AGAIN?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				//alert("Wrong!!!");
				this.style.backgroundColor = "#232323" ;
				messageDisplay.textContent = "TRY AGAIN!!";
			}
		
		
		});
	
	}

function changeColors(color){			
	for(var i= 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = color;			
	}
}

function pickColor(){
	
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
		//create an array 
	var arr = []
		//repeat num times
	for(i=0 ; i < num ; i++){
		//add num random colors PUSH into array
		arr.push(randomColor())
	}		
		//return that array
	return arr;
	
	
	
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()* 256 ); // because math function doesn;t count the last number so adding 1 ie., 255+1
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()* 256 ); 
	//pick a "green" from 0-255
	var b = Math.floor(Math.random()* 256 ); 
		//  formating rgb (r , g , b)
	return "rgb("+ r + ", " + g + ", " + b +")";
}	
	
	
	
	
	
	
	