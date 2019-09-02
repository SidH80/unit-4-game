console.log("hooked up");

// declared variables
var userScore;
var compGuess;

//scoreboard
var wins = 0;
var losses = 0;

//button variables
var btn1;
var btn2;
var btn3;
var btn4;

btn1 = Math.floor(Math.random()* 12) + 1;
console.log(btn1);
btn2 = Math.floor(Math.random()* 12) + 1;
btn3 = Math.floor(Math.random()* 12) + 1;
btn4 = Math.floor(Math.random()* 12) + 1;


function initGame() {
    compGuess = 0;
    userScore = 0;

};

// Event setup using a convenience method
$( ".btn" ).click(function() {
    console.log( "You clicked a paragraph!" );
});



//game functions




// document ready ending bracket


