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

            var imageCrystal = $("<img>");

            // CSS added class
            imageCrystal.addClass("crystals");

            // Sources images from net and adds attribute
            imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

            // Attributes string value and assigns number[i]
            imageCrystal.attr("data-value", randomButtonNumber[i]);

            // Appends variable to jewels div
            $(".jewels").append(imageCrystal);

        }

        //Game Logic
        $("img").on("click", function() {

            //Pulls data value and parses it into an integer to be added to user score
            var crystalValue = ($(this).attr("data-value"));
            crystalValue = parseInt(crystalValue);

            userScore += crystalValue;
            console.log(userScore, crystalValue);
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
