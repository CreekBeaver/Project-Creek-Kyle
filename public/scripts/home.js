// Credit to Matthew Croak for baseline Javascript Functionality. 
var slideIndex = 1;

var myTimer;
var audio = new Audio('/audio/home/waiting.mp3');
var slideshowContainer;
window.addEventListener("load",function() {
    audio.play();
	// Call and show slides / Set the Timer. 
	showSlides(slideIndex);
    myTimer = setInterval(function(){
		plusSlides(1)}, 7000);
});

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 7000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 7000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 7000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
	  slideIndex = 1
	};
  if (n < 1) {
	  slideIndex = slides.length
	};
  // This Line Hides all the other Slides. 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
	};	
   // Adjust the image Properties.
  slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.alignItems = "center";
  slides[slideIndex-1].style.flexDirection = "column";
}


//audio.play();