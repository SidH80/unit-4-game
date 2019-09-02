console.log("hooked up");

$(document).ready(function () {

    //scoreboard
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //button variables
    var btn1 = Math.floor(Math.random() * 12) + 1;
    var btn2 = Math.floor(Math.random() * 12) + 1;
    var btn3 = Math.floor(Math.random() * 12) + 1;
    var btn4 = Math.floor(Math.random() * 12) + 1;

    //random numbers generated for buttons and computer score
    var compGuess = Math.floor(Math.random() * (120 - 34) + 34);
    console.log(compGuess);

    function resetScores() {
        userScore = 0;
        $("#status-text").text("Now Playing");
        $("#your-score").text(userScore);
    }


    function buttonLogic() {

        $("#comp-score").text(compGuess);
        $("#status-text").text("Now Playing");

        $("#btn-1").click(function () {
            console.log("You clicked a button1");
            userScore += btn1;
            console.log(userScore);
            $("#your-score").text(userScore);
            console.log(btn1);
            gameLogic();
        });

        $("#btn-2").click(function () {
            userScore += btn2
            console.log("You clicked a button2");
            console.log(userScore);
            $("#your-score").text(userScore);
            console.log(btn2);
            gameLogic();
        });

        $("#btn-3").click(function () {
            userScore += btn3
            console.log("You clicked a button3");
            console.log(userScore);
            $("#your-score").text(userScore);
            console.log(btn3);
            gameLogic();
        });

        $("#btn-4").click(function () {
            userScore += btn4
            console.log("You clicked a button4");
            console.log(userScore);
            $("#your-score").text(userScore);
            console.log(btn4);
            gameLogic();
        });
    }

    buttonLogic();

    function gameLogic() {

        if(userScore > compGuess)
        {
            losses++;
            $("#status-text").text("Game Over. Try again.");
            $("#losses-text").text(losses);


        } else if(userScore === compGuess)
        {
            wins++;
            $("#wins-text").text(wins);
            $("#status-text").text("You've Won!");


        }
    }

});