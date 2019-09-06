$(document).ready(function() {

    //Variables Declared
    var userScore;
    var compGuess;

    var wins = 0;
    var losses = 0;

    var btn1;
    var btn2;
    var btn3;
    var btn4;

    //Initializes game with cleared scores and randomized numbers
    function initGame() {

        userScore = 0;

        compGuess = Math.floor(Math.random() * (120 - 19) + 19);

        btn1 = Math.floor(Math.random() * 12) + 1;
        btn2 = Math.floor(Math.random() * 12) + 1;
        btn3 = Math.floor(Math.random() * 12) + 1;
        btn4 = Math.floor(Math.random() * 12) + 1;

        $("#comp-score").text(compGuess);
        $("#your-score").text(userScore);

    }

    initGame();

    //Contains logic for button increments and scoreboard updates
    function isPlaying() {

        $("#btn-1").click(function() {
            userScore += btn1;
            $("#your-score").text(userScore);
            gameLogic();
        })

        $("#btn-2").click(function() {
            userScore += btn2;
            $("#your-score").text(userScore);
            gameLogic();
        })

        $("#btn-3").click(function() {
            userScore += btn3;
            $("#your-score").text(userScore);
            gameLogic();
        })

        $("#btn-4").click(function() {
            userScore += btn4;
            $("#your-score").text(userScore);
            gameLogic();
        })

    }

    isPlaying();

    //Includes game logic conditionals and scoreboard updates called during isPlaying
    function gameLogic() {

        if (userScore === compGuess) {
            wins++;
            $("#wins-text").text(wins);
            $("#status-text").text("You've Won!");
            initGame();
        } else if (userScore > compGuess) {
            losses++;
            $("#status-text").text("Game Over.");
            $("#losses-text").text(losses);
            initGame();
        }

    }
//Document ready ending tags
});

//////////////////////////////////
