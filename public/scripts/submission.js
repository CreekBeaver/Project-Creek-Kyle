// Note: A lot of this Functionality is re-used from Activity 5. 
document.addEventListener('DOMContentLoaded', bindButton1);
document.addEventListener('DOMContentLoaded', bindButton3);

function bindButton1(){
	// Create an Event Listener for the 'submit1' Button
	document.getElementById('submit1').addEventListener("click", function(event) {
		// Define the Input Data to parse URL
		let url = 'https://dog.ceo/api/breeds/image/random';
		console.log(url);
		
		// Send the Request and Capture the Response
		var req = new XMLHttpRequest();
		req.open("GET", url, false);
		req.addEventListener('load',function(){
		if(req.status >= 200 && req.status < 400){
			let response = JSON.parse(req.responseText);
			let img= document.getElementById('dogImage');
			img.src = response['message'];
			//console.log('here is the response', response);
		} else {
			console.log("Error in network request: " + req.statusText);
		}});		
		req.send(null);
		var bark = new Audio('/audio/submission/bark.mp3');
		bark.play();
	});

};

function bindButton3(){
	// Creat an Event Listener for the 'submit3' Button
	document.getElementById('submit3').addEventListener("click", function(event) {
		let text = document.getElementById('form2Input').value;
		//console.log(text);
		var req = new XMLHttpRequest();		
		req.open("POST", "http://httpbin.org/post", false);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
		if(req.status >= 200 && req.status < 400){
			let response = JSON.parse(req.responseText);
			let repeat = response['data'].toUpperCase();
			// Start Filling the Page
			document.getElementById('postResponse').textContent = repeat;
		} else {
			console.log("Error in network request: " + req.statusText);
		}});	
		req.send(text);
	});


};