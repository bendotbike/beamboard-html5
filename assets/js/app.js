var players;
var word;

// On page load
window.onload = function() {

    // Make sure we are using a modern browser with web storage
    if (typeof(Storage) == "undefined") {
        $("#no-webstorage-alert").css("display", "block");
    }

}

// Opens #create-game-modal
function openCreateGameModal() {
    $("#create-game-modal").modal();
}

// Validates input on create-game-modal
function validateInput() {
    players = $("#input-players").val();
    word = $("#input-word").val();

    // Validation
    if (players == "" || word == "") {
        $("#error-modal").modal();
        return;
    }

    // Remove all non-alphanumeric characters from players & words
    players = players.replace(/\W/g, "");
    word = word.replace(/\W/g, "");

    console.log("Players: " + players);
    console.log("Word: " + word);

    sessionStorage.setItem("players", players);
    sessionStorage.setItem("word", word);

    playGame();
}

// Closes error-modal
function closeErrorModal() {
    $("#error-modal").modal("toggle");
}

// Starts the game
function playGame() {

    window.location.href = "/game";

}