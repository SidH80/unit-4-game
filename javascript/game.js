$(document).ready(function() {

    //Variables Declared
    var userScore;
    var compGuess;

    var wins = 0;
    var losses = 0;

    var randomButtonNumber = [];
    console.log(randomButtonNumber);

    function createRanNum() {

        // Generates computer random number and pushes to page
        compGuess = Math.floor(Math.random() * (120 - 19) + 19);
        $("#comp-score").text(compGuess);

        // Generates 4 random numbers to be assigned to each button
        for (var i = 0; i < 4; i++) {

            // Generates random button values
            randomButtonNumber[i] = Math.floor(Math.random() * 12) + 1;

        }

    }

    $("#game-header").on("click", function() {
        alert("you've clicked me!");
    })

    function initGame() {
        //Clears the div before game and after game is wom/lost
        $(".jewels").empty();

        // Sets user score to 0 and pushes to page
        userScore = 0;
        $("#your-score").text(userScore);

        // Randomize call
        createRanNum();

        //Generates 4 crystals and assigns CSS class attributes
        for (var i = 0; i < 4; i++) {

            var imageGem = $("<img>");

            // CSS added class
            imageGem.addClass("crystals");

            // Sources images from net and adds attribute
            imageGem.attr("src", "https://cdn.britannica.com/78/170778-131-D35E060F/Reflections-diamond.jpg");

            // Attributes string value and assigns number[i]
            imageGem.attr("data-value", randomButtonNumber[i]);

            // Appends variable to jewels div
            $(".jewels").append(imageGem);

        }

        //Game Logic
        $("img").on("click", function() {

            //Pulls data value and parses it into an integer to be added to user score
            var gemValue = ($(this).attr("data-value"));
            gemValue = parseInt(gemValue);

            userScore += gemValue;
            console.log(userScore, gemValue);
            $("#your-score").text(userScore);

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

        });

    };
    // Calls start game function
    initGame();

    // Document Ready Function End
});
