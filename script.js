var wins = 0 ;
var losses= 0 ;

var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 document.onkeyup = function(event) {
 	var userGuess = event.key;
 	var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)]; {
 	if userGuess===computerGuess {
 		wins++
 	}
 	else {
 		losses++
 	}
 	var text = "<p> Wins: " + wins + "</p>" + "<p>losses: " + losses + "Your Guesses so far: " +
  }

