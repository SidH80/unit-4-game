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

            var imageCrystal = $("<img>");

            // CSS added class
            imageCrystal.addClass("crystals");

            // Sources images from net and adds attribute
            imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

            // Attributes string value and assigns number[i]
            imageCrystal.attr("data-crystalvalue", randomButtonNumber[i]);

            // Appends variable to jewels div
            $(".jewels").append(imageCrystal);

        }

    function playGame() {

    }


    }

    function initGame() {

        // Sets user score to 0 and pushes to page
        userScore = 0;
        $("#your-score").text(userScore);

        // Randomize call
        createRanNum();

    };

    // Calls start game function
    initGame();










// Document Ready Function End
});