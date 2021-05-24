console.log('activate game');

var gameSpace = document.getElementById('gameSpace');
let target = '0,0'
var score = 0;
// Create Score Space
function createScoreSpace() {
		var scoreSpace = document.getElementById('scoreSpace');
		scoreSpace.innerText='Score: ' + score.toString();		
}
// Handles the clicked Button
function clickedButton(buttonObject) {
		var buttonID = buttonObject.id;
		// Case where the button Id Matches the Clicked button
		if (buttonID == target) {
			// Handle the Pressed Button
			buttonObject.style.backgroundColor = 'grey';
			buttonObject.innerText = 'Dont Press Me';
			// Handle the Score
			score = score + 1;
			// Assign a New button and target
			var row = randomNumber();
			var column = randomNumber();
			var newID = row.toString() + ',' + column.toString();
			target = newID;
			buttonObject2 = document.getElementById(newID);
			buttonObject2.innerText = 'Press Me';
			buttonObject2.style.backgroundColor='red';
			createScoreSpace();
		};
};


function makeButtons(gameSpace) {
	var j = 0;
	while (j < 10){
		// Create the Div to House the buttons
		var rowDiv = document.createElement('DIV');
		rowDiv.className = 'rowDiv';
		rowDiv.id='j'
		gameSpace.appendChild(rowDiv)
		// Create the buttons to Populate the Div
		var i = 0;
		while (i < 10) {
			var button1 = document.createElement("Button");
			var title = j.toString() + ',' +  i.toString();
			button1.id=title;
			button1.innerText='Dont Press Me';
			button1.className = 'button';
			button1.addEventListener('click',function(){
				clickedButton(this);
			});
			rowDiv.appendChild(button1);
			i++;
		}
		j++;
	}
	var first = document.getElementById("0,0");
	first.style.backgroundColor='red'
	first.innerText='Press Me';
}
// Used to determine the random target button. 
function randomNumber() {
	return Math.floor(Math.random()*10)
}
// Create the Buttons to be Pressed
makeButtons(gameSpace);
createScoreSpace();


