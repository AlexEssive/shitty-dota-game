//players

var allPlayers;
$.getJSON("../data/players.json", function(json) {
    allPlayers = json;
});

//end players