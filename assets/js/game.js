var players;
var word;

var scores;


// On page load
window.onload = function() {

    // Display warning before the page is closed
    window.onbeforeunload = function(e) {
        return 'Uh oh! You have a game in progress! Are you sure you want to quit?';
    };

    // Get our variables from sessionstorage
    players = sessionStorage.getItem("players");
    word = sessionStorage.getItem("word");

    $("#word").html(word);
    $("#players").html(players);

    initScore();

}

// ------
// Scores
// ------

// Initializes the scoreboard
function initScore() {
    // Create the scoring system. The scores are stored as key/value pairs. The key is the player name (ex. player1) and the value is the score
    scores = {};
    for (i = 1; i <= players; i++) {
        scores[player + i] = 0;
    }

    initScoreboard();

}

// Increments a player's score by one
function incrementScore(playerNum) {
    scores.playerNum++;
}

// De-increments a player's score by one (used if a player accidentally gives a player a point)
function deincrementScore(playerNum) {
    scores.playerNum--;
}

// Creates the scoreboard UI
function initScoreboard() {
    for (i = 0; i < players; i++) {

    }
}